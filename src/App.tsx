import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import ArticleList from './components/ArticleList';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ProductList from './components/ProductApi';
import RecipeList from './components/Recipe';
import UserList from './components/UserList';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
//import Counter from './components/counter';
//import NameInput from './components/nameInput';
//import Toggle from './components/Toggle';
//import fetchProduct  from './Services/ProductServices';
//import fetchCourse from './Services/CourseServices';
//import ProductListprops from "./components/advanceProduct"
//import CourseListProps from "./components/AdvanceCourse";
//import Toggle from './components/Toggle';
//import UserProfile from './components/UserProfileState2';
//import  CarsListProp from "./components/advanceCars";




function App() {

  /*let cars=[

    {
      id: 1,
      Brand: "Maruti",
      Model: "Suzuki",
      Year: 1999,
      Price:50000
    },
    {
      id: 2,
      Brand: "Lexus",
      Model: "Turbo",
      Year: 2021,
      Price:70000

    },
    {
      id: 3,
      Brand: "Mercedes",
      Model: "X2",
      Year: 2024,
      Price:80000

    },
    {
        id: 4,
        Brand: "Toyota",
        Model: "corolla",
        Year: 2010,
        Price:80000
  
      },

  ];*/

  return (
    <Router>
      <header>
        <h1>React Demos</h1>
      </header>

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>


      </Routes>


    </Router>

  );
}

export default App;
