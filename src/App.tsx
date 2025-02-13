import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
//import ArticleList from './components/ArticleList';
//import Counter from './components/Counter';
//import Greeting from './components/Greeting';
//import ProductList from './components/ProductApi';
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
//import CourseList from './components/AdvanceCourse';
//import CarsList from './components/CarsList';
//import ProductList from './components/ProductApi';
import PostList from './components/PostList';
//import PostDetails from './components/PostDetails';

import ProductListSearch from './components/ProductListSearch';
import Courses from './components/Courses';
import AddCourse from './components/AddCourse';
<<<<<<< HEAD
import Cars from './components/Cars';
import AddCar from './components/AddCar';
=======
import EditCourse from './components/EditCourse';
>>>>>>> b4ff911078ab24973566e4602a8b8a680550ed71

//import ProductList from './components/ProductList4';
//import ProductDetails from './components/productDetails';
//import PostListSearch from './components/PostListSearch';

//import ProductList from './components/ProductApi';
//import ProductList from './components/advanceProduct';



function App() {
  return (
    <Router>
      <div className="container mt-4">

        <h1 className="text-center">Course list</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<PostList />} />

          <Route path="/productListsearch" element={<ProductListSearch />}></Route>
          <Route path="/courselist" element={<Courses />}></Route>
          <Route path="/add-course" element={<AddCourse />}></Route>
          <Route path="/add-car" element={<AddCar/>}></Route>

          
          <Route path="/cars" element={<Cars />}></Route>

          

        </Routes>

        <nav>


        </nav>

      </div>
    </Router>
  );
}

export default App;
