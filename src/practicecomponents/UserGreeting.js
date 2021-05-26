import React, { Component } from 'react'

class UserGreeting extends Component{
    constructor(props)
    {
        super(props)
        this.state = 
        {
                isLoggedin : 0
        }
    }

    render(){
        return (
            this.state.isLoggedin ?
            <div>Welcome Umesh</div> :
            <div>Welcome Guest</div>

        )
        }

}
export default UserGreeting