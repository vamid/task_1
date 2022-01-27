import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchInput.scss";

export default function SearchInput() {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
      <TextField
        id="input-search"
        label="Search for anything"
        variant="standard"
      />
    </Box>
  );
}
