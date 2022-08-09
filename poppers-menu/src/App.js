import logo from './assets/logo_poppersburgers.png';
import './App.css';
import Burger from './components/Burger';
import Drink from './components/Drink';
import { useState } from 'react';


function App() {
  const [selectBurger, setSelectBurger] = useState(true);
  const [selectDrink, setSelectDrink] = useState(false);

  const changeMenu = (e) => {
    switch(e){
      case 'burgers':
          setSelectBurger(true);
          setSelectDrink(false);
        break;
      case 'drinks':
          setSelectBurger(false);
          setSelectDrink(true);
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div id='logo'>
          <img src={logo} className="App-logo" alt="logo" width="200" height="200"/>
          <div class="greetings">
            <h1 class="yellow">Addictive Burgers!</h1>
            <h3>
              Una vez las pruebas quedarás adicto al sabor!!
            </h3>
          </div>
        </div>
      </header>
      <div id='containerButtons'>
        <button className={`titleProducts ${selectBurger? "itemSelected" : ""}`} onClick={(e) => changeMenu('burgers')}>Burgers</button>
        <button className={`titleProducts ${selectDrink? "itemSelected" : ""}`} onClick={(e) => changeMenu('drinks')}>Bebidas</button>
      </div>
      <div id='containerBurgers' style={{display : selectBurger? "flex" : "none"}}>
        <Burger 
          title = {'Cheese Burger'} 
          ingredients = {`pan brioche - lechuga - tomate y cebolla - queso cheddar fundido - carne de res - pepinillos - salsa leña.`} 
          price = {'14.9k'} 
          quantity = {'1'} 
          icon = {'icon_cheese_burger.jpeg'} 
          photo = {'photo_cheese_addiction.png'}
          >
        </Burger>
        <Burger 
          title = {'Bacon Dosis'} 
          ingredients = {`pan brioche - lechuga - tomate y cebolla - queso cheddar fundido - carne de res - pepinillos - tocineta - salsa leña - BBQ.`} 
          price = {'16.5k'} 
          quantity = {'1'} 
          icon = {'icon_bacon_dosis_burger.jpeg'} 
          photo = {'photo_bacon_dosis.jpeg'}
          >
        </Burger>
        <Burger 
          title = {'Miami Vice Burger'} 
          ingredients = {`pan artesanal - mezclum - piña asada - queso philadelphia - carne res - cebolla crocante - tocineta bañada en BBQ honey.`} 
          price = {'19.5k'} 
          quantity = {'1'} 
          icon = {'icon_miami_vice_burger.jpeg'} 
          photo = {'photo_miami_vice.jpeg'}
          >
        </Burger>
        <Burger 
          title = {'Sinaloa Burger'} 
          ingredients = {`pan artesanal - lechuga - pico de gallo - carne de res - queso cheddar fundido - jalapeños - sour cream - frijo refrito - guacamole. `} 
          price = {'17.5k'} 
          quantity = {'1'} 
          icon = {'icon_sinaloa_burger.jpeg'} 
          photo = {'photo_sinaloa.png'}
          >
        </Burger>
        <Burger 
          title = {'Italian Burger'} 
          ingredients = {`pan artesanal - lechuga - tomates asados - carne res - queso mozarella - peperoni - salsa napolitana - mayonesa de pesto.`} 
          price = {'17.5k'} 
          quantity = {'1'} 
          icon = {'icon_italian_burger.jpeg'} 
          photo = {'photo_italian.jpeg'}
          >
        </Burger>
      </div>
      <div id='containerDrinks' style={{display : selectDrink? "flex" : "none"}}>
        <Drink 
          title = {'Coca-Cola'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_coke.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Coca Cola Zero'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_coke_0_sugar.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Budweiser'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_budweiser.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Club Colombia'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_club_colombia.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Aguila'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_aguila.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Miller Lite'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_miller_lite.jpg'}
          >
        </Drink>
        <Drink 
          title = {'Te Hatsu'} 
          price = {'4k'} 
          quantity = {'1'} 
          icon = {'icon_drinks.jpeg'} 
          photo = {'photo_te_hatsu.jpg'}
          >
        </Drink>
      </div>
    </div>
  );
}

export default App;
