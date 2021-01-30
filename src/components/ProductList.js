// Styling
import { ListWrapper } from "../styles";
// Components
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { Helmet } from "react-helmet";


const ProductList = (props) => {
  const [query, setQuery] = useState("");

  const productList = props.products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <ProductItem
        product={product}
        key={product.id}
        deleteProduct={props.deleteProduct}
        // selectProduct={props.selectProduct}
      />
    ));

  return (
   <>
   <Helmet>
     <title>Cookies</title>
   </Helmet>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>{productList}</ListWrapper>
    </>
  );
};

export default ProductList;
