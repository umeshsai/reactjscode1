import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            comments: '',
            branch: '',

        }
    }
    handlernamechange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlercommentschange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handlerbranchchange = (event) => {
        this.setState({
            branch: event.target.value
        })
    }
    submit = () => {
        alert(`${this.state.name} ${this.state.comments} ${this.state.branch}`)
    }
    render() {
        return (

            <div>
                <label>Name</label>
                <input type='text'
                    value={this.state.name}
                    onChange={this.handlernamechange}
                />
                <label>Comments</label>
                <textarea
                    type='text'
                    value={this.state.comments}
                    onChange={this.handlercommentschange}
                />
                <label>Branch</label>
                <select value={this.state.branch} onChange={this.handlerbranchchange}>
                    <option value='cse'>CSE</option>
                    <option value='ece'>ECE</option>
                    <option value='eee'>EEE</option>
                </select>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}
export default Form