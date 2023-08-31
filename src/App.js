import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Navigation, Footer } from "@components/Components";

import {
  Home,
  Work,
  Projects,
  Publication,
  News,
  Hobbies,
} from "@pages/Pages";

function App() {
  return (
    <div className="app">
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        //<Route exact path="/portfolio" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/projects" component={Projects} />
        <Route path="/publications" component={Publication} />
        <Route path="/news" component={News} />
        <Route path="/hobbies" component={Hobbies} />
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
