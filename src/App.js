import React from 'react';
import Home from "./pages/Home";
import AdsForm from "./pages/AdsForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/item/:id" exact component={ProductFull} /> */}
          <Route path="/postAd" exact component={AdsForm} />
        </Switch>
      </Router>
    </ProductProvider>
  );
}

export default App;
