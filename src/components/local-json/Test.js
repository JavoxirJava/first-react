import { useState } from "react";
import { Button } from "reactstrap";
import LocalJson from "./LocalJson";
import Cbu from "../cbu/Cbu";

function Test() {


    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(false)}>button 1</Button>
            <Button onClick={() => setIsOpen(true)}>button 2</Button>

            {isOpen
            ? <LocalJson/>
            : <Cbu />
        }
        </>
    );
}

export default Test;