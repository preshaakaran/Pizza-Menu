import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <div>
        {numPizzas > 0 ? (
          <>
            <p style={{fontSize:"2rem",textAlign:"center",padding:"10px",paddingBottom:"20px"}}>
              Authentic Italian cuisine.6 creative dishes to choose from.All
              from our stone oven, all organic, all delicious.
            </p>


            <ul className="pizzas">
              {pizzas.map((pizza) => (
                // <Pizza name={pizza.name} photoName={pizza.photoName} />
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </ul>
          </>
        ) : (
          <p>We're still working on our menu.Please come back later</p>
        )}
      </div>
      {/* <Pizza name='Pizza Spinaci' price={10}/> */}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const isClosed = 22;

  const isOpen = hour >= openHour && hour < isClosed;

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We're open until {isClosed}:00.Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
  // return React.createElement('footer',null, "We're currently open!");
}

function Pizza(props) {
  // if(props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${props.pizzaObj.soldOut?"sold-out":""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        {/* {props.pizzaObj.soldOut ?(
          <span>SOLD OUT</span>
        ):(
          <span>{props.pizzaObj.price}</span>
        )} */}
        <span>{props.pizzaObj.soldOut ? "SOLD OUT" :props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//Before React 18
//import ReactDOM from "react-dom";
//React.render(<App />)
