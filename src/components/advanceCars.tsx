interface Cars{
    id:number;
    Brand:string;
    Model:string;
    Year:number;
    Price:number;
}

interface CarsListProp{
    carslist:Cars[];
}
const CarsList = (props:CarsListProp)=>{
    if(props.carslist.length==0){
        return(
            <div>
        <h2 className="text-danger">Cars List</h2>
        <h6 className="text-primary">Garage is Empty</h6>
      </div>
        );
    }

    return(
        <div>
      <h2 className="text-danger">Cars List</h2>
      <table className="table table-striped">
      <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
          <tbody>
        {props.carslist.map((car) => (
          <tr key={car.id}>
            <td>{car.id}</td>
              <td>{car.Brand}</td>
              <td>{car.Model}</td>
              <td>{car.Year}</td>
              <td>{car.Price}</td>
              </tr>
        ))}
        </tbody>
      </table>
    </div>
    );
};
export default CarsList;