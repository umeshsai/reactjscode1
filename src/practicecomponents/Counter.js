import React, {Component, useCallback} from 'react'

class Counter extends Component{

    constructor()
    {
        super()
        this.state = {
            c : 0
        }
    }

    increment()
    {
        /* 
        this.setState({
            c : this.state.c+1
        }, () => {console.log('value',this.state.c)})
        console.log(this.state.c) */

        this.setState ((prevState, props) => ({
            c : prevState.c+1
        }))


    }
    incrementFive()
    {
            this.increment()
            this.increment()
            this.increment()
            this.increment()
            this.increment()
    }
    render()
    {
        return(
            <div>
                <h2>Counter - {this.state.c}</h2>
                <button onClick = {() => this.incrementFive()}>Increment</button>            
            </div>
            

        )
    }
}

export default Counter