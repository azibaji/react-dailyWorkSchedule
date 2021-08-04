import React, { Component } from 'react';
import Works from './components/Works'
import './App.css'

class App extends Component{
    state = {
        works:[
            {id:"1", title:"Learn React"},
            {id:"2", title:"Study English"},
            {id:"3", title:"Learn js"},
            {id:"3", title:"Take shower"}
        ]
    }
    render(){
        const {works} = this.state
        return(
            <div className="App">
                <h1>WHAT SHOULD WE DO TODAY? </h1>
                <Works works={works}/>
            </div>
        )
        
    }
}
export default App;