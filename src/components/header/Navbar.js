import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Stack, OutlinedInput, InputAdornment } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const StyledSearchBar = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "300px",
  marginLeft: theme.spacing(2),
  "&:hover": {
    borderColor: "#00C26D",
  },
  "& .MuiOutlinedInput-input": {
    padding: "8px 14px",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00C26D",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00C26D",
  },
}));

export default function PrimarySearchAppBar() {
  const isMobile = useMediaQuery("(max-width:1100px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "-moz-initial" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: { xs: 1, sm: 3 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Link to="/">
              <svg width="186" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="10" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M.619.164h9.139v18.48H.619V.164z" fill="#fff" /></mask>
                <g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.758 8.055H6.886v10.589h-3.8V8.054H.618v-2.93h2.466V.164l2.591.015c.67.004 1.21.548 1.21 1.217v3.728h2.872v2.93z" fill="#293349" /></g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.59 10.637c-.116-1.596-1.451-2.553-3.163-2.553-1.537 0-2.9.725-3.307 2.553h6.47zm3.742 2.466H14.12c.406 1.566 1.683 2.437 3.51 2.437 1.364 0 2.728-.552 3.54-1.509l2.233 2.234c-1.276 1.712-3.655 2.64-6.034 2.64-4.148 0-7.195-2.843-7.195-7.02 0-4.382 3.308-7.109 7.195-7.109 3.859 0 7.021 2.727 7.021 6.876 0 .377-.029.841-.058 1.45zM25.608 11.826c0-4.294 3.481-7.05 7.427-7.05 2.466 0 4.439 1.16 5.715 2.901L35.907 9.68c-.61-.841-1.74-1.363-2.843-1.363-2.147 0-3.598 1.537-3.598 3.51 0 2.002 1.451 3.54 3.598 3.54 1.102 0 2.234-.523 2.843-1.364l2.843 2.002c-1.276 1.77-3.25 2.9-5.715 2.9-3.946 0-7.427-2.784-7.427-7.078zM53.414 11.217v7.427h-3.8v-7.021c0-2.147-1.277-3.104-2.582-3.104-1.364 0-3.046.725-3.046 3.191v6.934h-3.8V.187h2.583c.672 0 1.217.544 1.217 1.216v5.84c.58-1.712 2.756-2.467 4.061-2.467 3.54 0 5.396 2.38 5.367 6.44z" fill="#293349" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.293 11.826c0-4.296 3.483-7.054 7.432-7.054 2.467 0 4.441 1.161 5.718 2.903L65.6 9.678c-.61-.842-1.742-1.364-2.846-1.364-2.148 0-3.6 1.538-3.6 3.512 0 2.003 1.452 3.542 3.6 3.542 1.104 0 2.236-.523 2.846-1.365l2.844 2.003c-1.277 1.771-3.251 2.903-5.718 2.903-3.949 0-7.432-2.786-7.432-7.083zM80.258 11.855c0-2.09-1.741-3.484-3.512-3.484-1.916 0-3.513 1.48-3.513 3.484a3.506 3.506 0 0 0 3.513 3.512c1.858 0 3.512-1.451 3.512-3.512zm3.92-5.518v12.31h-3.804v-1.683c-.958 1.335-2.844 1.945-4.354 1.945-3.483 0-6.648-2.7-6.648-7.054s3.165-7.054 6.648-7.054c1.568 0 3.396.58 4.354 1.945V5.12h2.587c.672 0 1.216.545 1.216 1.217zM97.183 5.207l-.871 3.63a3.947 3.947 0 0 0-1.945-.494c-1.945 0-3.28 1.8-3.28 5.66v4.645h-3.803V5.12h2.557c.672 0 1.216.545 1.216 1.217v1.657c.755-2.264 2.294-3.222 3.977-3.222.726 0 1.539.116 2.149.435zM107.778 10.636c-.116-1.597-1.451-2.555-3.164-2.555-1.539 0-2.903.726-3.309 2.555h6.473zm3.745 2.467h-10.218c.406 1.568 1.683 2.439 3.512 2.439 1.364 0 2.729-.552 3.542-1.51l2.235 2.236c-1.277 1.712-3.658 2.641-6.038 2.641-4.151 0-7.2-2.844-7.2-7.025 0-4.383 3.31-7.112 7.2-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.029.842-.058 1.451zM123.396 10.636c-.116-1.597-1.452-2.555-3.165-2.555-1.538 0-2.902.726-3.309 2.555h6.474zm3.744 2.467h-10.218c.407 1.568 1.684 2.439 3.513 2.439 1.364 0 2.729-.552 3.541-1.51l2.236 2.236c-1.278 1.712-3.658 2.641-6.039 2.641-4.151 0-7.199-2.844-7.199-7.025 0-4.383 3.309-7.112 7.199-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.028.842-.058 1.451zM139.304 5.207l-.871 3.63a3.948 3.948 0 0 0-1.945-.494c-1.945 0-3.281 1.8-3.281 5.66v4.645h-3.802V5.12h2.557c.672 0 1.216.545 1.216 1.217v1.657c.755-2.264 2.294-3.222 3.978-3.222.725 0 1.538.116 2.148.435z" fill="#00C26D" />
                <mask id="b" maskUnits="userSpaceOnUse" x="138" y="14" width="5" height="5"><path fill-rule="evenodd" clip-rule="evenodd" d="M138.055 14.235h4.877v4.674h-4.877v-4.674z" fill="#fff" /></mask><g mask="url(#b)"><path fill-rule="evenodd" clip-rule="evenodd" d="M138.055 16.558c0-1.336 1.103-2.323 2.41-2.323 1.335 0 2.467.987 2.467 2.323 0 1.364-1.132 2.351-2.467 2.351-1.307 0-2.41-.987-2.41-2.351z" fill="#293349" /></g><path fill-rule="evenodd" clip-rule="evenodd" d="M158.753 11.217v7.431h-3.803v-7.025c0-2.148-1.277-3.106-2.584-3.106-1.364 0-3.048.726-3.048 3.193v6.938h-3.803V5.12h2.587c.672 0 1.216.545 1.216 1.217v1.048c.581-1.83 2.729-2.613 4.065-2.613 3.541 0 5.399 2.38 5.37 6.445zM171.293 10.636c-.116-1.597-1.451-2.555-3.164-2.555-1.539 0-2.903.726-3.309 2.555h6.473zm3.745 2.467H164.82c.406 1.568 1.683 2.439 3.512 2.439 1.365 0 2.729-.552 3.542-1.51l2.235 2.236c-1.277 1.712-3.658 2.641-6.038 2.641-4.151 0-7.199-2.844-7.199-7.025 0-4.383 3.309-7.112 7.199-7.112 3.861 0 7.025 2.729 7.025 6.88 0 .377-.029.842-.058 1.451zM185.082 8.052h-2.874v10.596h-3.803V8.052h-2.467V5.12h2.467V.156h2.587c.672 0 1.216.545 1.216 1.217V5.12h2.874v2.932z" fill="#293349" /></svg>
            </Link>
          </Box>

          {/* Main Content (Search and Buttons) */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Desktop Search */}
            {!isMobile && (
              <StyledSearchBar
                placeholder="Etkinlik, İş ilanı, Blog ara"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            )}

            {/* Desktop Buttons */}
            {!isMobile && (
              <Stack direction="row" spacing={1} sx={{ marginLeft: 2 }}>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Etkinlikler
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  İş ilanları
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Eğitimler
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Komünite
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Şirketler
                </Button>
              </Stack>
            )}
          </Box>

          {/* "Giriş/Üye Ol" Button */}
          <Box sx={{
            display: "flex",
            alignItems: "center-right",
            justifyContent: "right",
            marginRight: "100px",
            flexGrow: { xs: 1, md: 0 }
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00C26D",
                color: "white",
                whiteSpace: "nowrap",
                marginRight: "100px",
                "&:hover": { backgroundColor: "#00C26D" },
              }}
            >
              Giriş/Üye Ol
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
