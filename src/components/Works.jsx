import React from 'react';
import Work from './Work'
import './works.css'

const Works =({works}) =>{
    return(
        <div className="works">
            {works.map(work =>{
                return <Work title={work.title} id={work.id}/>
            })}
            </div>
    )
}
export default Works;