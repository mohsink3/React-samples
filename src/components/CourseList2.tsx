import "./CourseList2.css";
const CourseList2 =()=>{
    let  Courses =[
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
            duration: "32 days",
          },
    ];

    Courses = [];

    if(Courses.length==0){
      return(
        <div>
          <h2 className="text-danger">Course list</h2>
          <h6 className="text-primary">No course available</h6>

        </div>
      );
    }
    return(
        <div>
        <h2 className="text-danger">Course List</h2>
        <ul className="list-group">
           {Courses.map((course)=>(
            <li className="list-group-item" key={course.id}>
                {course.title}-{course.duration}<br />
                <span className="small-text-danger">{course.description}</span>
            </li>
           ))}
           
           </ul> 
        </div>

    );
};

export default CourseList2;