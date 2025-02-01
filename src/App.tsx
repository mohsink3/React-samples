
import './App.css'
import CourseList from './components/AdvanceCourse';





function App() {
  let courses = [
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
  ];
  
  return (
    <>
      <header>
      <h1>React Demos</h1>
      </header>
      <CourseListProps CourseList={courses}/>
    </>
  );
}

export default App;
