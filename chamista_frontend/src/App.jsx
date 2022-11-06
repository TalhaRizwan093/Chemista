import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Seacrh/Search";
import Cards from "./Components/Cards/Cards";

const App = () => {
  return (
    <>
      <Navbar />
      <Search />
      <Cards />

      {/* <div className="flex justify-between p-5 main-nav">
        <div>Logo</div>
        <div className="flex">
          <img src="" alt="_" />
          <p>Login</p>
        </div>
        <ul className="flex gap-16">
          <li className="flex">
            <img src="#" alt="_" />
            <a href="#">Find a Tutor</a>
          </li>
          <li className="flex">
            <img src="#" alt="_" />
            <a href="#">Become a Tutor</a>
          </li>
          <li className="flex">
            <img src="#" alt="_" />
            <a href="#">IELTS</a>
          </li>
          <li className="flex">
            <img src="#" alt="_" />
            <a href="#">Kids Sections</a>
          </li>
          <li className="flex">
            <img src="#" alt="_" />
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default App;
