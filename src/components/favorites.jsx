import React, { useState } from "react";
import { Favorite } from "./favorite";
import productArray from './productArray'
import '../css/favorites.css'

export const Favorites = ( props ) => {

  //Initializes two lists, one with the unfavorited items, initialized as the state of the default products
  //And one empty list with favorited items
  const [unfavoriteList, setUnfavorite] = useState( productArray )
  const [favoriteList, setFavorite] = useState( [] )

  const moveToFavorite = ( id ) => {
    //takes item (using id) and adds it to the new favorite array
    let tempFavorites = [...favoriteList, unfavoriteList.find( item => item.id === id )]
    //puts in right order by id
    tempFavorites.sort( ( a, b ) => a.id - b.id )
    setFavorite( tempFavorites )

    //removes the item from the original list by filtering out all items with other ids into the new unfav array
    //was originally .idx, check Arthur's original file
    setUnfavorite( unfavoriteList.filter( item => item.id !== id ) )
  }
  const moveToUnFavorite = ( id ) => {
    //toggles clicked item to unfavorite list by taking the item with that id and putting it in the unfav array
    let tempUnfavorites = [...unfavoriteList, favoriteList.find( item => item.id === id )]
    //puts in right order by id
    tempUnfavorites.sort( ( a, b ) => a.id - b.id )
    setUnfavorite( tempUnfavorites )

    //removes the item from the favorited list by filtering out all items with other ids into the fav array
    setFavorite( favoriteList.filter( item => item.id !== id ) )
  }

  return (
    <>
      <div className="container favorite-styling">
        <h2>Available Products: </h2>
        <br />
        <p>Click the star to add the product to your favorites list. </p>
        {unfavoriteList.map( ( item ) => {
          return (
            <Favorite updateFn={() => moveToFavorite( item.id )} id={item.id} name={item.name} imageUrl={props.imageUrl} imageAlt={props.imageAlt} description={item.description} price={item.price} isFavorite={false} /> );
        } )}
      </div>

      <br />
      <br />

      <div className="container favorite-styling">
        <h2>Your Favorites: </h2>
        <br />
        <p>Click the star to remove the product from your favorites list. </p>
        {favoriteList.map( ( item ) => {
          return (
            <Favorite updateFn={() => moveToUnFavorite( item.id )} id={item.id} name={item.name} imageUrl={props.imageUrl} imageAlt={props.imageAlt} description={item.description} price={item.price} isFavorite={true} /> );
        } )}
      </div>
    </>
  )

}