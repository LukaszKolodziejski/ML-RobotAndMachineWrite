import React from "react";
import Robot from "./components/Robot";
import Typing from "./components/Typing";
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
