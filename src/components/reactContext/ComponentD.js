import { GetContext } from "./Context";

function ComponentD() {
    return (
        <GetContext>
            {
                (text) => {
                    return <div>Hello {text}</div>
                }
            }
            
        </GetContext>
    );
}

export default ComponentD;