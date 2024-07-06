import { useState } from "react";
import React from 'react';


function Card({id, image , info, price, name, removeTour , favourite , onFavouriteChange}){

    const [readmore , setReadmore] = useState(false);

    const [favLink , setFavLink] = useState(false);

    const description = readmore ?  `${info} ` :  `${info.substring(0 , 200)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    function handleFavourite(){
        const newFavLink = !favLink;
        setFavLink(newFavLink);
        onFavouriteChange(name, newFavLink);
    }

    console.log(favourite)
    return (
        <div className="card">
            <img src={image} className="image" alt="CityImage" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price} </h4>
                    <h4 className="tour-name"> {name} </h4>
                </div>
                <img src={ favLink ? "./favouriteAdded.svg" : "./favourite.svg"} className="favourite" alt="" onClick={handleFavourite} />
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? "Show Less" : "Read More"}
                    </span>
                </div>

                <button className="btn-red" onClick={() => {removeTour(id)}}> Not Intrested </button>
            </div>
        </div>
    );
}

export default Card;