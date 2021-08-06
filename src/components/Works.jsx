import React from 'react';
import Work from './Work'
import './works.css'

const Works =({works,doneTask,decoration}) =>{
    return(
        <div className="works">
            {works.map(work =>{
                return <Work key = {work.id} title={work.title} id={work.id} status={work.status} 
                doneTask = {()=>{
                    doneTask(work.id)
                }} 
                decoration={decoration}/>
            })}
            </div>
    )
}
export default Works;