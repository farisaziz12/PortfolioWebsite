import React from 'react'
import '../App.css'


export default function Header(props) {
    return (
        <div className="section">
            <div className="oop"></div>
                <div className="fixed">
                    <h1 className="large">Faris Aziz</h1>
                    <p>Start scrolling :)</p>
                    <div> 
                        {/* <h3 style={props.type === "SE"? undefined :{backgroundColor: "#000"}} onClick={props.toggleContent} className='toggleBtn'>{props.type === "SE"? "Software Engineering" : "CrossFit" }</h3> */}
                    </div>
                    <p><i class="i arrow down"></i></p>
            </div>
        </div>
    )
}
