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

  // storing the current mode in the local Storage
  const handleMode = () => {
    setToggleMode(!toggleMode);
    document.body.classList.toggle("dark-mode");
    document.body.classList.contains("dark-mode")
      ? localStorage.setItem("darkMode", "enabled")
      : localStorage.setItem("darkMode", "disabled");
  };

  //getting the local stored mode
  if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }

  const handleList = () => {
    setList(!list);
  };

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
