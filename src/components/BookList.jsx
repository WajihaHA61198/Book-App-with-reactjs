import React, { useState } from "react";
import "../styles/bookList.css";
import Book from "./BookApi";
import BookCard from "./BookCard";
import { Container, TextField, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const BookList = () => {
  const [bookData] = useState(Book); // Book from API

  const [q, setQ] = useState("");
  const [searchParam] = useState(["title"]);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: alpha(theme.palette.common.black, 0.15),
    borderColor: alpha(theme.palette.primary.main),
    "&:hover": {
      backgroundColor: alpha(theme.palette.primary.light, 0.25),
    },
    // marginLeft: 0,

    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    // const [searchParam] = useState(["capital", "name"]);
    <Container>
      <div className="book-list mt-40">
        <div className="mb-5 mr-auto ml-auto">
          {/* <TextField id="standard-basic" label="Search" variant="standard" />
          <Button variant="contained">Search</Button> */}
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </Search> */}
        </div>

        <BookCard bookData={bookData} />
      </div>
    </Container>
  );
};

export default BookList;
