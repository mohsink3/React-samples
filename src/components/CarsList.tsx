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
      <ul className="list-group">
        {Cars.map((car) => (
          <li className="list-group-item" key={car.id}>
            {car.Brand} - {car.Model} <br />
            {car.Year} -{car.Price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarsList;