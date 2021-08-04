import React from 'react';
import './work.css'
const Work = ({id,title})=>
    {
        return (
            <div className="work">
                <p>{title}</p>
            </div>
        )
    }
export default Work;