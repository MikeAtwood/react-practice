import React, { Component } from 'react'

class Overview extends Component {
    state = {
        tasks: []
    }

    handleAddTask = (newTask) => {
        let prevTask = this.state.tasks
        let updatedTasks = prevTask.push('',newTask)
        this.setState({tasks:updatedTasks})
        console.log(this.state.tasks)

    }

    render() {
        return (
            <div>
                <h1>Tasks To Do</h1>
                <input placeholder='Add new task'></input>
                <button>Add</button>
            </div>
        )
    }
}
export default Overview