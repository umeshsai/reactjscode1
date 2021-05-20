import React from 'react'

/*function Greet()
{
    return(<h1>Hello Umesh</h1>);
}*/

const Greet = (props) => {
console.log(props);
return(
 <div>
    <h1>Hello {props.name} from {props.branch}</h1>
    {props.children}
 </div>

);
}

export default Greet