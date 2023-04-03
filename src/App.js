import Header from "./components/Layout/Header";
import React, { useState } from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsSHown, setIsCartShown] = useState(false);
  const showCartHandler = () => {
    setIsCartShown(!cartIsSHown);
  };
  const hideCartHandler = () => {
    setIsCartShown(!cartIsSHown);
  };

  return (
    <React.Fragment>
      {cartIsSHown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
