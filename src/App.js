import React from "react";
import Typing from "./components/Typing";
import Robot from "./components/Robot";
import styles from "./css/App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <Robot />
      <Typing />
    </div>
  );
};

export default App;
