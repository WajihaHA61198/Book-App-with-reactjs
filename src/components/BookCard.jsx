import React from "react";
import { Card } from "@mui/material";
import "../styles/bookList.css";
import { useAppContext } from "./context/appContext";
import { useNavigate } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import { API_URL } from "../API";
// import axios from "axios";

const BookCard = ({ bookData }) => {
  const navigate = useNavigate();

  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  console.log("fav are", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <div className="grid grid-cols-5">
        {/* curElem for looping it in API */}
        {bookData.map((curElem) => {
          const { id, title, image_url } = curElem;

          return (
            <div className="bgk grid w-fit mb-1">
              {/* , border: "2px solid red" */}
              <Card
                sx={{ maxWidth: 240, margin: 1 }}
                elevation={8}
                className="card-hover"
                // Book Details
              >
                <div class="image">
                  <img src={image_url} alt="" className="img-card image__img" />

                  <div className="image__overlay">
                    <div className="image__title">{title}</div>
                    {/* favourites */}
                    {favoritesChecker(id) ? (
                      <button className="remove__btn" onClick={() => removeFromFavorites(id)}>
                        Remove from Favorites
                      </button>
                    ) : (
                      <button
                        className="btn__img"
                        onClick={() => addToFavorites(curElem)}
                      ></button>
                    )}
                  </div>
                </div>
                <div
                  className="p-1 rounded-b border__rad"
                  onClick={() => navigate(`/books/${id}`)}
                >
                  <div className="icons__arrow">
                  <ArrowRightAltIcon fontSizeSmall/>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BookCard;
