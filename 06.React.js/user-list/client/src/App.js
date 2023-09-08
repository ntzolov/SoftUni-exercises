// Add loading component when is not loaded!

import './App.css';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Search from './components/Search';
import Table from './components/Table';
import { createUser, deleteUser } from './services/fetchServices';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3005/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
        console.log(data);
        setLoading(false);
      });
  }, []);

  async function onUserCreateAdd(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData);

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

  async function onUserDelete(id) {
    const deletedUser = await deleteUser(id);
    setUsers((users) => users.filter((user) => user._id !== deletedUser.userId));
  }

  return (
    <>
      <Header />

      <main className="main">
        <section className="card users-container">
          <Search />

          <div className="table-wrapper">
            <Table users={users} onUserCreateAdd={onUserCreateAdd} loading={loading} onUserDelete={onUserDelete} />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;
