import PetsIcon from "@mui/icons-material/Pets";
import { Toolbar } from "@mui/material";
import "./Logo.scss";

export default function Logo() {
  return (
    <Toolbar className="logo">
      <PetsIcon color="secondary" fontSize="large" />
    </Toolbar>
  );
}
