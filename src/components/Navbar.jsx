import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, Container, Typography } from "@mui/material";
import theme from "../styles/Style";
import { ThemeProvider } from "@emotion/react";
import { BookmarkIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="absolute" color="grey">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* logo */}
            <Box
              ml={70}
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
              }}
            >
              <Typography variant="h4">
                <BadgeCheckIcon
                  color="rgb(2 132 199)"
                  className="w-9 inline-flex pb-2 pr-1"
                />
                StoryBook
              </Typography>
            </Box>

            {/* small screen's RED  */}
            <Box
              component="a"
              href="/"
              sx={{
                ml: 4,
                mt: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
              }}
            >
              <Typography variant="h6" align="center">
                <BadgeCheckIcon
                  color="rgb(2 132 199)"
                  className="w-9 inline-flex pb-2 pr-1"
                />
                StoryBook
              </Typography>
            </Box>

            {/* large screen tabs */}
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  display: "inline-flex",
                  justifyContent: "end",
                  marginRight: "1.5rem",
                },
              }}
            ></Box>

            <div className="flex flex-col my-3 mb-0">
              <button
                onClick={() => navigate("/favorites")}
                className=" bg-indigo-500  text-white px-8 py-3 mb-4"
              >
                Favourites <BookmarkIcon className="w-5 inline-flex " />
              </button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
