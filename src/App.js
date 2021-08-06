import React, { Component } from 'react';
import Works from './components/Works'
import './App.css'

class App extends Component{
    state = {
        works:[
            {id:"1", title:"Learn React",status:'false'},
            {id:"2", title:"Study English",status:'false'},
            {id:"3", title:"Learn js",status:'false'},
            {id:"4", title:"Take shower",status:'false'}
        ],
        // done:true,
        // textDecoration:'none',
        taskk:''
    }
    handleDoneTask=(id)=>{
        const tasks=[...this.state.works]
        const taskIndex = tasks.findIndex(p => p.id === id)
        const task= tasks[taskIndex]
        task.status=!task.status
        tasks[taskIndex] = task;
        this.setState({works : tasks})
        // this.setState({textDecoration : 'line-through'})
    }
    setTask =(event)=>{
        this.setState({taskk:event.target.value})
    }
    addNewTask =()=>{
        const works = [...this.state.works]
        const work ={
            id : Math.floor(Math.random()*1000),
            title : this.state.taskk,
        }
        works.push(work)
        this.setState({works ,work : ""})
    }
    render(){
        const {works} = this.state
        // let doneStyle = this.state.done ? 'doneTask' : 'undoneTask'
        return(
            <div className="App">
                <h1>WHAT SHOULD WE DO TODAY? </h1>
                <div>
                    <input type="text" onChange={this.setTask}/>
                    <button onClick={this.addNewTask}>Add</button>
                </div>
                <Works works={works} doneTask={this.handleDoneTask} decoration={this.state.textDecoration}/>
            </div>
        )
        
    }
}
export default App;