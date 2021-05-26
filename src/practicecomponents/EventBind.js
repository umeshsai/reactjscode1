import React, {Component} from 'react'

class EventBind extends Component{
    constructor()
    {
        super()
        this.state = {
                message : "Hello"
        }
    this.update=this.update.bind(this)
    }

    update ()
    {
        this.setState({
            message: "Good Bye"
        })
    }


    render()
    {
        return (
        <div>
        <h1>{this.state.message} </h1>
        <button onClick = {this.update} >Click 1here</button>
        </div>
        );
        
    }
}

export default EventBind