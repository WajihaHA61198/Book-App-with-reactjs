import React from "react";
import { useAppContext } from "./context/appContext";
import "../styles/bookList.css";
import { Card, Container } from "@mui/material";

const Favourites = () => {
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <Container>
        <div className="grid grid-cols-5 mt-40">
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div className=" grid w-fit mb-1">
                <Card
                  sx={{ maxWidth: 240, margin: 1 }}
                  elevation={8}
                  className="card-hover"
                >
                  <div class="image">
                    <img
                      src={book.image_url}
                      alt=""
                      className="img-card image__img"
                    />
                    <div className="image__overlay">
                      <div className="image__title">{book.title}</div>
                      <div>
                        {favoritesChecker(book.id) ? (
                          <button
                            className="btn__img"
                            onClick={() => removeFromFavorites(book.id)}
                          ></button>
                        ) : (
                          <button
                            className="btn__img"
                            onClick={() => addToFavorites(book)}
                          ></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))
          ) : (
            <p>You don't have any favorite books yet!</p>
          )}
        </div>
      </Container>
    </>
  );
};

export default Favourites;
