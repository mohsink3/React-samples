import Product from "../Models/Product"

interface ProductListprops{
    productlist: Product[];

}
const ProductList = (props:ProductListprops)=>{
    if(props.productlist.length==0){
        return(
            <div>
        <h2 className="text-danger">Product List</h2>
        <h6 className="text-primary">Cart is empty</h6>
      </div>
        );
    }
    return(
        <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {
          props.productlist.map((product) => (
            <div className="col">
              <div className="card h-100" key={product.id}>
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}<small className="text-muted">D</small></p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    );
};
export default ProductList;