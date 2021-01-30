// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { ProductWrapper } from "../styles";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
  const product = props.product;

  return (
    <ProductWrapper>
       <p>{product.name}</p>
      <Link to={`/products/${product.slug}`}>
      <img
        alt={product.name}
        src={product.image}
        // onClick={() => props.selectProduct(product.id)}
        
      />
      </Link>
      <br />
     
      <p className="product-price">{product.price} KD</p>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      />
    </ProductWrapper>
  
);
}

export default ProductItem;
