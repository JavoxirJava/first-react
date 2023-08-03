import { Button } from "reactstrap";
import products from "./product-json.json";
import { useState } from "react";
import { useEffect } from "react";
import { Table } from "reactstrap";

function ProductTest() {

    const [productList, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    }, []);

    function getProduct() {
        setProduct(products);
    }

    function filterProduct(categoryId) {
        setProduct(products.filter(product => product.category === categoryId));
    }

    return (
        <>
            <Button onClick={getProduct}>All</Button>
            <Button onClick={() => filterProduct(1)}>category 2</Button>
            <Button onClick={() => filterProduct(2)}>category 3</Button>

            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList && productList.map((item, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </>
    );
}

export default ProductTest;