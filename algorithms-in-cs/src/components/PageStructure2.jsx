import React from 'react'

export default function PageStructure2(props) {
    return (
        <div className='container'>
            <div className='content'>
                <img className='image' src={props.image}/>
                <div className='content-text'>
                    <h1>{props.title}</h1>
                    <p className='response'>{props.response}</p>
                </div>
            </div>
        </div>
    )
}
