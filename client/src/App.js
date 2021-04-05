//imports
import "./components/styles/App.css";
import { Switch, Route } from "react-router-dom";

//components imports
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";

//webpage layout
function App() {
  return (
    <div id="">
      <NavBar />
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/Experience"} component={Experience} />
        <Route path={"/Projects"} component={Projects} />
        <Route path={"/About"} component={About} />
      </Switch>
    </div>
  );
}

export default App;
