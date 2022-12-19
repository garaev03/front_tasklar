import './App.css';
import Card from "./components/cards"

function App() {
  return (
    <><header>
      <nav>
        <div className="nav">
          <div className="navbarAndItems">
            <h1>Navbar</h1>
            <div className="navItems">
              <a >Home</a>
              <a >Page</a>
              <a  disabled>Disabled</a>
              <a >Dropdown</a>
            </div>
          </div>
          <div className="basketAndSearch">
            <img width="30" src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png" alt="" />
            <span className="basketNum"></span>
          </div>
        </div>
      </nav>
    </header>
      <section>
        <div className="container">
          <div className="cards">
            <Card/>
          </div>
        </div>
      </section>
    </>
  );
}


export default App;
