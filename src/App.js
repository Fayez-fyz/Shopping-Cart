import Header from "./header";
import "./App.css";
import Card from "./Card";
import Cartitem from "./Cartitem";
import { useState } from "react";

function App() {
  const currentDate = new Date()
  const year = currentDate.getFullYear();
  const [products, setProduct] = useState([
    {
      "id": 1,
      "title": "Salamon Fish",
      "description": "sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque",
      "image": "https://image.shutterstock.com/image-photo/fish-salmon-600w-585207481.jpg ",
      "price": 66.95
      
    },
    {
      "id": 2,
      "title": "Chicken noodles",
      "description": "pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero.",
      "image": "https://image.shutterstock.com/image-photo/noodles-chicken-vegetables-on-white-600w-191921342.jpg ",
      "price": 27.04
    },
    {
      "id": 3,
      "title": "Corn Flaxes",
      "description": "penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      "image": "https://thumbs-prod.si-cdn.com/80TAKI0oPsNo7H1fkosGbk21CbE=/fit-in/1600x0/https://public-media.si-cdn.com/filer/66/b4/66b40622-8e81-4d89-954b-e7dbaaa2d685/istock-175418464.jpg ",
      "price": 52.12
    },
    {
      "id": 4,
      "title": "Mutton Soup",
      "description": "scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada",
      "image": "https://image.shutterstock.com/image-photo/home-made-beef-potato-soup-600w-645230779.jpg ",
      "price": 93.79
    },
    {
      "id": 5,
      "title": "Spaghati",
      "description": "eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum",
      "image": "https://image.shutterstock.com/image-photo/italian-traditional-dishspaghetti-allo-scoglio-600w-1862598916.jpg ",
      "price": 63.73
    },
    {
      "id": 6,
      "title": "Veg Sandwich",
      "description": "id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim",
      "image": "https://image.shutterstock.com/image-photo/vegetable-jumbo-grilled-sandwich-served-600w-1710014800.jpg ",
      "price": 42.76
    },
  
  ]);
  const [cartItems, setCartItem] = useState([]);
  const [total, setTotal] = useState(0);
  

  let addToCart = (id) => {
    let product = products.find((obj) => obj.id == id);
    setCartItem([...cartItems, product]);
    setTotal(total + product.price);
  };
  let removeItem = (id) => {
    let result = window.confirm("Are you sure want to remove");
    if (result) {
      let cartIndex = cartItems.findIndex((obj) => obj.id == id);
      setTotal(total - cartItems[cartIndex].price);
      cartItems.splice(cartIndex, 1);
      setCartItem([...cartItems]);
      
    }
  };
 
 
  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "3em" }}>
        <div className="row">
          <div className="col-lg-8 ">
            <div className="row ">
              <div class="card-deck ">
                {products.map((product) => {
                  return <Card data={product} handleCart={addToCart} />;
                })}
              </div>
            </div>
          </div>
          <aside className="col-lg-4 my-2 " >
          
            <ul class="list-group">
              {cartItems.length == 0 ? <h4>Cart is empty now</h4> : null}
              {cartItems.map((items) => {
                return <Cartitem data={items}  handleRemove={removeItem} />;
              })}
            </ul>
            <a
            href="#"
            class="btn btn-primary btn-block my-2"
           
          >
           <h3>Checkout Total $ {total.toFixed(2)}</h3>
          </a> 
          
          </aside>
        </div>
      </div>
      <footer className=" mt-3 py-4 bg-dark text-white">
      <p className='d-flex justify-content-center 'style={{lineHeight:1}}>@Copyright {year}</p>
      <h6 className='d-flex justify-content-center ' style={{lineHeight:0}}>Designed by Fayez</h6>
      </footer>
    </>
  );
}

export default App;
