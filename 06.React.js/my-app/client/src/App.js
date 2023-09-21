import './App.scss';

import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { LoginRegister } from './components/LoginRegister/LoginRegister';
import { Logout } from './components/Logout/Logout';
import { Footer } from './components/Footer/Footer';
import { Catalog } from './components/Catalog/Catalog';
import { Create } from './components/Create/Create';
import { MyList } from './components/MyList/MyList';
import { Search } from './components/Search/Search';

function App() {
  return (
    <div className="app">
      <Header />

      <div id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/search" element={<Search />} />
          <Route path="/auth" element={<LoginRegister />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
