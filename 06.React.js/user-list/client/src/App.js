// Add loading component when is not loaded!

import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import { createUser, deleteUser, editUser, getUser, searchUser } from './services/fetchServices';
import Error from './components/Error';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3005/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      });
  }, []);

  async function onUserCreateAdd(e, user) {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const user = Object.fromEntries(formData);

    try {
      const userObj = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageUrl: user.imageUrl,
        phoneNumber: user.phoneNumber,
        address: {
          country: user.country,
          city: user.city,
          street: user.street,
          streetNumber: user.streetNumber,
        },
      };

      const newUser = await createUser(userObj);
      setUsers((users) => [...users, newUser]);
    } catch (error) {
      console.log('Error' + error);
    }
  }

  async function onUserEdit(e, id, user) {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const user = Object.fromEntries(formData);

    try {
      const userObj = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        imageUrl: user.imageUrl,
        phoneNumber: user.phoneNumber,
        address: {
          country: user.country,
          city: user.city,
          street: user.street,
          streetNumber: user.streetNumber,
        },
      };

      const editedUser = await editUser(userObj, id);
      setUsers((users) => users.map((x) => (x._id === id ? editedUser : x)));
    } catch (error) {
      console.log('Error' + error);
    }
  }

  async function onUserDelete(id) {
    const deletedUser = await deleteUser(id);
    setUsers((users) => users.filter((user) => user._id !== deletedUser.userId));
  }

  async function getUserInfo(id) {
    const user = await getUser(id);

    return user;
  }

  async function onSearchClick(e, search, criteria) {
    e.preventDefault();

    // const searchText = Object.fromEntries(new FormData(e.currentTarget)).search;
    // const criteria = document.getElementById('criteria').value;

    try {
      const users = await searchUser(search, criteria);
      setUsers(users);
    } catch (error) {
      console.log('Error' + error);
    }
  }

  async function onSearchCloseClick(e) {
    e.preventDefault();

    const form = document.getElementById('searchForm');
    form.reset();

    try {
      const users = await searchUser('', '');
      setUsers(users);
    } catch (error) {
      console.log('Error' + error);
    }
  }

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search onSearchClick={onSearchClick} onSearchCloseClick={onSearchCloseClick} />

          <div className="table-wrapper">
            <Table
              users={users}
              onUserCreateAdd={onUserCreateAdd}
              loading={loading}
              onUserDelete={onUserDelete}
              getUserInfo={getUserInfo}
              onUserEdit={onUserEdit}
            />
            {!loading && !users.length ? <Error /> : null}
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
