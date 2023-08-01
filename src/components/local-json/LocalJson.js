import { useEffect, useState } from "react";
import { Button, Container, Input, Table } from "reactstrap";
import productJson from "./product.json";

function LocalJson() {


    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, [])

    function getProduct() {
        //axios
        setProduct(productJson);
    }


    return (
        <>
            <Container className="mt-5">
                <Button color="primary">Add Product</Button>
                <Input placeholder="Search..." className="w-25 float-end" />
                <Table bordered className="mt-4">
                    <thead>
                        <tr className="text-center">
                            <th>#</th>
                            <th>Name</th>
                            <th>CategoryName</th>
                            <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.map((item, i) =>
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.category.name}</td>
                                <td><Button color="warning">Edit</Button></td>
                                <td><Button color="danger">Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default LocalJson;