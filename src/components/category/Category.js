import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Table, FormGroup, Container } from "reactstrap";
import NavBar2 from "../navbar/NavBar2";
import { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../api/api";
import { toast } from "react-toastify";

function Category() {

     const [categores, setCategory] = useState([]);
     const [addModal, setAddModal] = useState(false);
     const [deleteModal, setDeleteModal] = useState(false);
     const [editModal, setEditModal] = useState(false);
     const [category, setOneCategory] = useState("");

     useEffect(() => {
          getCategory();
     }, []);

     const openAddModal = () => setAddModal(!addModal);
     const openDeleteModal = () => setDeleteModal(!deleteModal);
     const openEditModal = () => setEditModal(!editModal);

     function getCategory() {
          axios.get(url + "category/").then(res => setCategory(res.data));
     }

     function addCategory() {
          axios.post(url + "category/", { title: document.getElementById("title").value }).then(res => {
               console.log(res);
               openAddModal();
               toast.success("successfully saved category!");
               getCategory();
          }).catch(err => {
               console.log(err);
               toast.error(err);
          });
     }

     function deleteCategory() {
          axios.delete(url + "category/" + category.id + "/").then(() => {
               toast.success("categorya muaffaqiyatli o'chirildi");
               getCategory();
               openDeleteModal();
          });
     }

     return (
          <Container>
               <NavBar2 />
               <Button color="primary" className="px-4 mt-3" onClick={openAddModal}>Add Category</Button>
               <Table bordered className="mt-4">
                    <thead className="text-center">
                         <tr>
                              <th>#</th>
                              <th>Titel</th>
                              <th colSpan="2">Action</th>
                         </tr>
                    </thead>
                    <tbody>
                         {categores.map((item, i) =>
                              <tr key={i}>
                                   <td>{i + 1}</td>
                                   <td>{item.title}</td>
                                   <td><Button color="warning" onClick={() => {
                                        setOneCategory(item);
                                        openEditModal();
                                   }}>Edit</Button></td>
                                   <td><Button color="danger" onClick={() => {
                                        setOneCategory(item);
                                        openDeleteModal();
                                   }}>Delete</Button></td>
                              </tr>
                         )}
                    </tbody>
               </Table>
               {/* Add  */}
               <Modal isOpen={addModal}>
                    <ModalHeader toggle={openAddModal}>Add Category </ModalHeader>
                    <ModalBody>
                         <FormGroup floating>
                              <Input id="title" placeholder="Title" />
                              <Label for="title">Title</Label>
                         </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openAddModal} className="px-3">Close</Button>
                         <Button color="success" className="px-3" onClick={addCategory}>Save</Button>
                    </ModalFooter>
               </Modal>
               {/* delete */}
               <Modal isOpen={deleteModal} toggle={openDeleteModal}>
                    <ModalHeader toggle={openDeleteModal}>
                         Categoriya O'chirish
                    </ModalHeader>
                    <ModalBody>
                         Siz haqiqatdanham shu categoriyani uchirmoqchimisiz
                    </ModalBody>
                    <ModalFooter>
                         <Button onClick={openDeleteModal}>Yopish</Button>
                         <Button color="danger" onClick={deleteCategory}>Delete</Button>
                    </ModalFooter>
               </Modal>
               {/* Edit */}
          </Container>
     )
}
export default Category;