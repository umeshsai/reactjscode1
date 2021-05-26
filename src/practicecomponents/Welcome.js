import React, {Component} from 'react'

class Welcome extends Component{
    render()
    {
        const {name , work} = this.props
        return (<h1>Hey {name} from {work} </h1>);
        
    }
}

export default Welcome