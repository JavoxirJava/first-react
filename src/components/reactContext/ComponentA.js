import ComponentB from "./ComponentB";
import { SetContext } from "./Context";

function ComponentA() {
    return (
        <SetContext value="test o'chun">
            <ComponentB />
        </SetContext>
    );
}

export default ComponentA;