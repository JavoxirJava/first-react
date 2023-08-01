import { Container, InputGroup, Input, InputGroupText, Button, Row, Col } from "reactstrap";
import UserNav from "../navbar/UserNav";
import "./home.css"
import AliceCarousel from 'react-alice-carousel';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import Aos from "aos";
import Footer from "../footer/Footer";

function Home() {

     const [categoryes, setCategory] = useState([]);
     const [products, setProducts] = useState([]);

     useEffect(() => {
          getCategory();
          getProduct();
          Aos.init({
               duration: 1500
          });
     }, []);

     const responsive = {
          0: { items: 2 },
          512: { items: 4 },
          1024: { items: 8 }
     }

     function pushRest(id) {
          sessionStorage.setItem("productId", id);
          document.getElementById("pushRestourant").click();
     }

     function getCategory() {
          axios.get(url + "category/").then(res => setCategory(res.data));
     }

     function getProduct() {
          axios.get(url + "product/").then(res => setProducts(res.data));
     }

     return (
          <>
               <Container>
                    <Link to="/restaurant" id="pushRestourant"></Link>
                    <UserNav />
                    <div className="mt-5">

                         {/* home search */}
                         <div className="p_main" data-aos="fade-down"
                              data-aos-easing="linear" duration="1200">
                              <InputGroup size="lg" className="w-75">
                                   <Input placeholder="🔍Search..." />
                                   <InputGroupText>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                   </InputGroupText>
                              </InputGroup>
                         </div>

                         {/* category carousel */}
                         <div className="home_category mt-5">
                              <AliceCarousel
                                   mouseTracking
                                   items={categoryes.map((item, i) =>
                                        <Button key={i}>{item.title}</Button>
                                   )}
                                   responsive={responsive}
                                   disableButtonsControls
                                   disableDotsControls
                                   autoPlay
                                   autoPlayInterval={1000} />
                         </div>

                         {/* products */}
                         <div>
                              <Row className="products_ gx-4 mb-5 flex-wrap">
                                   {products.map((item, i) =>
                                        <Col md="4" className="product_one" key={i} onClick={() => pushRest(item.id)} data-aos="zoom-in-right">
                                             <div>
                                                  <img src={item.image} alt="." />
                                                  <div className="product_text">
                                                       <b>{item.title}</b>
                                                       <p>{item.discreption}</p>
                                                       <span className="text-success">{item.price} sum</span>
                                                  </div>
                                             </div>
                                        </Col>
                                   )}
                              </Row>
                         </div>
                    </div>
               </Container>
               <Footer />
          </>

     )
}
export default Home;