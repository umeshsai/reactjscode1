import React, {Component} from 'react'

class ClassClick extends Component{
    clickhandler1()
    {
        console.log("Clicked the button2")
    }
    render()
    {
        
        return (
            <div>
            <button onClick={this.clickhandler1}>Click 2</button>
            </div>
        );
        
    }
}

export default ClassClick