import React from 'react'

function FunctionClick()
{
    function clickhandler()
    {
        console.log("Clicked the button1")
    }
    return(
        <div>
            <button onClick={clickhandler}>Click 1</button>
        </div>
    );
}

export default FunctionClick 
