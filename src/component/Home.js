import React, { Fragment } from 'react'
import Gif1 from "../images/gif1.gif"
import Gif2 from "../images/gif2.gif"
import Gif3 from "../images/gif3.gif"
import Gif4 from "../images/gif4.gif"
import Gif5 from "../images/gif5.gif"
import Gif6 from "../images/gif6.gif"
import Gif7 from "../images/gif7.gif"
import Gif8 from "../images/gif8.gif"
import Vid from "../video/v.mp4"
import Ecommerce from "../video/ecommerce.mp4"
import "./home.css"
import ImgCard from "./ImgCard.js"
import VideoCard from "./VideoCard.js"
import MetaData from './MetaData'


const Home = () => {
    const images = [
        {   
            url:Gif1,
            video:Vid,
            description:"PHP project"
        },
        {
            url:Gif2,
            video:Ecommerce,
            description:"Mern project"
        },
        {
            url:Gif3,
            video:Vid,
            description:"PHP project"
        },
        {
            url:Gif4,
            video:Ecommerce,
            description:"Mern project"
        },
        {
            url:Gif5,
            video:Vid,
            description:"PHP project"
        },
        {
            url:Gif6,
            video:Ecommerce,
            description:"Mern project"
        },
        {
            url:Gif7,
            video:Vid,
            description:"PHP project"
        },
        {
            url:Gif8,
            video:Ecommerce,
            description:"Mern project"
        },
    ]
    return (
        <Fragment>
        <MetaData title="Home Page" />
            <h2 className='heading'>Gif images section</h2>
            <div className="container">
            {
                images.map((img) =>(
                    <ImgCard img={img.url} />
                ))
            }
            </div>
            <h2 className='heading'>Video section</h2>
            <div className="container">
            {
                images.map((vid) =>(
                    vid ? <VideoCard video={vid} /> : {}
                ))
            }
            </div>
        </Fragment>
    )
}

export default Home
