import React from 'react'

export default function PageStructure(props) {
    return (
        <div className='container'>
            <div className='content'>
                <div className='content-text'>
                    <h1>{props.title}</h1>
                    <p className='response'>{props.response}</p>
                </div>
                <img className='image' src={props.image}/>
            </div>
        </div>
    )
}
