import React from "react"
import { FaStar } from "react-icons/fa" //have to npm install react-icons
import { Favorites } from "./favorites"
import "../css/favoriteStar.css"
import prodArray from './productArray'

// Keep together an item and its favorite status
// Elsewhere, keep together a list of items (in a parent)

export const Favorite = ( props ) => {
  return (
    <div>
      <input type="radio" name="favstar" onClick={props.updateFn} />
      <FaStar
        className="star"
        size={20}
        color={!props.isFavorite ? "#e4e5e9" : "#ffc107"}
        onClick={props.updateFn}
      />
      {/* <p>{props.id}</p> */}
      <h2>{props.name}</h2>

      <img src={prodArray[props.id].imageUrl} alt={props.imageAlt} className='favImage' />
      <h5>${props.price}</h5>
      <hr />
      {
        prodArray[props.id].description.map( ( indDesc ) => {
          return <li className='desc'>{indDesc}</li>
        } )
      }

      <hr />
      <hr />
    </div>
  );
};