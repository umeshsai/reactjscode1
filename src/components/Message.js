import React, {Component} from 'react'

class Message extends Component{
    constructor()
    {
        super()
        this.state = {
                message : "Please Subscribe"
        }
    }

    update()
    {
        this.setState({
            message: "Thanks for subsrcibing"
        })
    }

    update1()
    {
        this.setState({
            message: "You have Unsubscribed"
        })
    }

    render()
    {
        return (
        <div>
        <h1>{this.state.message} </h1>
        <button onClick = { () => this.update()} >Click to Subscribe</button>
        <button onClick = { () => this.update1()} >Click to UnSubscribe</button>
        </div>
        );
        
    }
}

export default Message