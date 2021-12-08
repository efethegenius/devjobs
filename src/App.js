import { useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Jobs } from "./Jobs";
import { Job } from "./Job";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Error } from "./Error";
import "./DarkMode.css";

function App() {
  const [toggleMode, setToggleMode] = useState(false);
  const [list, setList] = useState(false);

  const handleMode = () => {
    setToggleMode(!toggleMode);
  };

  const handleList = () => {
    setList(!list);
  };

  toggleMode
    ? document.body.classList.add("dark-mode")
    : document.body.classList.remove("dark-mode");

  return (
    <Router>
      <Header
        handleMode={handleMode}
        toggleMode={toggleMode}
        setToggleMode={setToggleMode}
      />
      <Switch>
        <Route exact path="/">
          <Jobs handleList={handleList} setList={setList} list={list} />
        </Route>
        <Route exact path="/job/:id" children={<Job />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
