import { React } from "react";
import List from "./components/List.jsx";
import Navbar from "./components/Navbar.jsx";
import ListFavoris from "./components/ListFavoris.jsx";
import About from "./components/About";
import Description from "./components/Description";
import { Switch } from "react-router";
import { Route } from "react-router";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={List} />
        <Route exact path="/favoris" component={ListFavoris} />
        <Route exact path="/about" component={About} />
        <Route exact path="/description" component={Description} />
        <Route exact path="/home" component={List} />
      </Switch>
    </>
  );
}
export default App;
