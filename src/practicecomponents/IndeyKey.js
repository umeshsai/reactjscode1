import React from 'react'

function ToDo(props) {
    return (
        <tr>
            <td>
                <label>{props.index}</label>
            </td>
            <td>
                <label>{props.id}</label>
            </td>
            <td>
                <input />
            </td>
            <td>
                <label>{props.createdAt.toLocaleTimeString()}</label>
            </td>
        </tr>
    )
};

class IndexKey extends React.Component {
    constructor() {
        super();
        const date = new Date();
        const todoCounter = 1;
        this.state = {
            todoCounter: todoCounter,
            list: [
                {
                    id: todoCounter,
                    createdAt: date,
                },
            ],
        };
    }
    addtostart() {
        const date = new Date()
        const nextid = this.state.todoCounter + 1
        const newlist = [
            {
                id: nextid,
                createdAt: date
            },
            ...this.state.list,
        ]
        this.setState({
            list: newlist,
            todoCounter: nextid,
        })
        //this.addtostart = this.addtostart.bind(this)
    }
    addtoend() {
        const date = new Date()
        const nextid = this.state.todoCounter + 1
        const newlist = [
            ...this.state.list,
            {
                id: nextid,
                createdAt: date
            },
        ]
        this.setState({
            list: newlist,
            todoCounter: nextid,
        })
        //this.addtoend = this.addtoend.bind(this)
    }
    sortByEarliest() {
        const sortedList = this.state.list.sort((a, b) => {
            return a.createdAt - b.createdAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }

    sortByLatest() {
        const sortedList = this.state.list.sort((a, b) => {
            return b.createdAt - a.createdAt;
        });
        this.setState({
            list: [...sortedList],
        });
    }


    render() {
        return (
            <div>
                {/* <code>key=index</code>
                <br /> */}
                <button onClick={this.addtostart.bind(this)}>
                    Add New to Start
            </button >
                <button onClick={this.addtoend.bind(this)}>
                    Add New to End
            </button>
                <button onClick={this.sortByEarliest.bind(this)}>
                    Sort by Earliest
            </button>
                <button onClick={this.sortByLatest.bind(this)}>
                    Sort by Latest
            </button>
                <table>
                    <tbody>
                        <tr>
                            <th>Index</th>
                            <th>ID</th>
                            <th>Item</th>
                            <th>Created at</th>
                        </tr>
                        {this.state.list.map((todo, index) => (
                            <ToDo key={index} index={index} {...todo} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default IndexKey