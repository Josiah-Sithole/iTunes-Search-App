//Default React Library
import React from "react";
import "./App.css";

//React Components rendered in the App.js
import Searchbar from "./Components/Searchbar";
import Favourites from "./Components/Favourites";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

//custom Style sheets
import "./styles.css";

//React functional component
function App() {
  return (
    //the frontend UI will display all the information this div
    <div className="App" id="Home">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Searchbar />
        <hr />
        <Favourites />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
