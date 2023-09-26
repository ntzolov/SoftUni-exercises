import './App.scss';

import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { createCharacter, deleteCharacterById, editCharacter, getAllCharacters } from './services/characterServices';
import { globalContext } from './contexts/globalContext';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LoginRegister } from './components/LoginRegister/LoginRegister';
import { Logout } from './components/Logout/Logout';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { MyList } from './components/MyList/MyList';
import { Search } from './components/Search/Search';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Delete } from './components/Delete/Delete';
import useUser from './hooks/useUser';
import { NotFoundError } from './components/NotFoundError/NotFoundError';

function App() {
  const { user, setUser } = useUser();
  const [characters, setCharacters] = useState([]);
  const [createError, setCreateError] = useState('');
  const [editError, setEditError] = useState('');
  const navigate = useNavigate();

  useState(() => {
    getAllCharacters().then((characters) => {
      setCharacters(characters);
    });
  }, []);

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

      navigate('/catalog');
    } catch (error) {
      console.log(error);
    }
  };

  const contextObject = { user, setUser, createError, editError, characters, onDeleteSubmit, onEditSubmit, onCreateSubmit };

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
            <Route path="/catalog/:characterId/delete" element={<Delete />} />
            <Route path="/create" element={<Create />} />
            <Route path="/my-list" element={<MyList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/auth" element={<LoginRegister />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFoundError />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </globalContext.Provider>
  );
}

export default App;
