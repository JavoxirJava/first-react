import { useEffect, useState } from "react";
import "./style.css";

function Test() {

    const [scrollX, setScrollX] = useState(window.screenX);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setScrollX(e.screenX);
            setScrollY(e.screenY);
        })
    });

    return (
        <div>
            <div className="scroll"
                style={{ top: scrollY - 95 + "px", left: scrollX - 20 + "px" }}>
            </div>
        </div>
    );
}

export default Test;