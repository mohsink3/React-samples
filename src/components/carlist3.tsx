const carlist = ()=>{

     const cars = [
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
      
    return(
        <div>
            <h2 className="text-danger">cars list</h2>
            <table className="table table-stripped">
               <tr>
                <th>ID</th>
                <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
                </tr> 
                <tbody>
                    {cars.map((car)=>(
                        <tr key={car.id}>
                            
                        </tr>
                    ))}

                </tbody>

            </table>

        </div>


    );
}
export default carlist;