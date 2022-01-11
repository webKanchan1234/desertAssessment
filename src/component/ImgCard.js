import React from 'react'
import "./home.css"

const ImgCard = ({img}) => {
    return (
        <>
            <div className="image-box">
                <img src={img} alt="Gif1" />
            </div>
        </>
    )
}

export default ImgCard
