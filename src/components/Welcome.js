import React, {Component} from 'react'

class Welcome extends Component{
    render()
    {
        return (<h1>Hey {this.props.name} from {this.props.work} </h1>);
        
    }
}

export default Welcome