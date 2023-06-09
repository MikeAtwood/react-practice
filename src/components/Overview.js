import React, { Component } from 'react'

class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
        newTask: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({ newTask: e.target.value })
    }
    handleAddTask = () => {
        const { newTask } = this.state
        this.props.onAddTask(newTask)
        this.setState({ newTask: '' })
    }

    render() {
        const { newTask } = this.state
        return (
            <div>
                <input value={newTask} onChange={this.handleInputChange} placeholder='Add new task'></input>
                <button onClick={this.handleAddTask}>Add</button>
            </div>
        )
    }
}

class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.handleAddTask = this.handleAddTask.bind(this)
    }   
    handleAddTask(newTask) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }


render() {
    const { tasks } = this.state
    return (
        <div>
            <h1>Tasks To Do</h1>
            <AddTask onAddTask={this.handleAddTask} />
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ol>
        </div>
    )
}
}
export default Overview

// handleAddTask = (newTask) => {
    //     let prevTask = this.state.tasks
    //     let updatedTasks = prevTask.push('',newTask)
    //     this.setState({tasks:updatedTasks})
    //     console.log(this.state.tasks)