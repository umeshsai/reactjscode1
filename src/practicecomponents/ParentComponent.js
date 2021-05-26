import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{
   constructor(props)
   {
       super(props)
       this.state = {
           parentName : "parent"
       }
       this.greet = this.greet.bind(this)
   }
   greet(childname)
   {
     
     alert(`Hello ${this.state.parentName} from ${childname}`) 

   }
    render()
    {
        
        return (
            
                <ChildComponent greet1 = {this.greet}/>
            
            
        );
        
    }
}

export default ParentComponent