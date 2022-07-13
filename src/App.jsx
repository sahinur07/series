import React, { useState } from "react";

function Calc(){
    const [num,setNum] = useState(0);
    return (
        
            <button onClick={() => {
                setNum(num + 1);
            }}>
            click me {num}
            </button>
        
    )
}
export default Calc;