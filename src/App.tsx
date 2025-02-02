
import './App.css'
//import Counter from './components/counter';
//import NameInput from './components/nameInput';
//import Toggle from './components/Toggle';
//import fetchProduct  from './Services/ProductServices';
import fetchCourse from './Services/CourseServices';
//import ProductListprops from "./components/advanceProduct"
import CourseListProps from "./components/AdvanceCourse";
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
    <>
      <header>
      <h1>React Demos</h1>
      </header>
      <CourseListProps courseList = {fetchCourse()}/>
    </>
  );
}

export default App;
