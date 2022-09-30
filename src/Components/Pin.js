import React from 'react'

const Pin = ({ pinSize, imgSrc, name, link }) => {
    return <div className={`pin ${pinSize}`}>

        <img className="mainPic" 
        src={imgSrc}
        alt="" />

        <div className="content">
            <h3> {name} </h3>
            <div className="search">
                <a href={link} target="_blank">
                <ion-icon name="arrow-redo-circle-outline"></ion-icon>
                </a>
            </div>

        </div>
    </div>
}

export default Pin