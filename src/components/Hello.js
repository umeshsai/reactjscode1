import React from 'react'


const Hello = () => {
    return (

    /*
    <div>
        <h1>
            Hello Guys
        </h1>
    </div>
    */
    
    React.createElement('div',
    {id :'hello',className :'class1'},
    React.createElement('h1',null,"Hello Guys"))

    );
}


export default Hello