import "./CarsList.css";
const CarsList = () => {
  const Cars = [
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

  return (
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
        {Cars.map((car) => (
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