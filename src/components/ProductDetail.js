// Components
import DeleteButton from "./buttons/DeleteButton";
// Styling
import { DetailWrapper } from "../styles";

import {useParams, Redirect} from "react-router-dom";
import products from "../products";
import { Helmet } from "react-helmet";

const ProductDetail = (props) => {
  // const product = props.products ;
  const productSlug =useParams().productSlug;

  // console.log(useParams());
  // console.log(productSlug);
  const product = props.products.find((product => product.slug === productSlug));
   if(!product) return <Redirect to="/products" />;
  return (
    
    <DetailWrapper className="text-left">
      {/* <p onClick={props.selectProduct}>Back to Products</p> */}
      <Helmet>
     <title>{product.name}</title>
   </Helmet>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price} KD</p>
<button className="btn btn-outline-info"  >
      Go Back Home
</button>
       <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct} product={product}
      /> 
    </DetailWrapper>
  );
};

export default ProductDetail;
