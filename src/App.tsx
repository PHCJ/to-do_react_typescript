import React from "react";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//CSS
import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}></main>
      <Footer />
    </div>
  );
}

export default App;
