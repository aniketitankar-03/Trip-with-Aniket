import Card from "./Card";
import { useState } from "react";

function Tours({tours , removeTour}){

    const [favourite , setFavourite] = useState([]);
    const [showFavourites, setShowFavourites] = useState(false);

    function handleFavourite(name, isFavourite) {
        setFavourite(prevFavourites => {
            if (isFavourite) {
                return [...prevFavourites, name];
            } else {
                return prevFavourites.filter(fav => fav !== name);
            }
        });
    }

    function displayFavHandler(){
        setShowFavourites(!showFavourites);
    }


    return (
        <div className="container"> 
            <div className="head">
                <h2 className="title">Tour With Aniket</h2>
                <div className="btn-fav" onClick={displayFavHandler}>
                    Favourite Tours
                    <img  src="./favouriteAdded.svg" width="22px"  alt="favourite"/>
                    <img  src={showFavourites? "./dropup.svg" : "./dropdown.svg"} className="drop" width="12px" alt="drop"/>
                    {showFavourites && (
                        <div className="displayList">
                            {favourite.map(fav => (
                                <div key={fav} className="list">
                                    {`${fav}`}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="cards">
                {
                    // Jab bhi hmm map use kare key ko pass krna hi krna hai
                    tours.map( (tour)=> {
                        return (
                            // ...tour ye tour ka pura ka pura object clone kr ke bhejega
                            <Card key = {tour.id} {...tour} removeTour = {removeTour} favourite = {favourite}  onFavouriteChange={handleFavourite} ></Card>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tours;