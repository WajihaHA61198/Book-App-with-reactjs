import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Paper } from "@mui/material";
import axios from "axios";
import { BOOK_DETAILS_URL } from "../API";
import "../styles/bookList.css";
import "../App";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BOOK_DETAILS_URL}/${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <div className="mt-24 flex-column justify-center text-center">
        {/* BookDetail: {id} */}
        <div className="book-image">
          <h2 className="text-3xl mb-2">{book?.title}</h2>
          <hr className="mb-5" />
          <img
            className="con_center mr-auto ml-auto mb-5"
            src={book?.image_url}
            alt="#"
          />
        </div>
        <div className="book-description">
          <h2 className="text-xl mb-2">Description</h2>
          <p>{book?.description}</p>
          <h2 className="text-xl mt-2">Author</h2>
          <p>{book?.authors}</p>
          <h2 className="text-xl mt-2">Genres</h2>
          <p>{book?.genres}</p>
        </div>
      </div>

      <div className="mb-3 mt-5 text-center ">
        <h2 className="text-xl mb-2">Quotes</h2>
        <div className="text-gray-400">
          <p>{book?.Quote1}</p>
          <p>{book?.Quote2}</p>
          <p>{book?.Quote3}</p>
        </div>
      </div>

      <Paper variant="outlined" square elevation={8} color="primary" />
    </Container>
  );
};

export default BookDetails;
