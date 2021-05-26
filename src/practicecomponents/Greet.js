import React from 'react'

/*function Greet()
{
    return(<h1>Hello Umesh</h1>);
}*/

const Greet = props => {
console.log(props);
const {name , branch,children} = props
return(
 <div>
    <h1>Hello {name} from {branch}</h1>
    {children}
 </div>

);
}

export default Greet