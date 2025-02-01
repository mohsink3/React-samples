interface Course{
    id:number;
    title:string;
    duration:string;
    description:string
}

interface CourseListprops{
    courselist: Course[];

}
const CourseList = (props:CourseListprops)=>{
    if(props.courselist.length==0){
        return(
            <div>
        <h2 className="text-danger">Course List</h2>
        <h6 className="text-primary">No Course available</h6>
      </div>
        );
    }
    return(
        <div>
            <h2 className="text-danger">Course List</h2>
            <ul className="list-group">
                {props.courselist.map((course)=>(
                    <li className="list-group-item" key={course.id}>
                    {course.title} - {course.duration} <br />
                    <span className="small text-danger">{course.description}</span>
                  </li>
                ))}
              </ul>
              </div>
                );
            };
        

export default CourseList;