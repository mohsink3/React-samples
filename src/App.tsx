
import './App.css'
//import Counter from './components/counter';
//import NameInput from './components/nameInput';
//import Toggle from './components/Toggle';
import fetchProduct  from './Services/ProductServices';

import ProductListprops from "./components/advanceProduct"
//import CourseListProps from "./components/AdvanceCourse";
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

  ];






  
  /*let courses = [
    {
      id: 1,
      title: "Advanced Web Design",
      description: "HTML CSS Bootstrap Responsive Design",
      duration: "60 days",
    },
    {
      id: 2,
      title: "React Frontend",
      description: "JS TS React",
      duration: "50 days",
    },
    {
      id: 3,
      title: "Adv Excel",
      description: "Adv Excel",
      duration: "30 days",
    },
    {
      id: 4,
      title: "Python",
      description: "Python Advanced",
      duration: "30 days",
    },
  ];*/
  
  return (
    <>
      <header>
      <h1>React Demos</h1>
      </header>
      <ProductListprops productlist = {fetchProduct()}/>
    </>
  );
}

export default App;
