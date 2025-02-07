import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css'
import ArticleList from './components/ArticleList';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
//import ProductList from './components/ProductApi';
import RecipeList from './components/Recipe';
import UserList from './components/UserList';
//import Counter from './components/counter';
//import NameInput from './components/nameInput';
//import Toggle from './components/Toggle';
//import fetchProduct  from './Services/ProductServices';
//import fetchCourse from './Services/CourseServices';
//import ProductListprops from "./components/advanceProduct"
import CourseListProps from "./components/AdvanceCourse";
//import Toggle from './components/Toggle';
//import UserProfile from './components/UserProfileState2';
//import  CarsListProp from "./components/advanceCars";
import Home from './components/Home2';
import AboutUs from './components/AboutUs2';
import CourseList from './components/AdvanceCourse';
import CarsList from './components/CarsList';
import ProductList from './components/ProductApi';
//import ProductList from './components/ProductApi';
//import ProductList from './components/advanceProduct';



function App() { 

  return (
    <Router>
      <header>
        <h1>React Demos</h1>
      </header>
    <nav>

      <Link to="/">Home</Link> |<Link to="/about">About us</Link>|<Link to ="/cars">Cars</Link>|<Link to ="/articles">ArticleList</Link>|<Link to ="/ProductList">ProductList</Link>|<Link to ="/UserList">UserList</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        
        <Route path="cars" element = {<CarsList/>}></Route>
        
        <Route path="articles" element = {<ArticleList/>}></Route>
        <Route path="ProductList" element = {<ProductList/>}></Route>
        <Route path="UserList" element = {<UserList/>}></Route>



      </Routes>

</Router>

      
    
  );
}

export default App;
