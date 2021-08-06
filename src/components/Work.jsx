import React from 'react';
import './work.css'
const Work = ({id,title,doneTask, status})=>
    {
        return (
        
            <div className="work" >
                
                <p onClick={doneTask} className={(status ? 'doneTask' : 'undoneTask')}>{title}</p>
            </div>
        )
    }
export default Work;