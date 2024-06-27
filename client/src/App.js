import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./component/NavBar.js";
import Home from "./component/Home.js";
import Register from "./component/Register.js";
import {Routes, Route } from "react-router-dom";
import Edit from "./component/Edit.js";
import Details from "./component/Details.js";
import Shop1 from "./component/Shop1.js";
import Shop1Register from "./component/Shop1Register.js";
import Shop1Details from "./component/Shop1Details.js";
import Shop1Edit from "./component/Shop1Edit.js";
import Shop2 from "./component/Shop2.js";
import Shop2Register from "./component/Shop2Register.js";
import Shop2Details from "./component/Shop2Details.js";
import Shop2Edit from "./component/Shop2Edit.js";
import Shop3 from "./component/Shop3.js";
import Shop3Register from "./component/Shop3Register.js";
import Shop3Details from "./component/Shop3Details.js";
import Shop3Edit from "./component/Shop3Edit.js";
import button from "./component/Button.js";
import buttonshop from "./component/ButtonShop.js";

function App() {
  return (
    <>
      
        <NavBar />
        <Routes>
          <Route exact path="/" Component={Home} />
          
          <Route path="/register" Component={Register} />
          <Route path="/button" Component={button} />
          <Route path="/buttonshop" Component={buttonshop} />
          <Route path="/edit/:id" Component={Edit} />
          <Route path="/view/:id" Component={Details} />
          <Route path="/Shop1" Component={Shop1} />
          <Route path="/Shop1register" Component={Shop1Register} />
          <Route path="/Shop1/Shop1view/:id" Component={Shop1Details} />
          <Route path="/Shop1/Shop1edit/:id" Component={Shop1Edit} />
          <Route path="/Shop2" Component={Shop2} />
          <Route path="/Shop2register" Component={Shop2Register} />
          <Route path="/Shop2/Shop2view/:id" Component={Shop2Details} />
          <Route path="/Shop2/Shop2edit/:id" Component={Shop2Edit} />
          <Route path="/Shop3" Component={Shop3} />
          <Route path="/Shop3register" Component={Shop3Register} />
          <Route path="/Shop3/Shop3view/:id" Component={Shop3Details} />
          <Route path="/Shop3/Shop3edit/:id" Component={Shop3Edit} />
        </Routes>
        
      
    </>
  );
}

export default App;
