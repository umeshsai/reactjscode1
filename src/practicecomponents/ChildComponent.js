
import React, {Component} from 'react'
import ParentComponent from './ParentComponent'

function ChildComponent(props) {
 
        return (
        <button onClick = {() => props.greet1('child')}>CLick Here</button>
        );
     
}

export default ChildComponent