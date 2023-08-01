import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table, FormGroup, InputGroup, InputGroupText, Container } from "reactstrap";
import NavBar2 from "../navbar/NavBar2";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import { toast } from "react-toastify";
import "./product.css";

function Product() {

     const [product, setProduct] = useState([]);
     const [categores, setCategory] = useState([]);
     const [addModal, setAddModal] = useState(false);
     const [editModal, setEditModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const [products, setOneProduct] = useState("");


     useEffect(() => {
          getProduct();
          getCategory();
     }, []);

     const openAddModal = () => setAddModal(!addModal);
     const openEditModal = () => setEditModal(!editModal);
     const openDeleteModal = () => setDeleteModal(!deleteModal);

     function getProduct() {
          axios.get(url + "product/").then(res => setProduct(res.data));
     }

     function getCategory() {
          axios.get(url + "category/").then(res => setCategory(res.data));
     }

     function getProductObj() {
          const productObj = new FormData();
          productObj.append("image", document.getElementById("img").files[0]);
          productObj.append("title", document.getElementById("title").value);
          productObj.append("description", document.getElementById("description").value);
          productObj.append("price", document.getElementById("price").value);
          productObj.append("capacity", document.getElementById("capacity").value);
          productObj.append("category_id", document.getElementById("category").value);
          return productObj;
     }

     function addProduct() {
          axios.post(url + "product/", getProductObj())
               .then(() => {
                    openAddModal();
                    getProduct();
                    toast.success("successfully saved product!");
               }).catch(err => {
                    console.log(err);
                    toast.error(err);
               });
     }

     function editProduct() {
          axios.put(url + "product/" + products.id + "/", getProductObj())
               .then(() => {
                    openEditModal();
                    getProduct();
                    toast.success("successfully edit product!")
               }).catch(err => {
                    toast.error(err);
                    console.log(err);
               });
     }

     function deleteProduct() {
          axios.delete(url + "product/" + products.id + "/")
               .then(() => {
                    openDeleteModal();
                    getProduct()
                    toast.success("Succesfully delete product")
               });
     }

     function search() {
          let v = document.getElementById("search").value;
          console.log(!!v);
          if (!!v) axios.get(url + "product/?title=" + v).then(res => setProduct(res.data))
          else getProduct();
     }

     return (
          <Container>
               <NavBar2 />
               <Button color="primary" className="px-4 mt-3" onClick={openAddModal}>Add Product</Button>
               <InputGroup className="w-25 float-end mt-3">
                    <Input placeholder="🔍Search..." id="search" onKeyDown={search}/>
                    <InputGroupText className="bg-success text-light" style={{ cursor: "pointer" }} onClick={search}>Search</InputGroupText>
               </InputGroup>
               {/* <Input placeholder="🔍Search..." className="w-25 d-inline-block float-end mt-3" id="search" onChange={search} /> */}
               <Table bordered className="mt-4">
                    <thead className="text-center">
                         <tr>
                              <th>#</th>
                              <th>Image</th>
                              <th>Titel</th>
                              <th>Description</th>
                              <th>Price (UZS)</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {product.map((item, i) =>
                              <tr key={i}>
                                   <td>{i + 1}</td>
                                   <td><img className="img-style" src={item.image} alt="img" /></td>
                                   <td>{item.title}</td>
                                   <td>{item.description}</td>
                                   <td>{item.price}</td>
                                   <td><Button color="warning" onClick={() => {
                                        setOneProduct(item);
                                        openEditModal();
                                   }}>Edit</Button></td>
                                   <td><Button color="danger" onClick={() => {
                                        openDeleteModal()
                                        setOneProduct(item);
                                   }}>Delete</Button></td>
                              </tr>
                         )}
                    </tbody>
               </Table>

               {/* Add Product */}
               <Modal isOpen={addModal}>
                    <ModalHeader toggle={openAddModal}>Add product</ModalHeader>
                    <ModalBody>
                         <FormGroup>
                              <Input id="img" type="file" />
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="title" placeholder="Title" />
                              <Label for="title">Title</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="description" placeholder="Description"></Input>
                              <Label for="description">Description</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input type="number" id="price" placeholder="Price"></Input>
                              <Label for="price">Price</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="capacity" placeholder="Capacity"></Input>
                              <Label for="capacity">Capacity</Label>
                         </FormGroup>
                         <select className="form-select" id="category">
                              <option selected disabled>Select category</option>
                              {categores.map((item, i) =>
                                   <option key={i} value={item.id}>{item.title}</option>
                              )}
                         </select>
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openAddModal} className="px-3">Close</Button>
                         <Button color="success" className="px-3" onClick={addProduct}>Save</Button>
                    </ModalFooter>
               </Modal>

               {/* edit modal */}
               <Modal isOpen={editModal}>
                    <ModalHeader toggle={openEditModal}>Edit Modal</ModalHeader>
                    <ModalBody>
                         <FormGroup>
                              <Input id="img" type="file" />
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="title" placeholder="Title" defaultValue={products && products.title} />
                              <Label for="title">Title</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="description" placeholder="Description" defaultValue={products && products.description} />
                              <Label for="description">Description</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input type="number" id="price" placeholder="Price" defaultValue={products && products.price} />
                              <Label for="price">Price</Label>
                         </FormGroup>
                         <FormGroup floating>
                              <Input id="capacity" placeholder="Capacity" defaultValue={products && products.capacity} />
                              <Label for="capacity">Capacity</Label>
                         </FormGroup>
                         <select className="form-select" id="category">
                              <option selected disabled>select category</option>
                              {categores.map((item, i) =>
                                   <option key={i} value={item.id}>{item.title}</option>
                              )}
                         </select>
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openEditModal}>Yopish</Button>
                         <Button color="success" onClick={editProduct}>Taxrirlash</Button>
                    </ModalFooter>
               </Modal>

               {/* delete */}
               <Modal isOpen={deleteModal}>
                    <ModalHeader toggle={openDeleteModal}>
                         Delete Product
                    </ModalHeader>
                    <ModalBody>
                         Siz ma'lumotni uchirishga ishonchingiz komilmi
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openDeleteModal}>Yopish</Button>
                         <Button color="danger" onClick={deleteProduct}>O'chirish</Button>
                    </ModalFooter>
               </Modal>
          </Container >
     )

}
export default Product;