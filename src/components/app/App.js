import { Route, Routes } from "react-router-dom";
import Category from "../category/Category";
import Product from "../producty/Product";
import Home from "../home/Home";
import Restaurant from "../homeProduct/Restaurant";
import Cbu from "../cbu/Cbu";
import LazeLoadImg from "../reactlezeload/LazeLoadImg";
import LocalJson from "../local-json/LocalJson"
import ProductTest from "../productJson/ProductTest";
import User from "../classCompo/User";
import Users from "../propsLesson/Users";
import Test from "../test/Test";
import ComponentA from "../reactContext/ComponentA";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/restaurant" element={<Restaurant/>}/>
        <Route path="/cbu" element={<Cbu/>}/>
        <Route path="/laze" element={<LazeLoadImg/>}/>
        <Route path="/local" element={<LocalJson/>}/>
        {/* <Route path="/test" element={<Test/>}/> */}
        <Route path="/productjson" element={<ProductTest/>}/>
        <Route path="/user" element={<User name="cuyhdjckm" age="15"/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/test" element={<Test/>}/>
        <Route path="/compo" element={<ComponentA/>}/>
      </Routes>
    </div>
  );
}

export default App;