import { useState } from "react";
import Header from "./common/header/Header";
import Pages from "./pages/Pages";
import Card from "./common/card/Card";
import Data from "./components/flashDeals/Data";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  const { productItems } = Data;

  const [cardItem, setCardItem] = useState([]);

  const addToCard = (product) => {
    const productExit = cardItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cardItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cardItem, { ...product, qty: 1 }]);
    }
  };
  return (
    <>
      <Router>
        <Header cardItem={cardItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCard={addToCard} />
          </Route>
          <Route path="/card" exact>
            <Card cardItem={cardItem} addToCard={addToCard} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
