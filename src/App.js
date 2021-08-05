import React, { Component } from 'react';
import Works from './components/Works'
import './App.css'

class App extends Component{
    state = {
        works:[
            {id:"1", title:"Learn React"},
            {id:"2", title:"Study English"},
            {id:"3", title:"Learn js"},
            {id:"4", title:"Take shower"}
        ],
        // done:true,
        // filtered:[],
        task:''
    }
    // handleDoneTask = id =>{
    //     const works = [...this.state.works]
    //     const filteredworks = works.filter(work => work.id === id)
    //     console.log('filtered', filteredworks)
    //     for(let work in filteredworks){
    //         filteredworks[work].done=true;
    //     }
    //     this.setState({done : !this.state.done})
    //     this.setState({filtered: filteredworks})
    // }
    setTask =(event)=>{
        this.setState({task:event.target.value})
    }
    addNewTask =()=>{
        const works = [...this.state.works]
        const work ={
            id : Math.floor(Math.random()*1000),
            title : this.state.task,
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
                <Works works={works}/>
            </div>
        )
        
    }
}
export default App;