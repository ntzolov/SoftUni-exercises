import './App.scss';

import { useEffect, useState } from 'react';
import useUser from './hooks/useUser';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { createCharacter, deleteCharacterById, editCharacter, getAllCharacters } from './services/characterServices';
import { globalContext } from './contexts/globalContext';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LoginRegister } from './components/LoginRegister/LoginRegister';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { MyList } from './components/MyList/MyList';
import { Favorites } from './components/Favorites/Favorites';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { NotFoundError } from './components/NotFoundError/NotFoundError';
import { ForbiddenError } from './components/ForbiddenError/ForbiddenError';

function App() {
  const { user, setUser } = useUser();
  const [characters, setCharacters] = useState([]);
  const [createError, setCreateError] = useState('');
  const [editError, setEditError] = useState('');
  const navigate = useNavigate();
  const initialQuery = new URLSearchParams(window.location.search);
  const [searchParams, setSearchParams] = useState({
    search: initialQuery.get('search') || '',
    category: initialQuery.get('category') ?? '',
    page: initialQuery.get('page') || 1,
  });
  const [page, setPage] = useState(searchParams.page);
  const [searchValue, setSearchValue] = useState(searchParams.search);
  const [categoryValue, setCategoryValue] = useState('all');

  useEffect(() => {
    navigate(`/catalog?search=${searchParams.search}&page=${page}`);
  }, []);

  useEffect(() => {
    const querySend = `?search=${searchParams.search}&page=${page}&category=${categoryValue}&userId=${user ? user._id : ''}`;
    getAllCharacters(querySend).then((characters) => {
      setCharacters(characters);
    });
  }, [searchParams, categoryValue, page]);

  const onCreateSubmit = async (e, createValues) => {
    try {
      e.preventDefault();

      createValues._ownerId = user._id;
      const newCharacter = await createCharacter(createValues);
      setCreateError('');
      setCharacters((state) => [...state, newCharacter]);

      navigate(`/catalog/${newCharacter._id}`);
    } catch (error) {
      setCreateError(error.message);
    }
  };

  const onEditSubmit = async (e, characterId, editValues) => {
    try {
      e.preventDefault();

      const editedCharacter = await editCharacter(characterId, editValues);
      setEditError('');
      setCharacters((state) => state.map((x) => (x._id === editedCharacter._id ? editedCharacter : x)));

      navigate(`/catalog/${editedCharacter._id}`);
    } catch (error) {
      setEditError(error.message);
    }
  };

  const onDeleteSubmit = async (e, characterId) => {
    try {
      e.preventDefault();

      const deletedCharacter = await deleteCharacterById(characterId);
      setCharacters((state) => state.filter((x) => x._id !== deletedCharacter._id));

      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogoutSubmit = () => {
    setUser(true, true);
    setCategoryValue('all');
    setSearchValue('');
    setPage(1);
    navigate('/');
  };

  const onSearchSubmit = async (e) => {
    e.preventDefault();
    navigate(`/catalog?search=${searchValue}&page=${page}`);

    setPage(1);
    setSearchParams((state) => ({ ...state, search: searchValue }));
  };

  const resetCharacters = async () => {
    const characters = await getAllCharacters();
    setCharacters(characters);
  };

  const contextObject = {
    user,
    setUser,
    createError,
    editError,
    characters,
    onDeleteSubmit,
    onEditSubmit,
    onCreateSubmit,
    onLogoutSubmit,
    onSearchSubmit,
    resetCharacters,
    setPage,
    page,
    setSearchValue,
    searchValue,
    setCategoryValue,
    categoryValue,
  };

  return (
    <globalContext.Provider value={contextObject}>
      <div className="app">
        <Header />

        <div id="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:characterId" element={<Details />} />
            <Route path="/catalog/:characterId/edit" element={<Edit />} />
            <Route path="/create" element={user ? <Create /> : <ForbiddenError />} />
            <Route path="/my-list" element={user ? <MyList /> : <ForbiddenError />} />
            <Route path="/favorites" element={user ? <Favorites /> : <ForbiddenError />} />
            <Route path="/auth" element={!user ? <LoginRegister /> : <ForbiddenError />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </globalContext.Provider>
  );
}

export default App;
