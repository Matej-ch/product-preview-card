import ProductPreviewCard from "./ProductPreviewCard";
import IProduct from "./IProduct";

function App() {

  const product:IProduct = {
    type: 'Perfume',
    name: 'Gabrielle Essence Eau De Parfum',
    description: 'A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.',
    price: 149.99,
    price_vat: 169.99
  };

  return (<ProductPreviewCard product={product}/>)
}

export default App
