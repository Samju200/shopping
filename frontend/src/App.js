import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Backdrop from './components/Backdrop';
import CartScreen from './components/CartScreen';
import HomeScreen from './components/HomeScreen';
import Navbar from './components/Navbar';
import ProductScreen from './components/ProductScreen';
import SideDrawer from './components/SideDrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  return (
    <Router>
      <div className="app">
        <Navbar click={() => setSideToggle(true)} />
        <SideDrawer show={sideToggle} />
        <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
