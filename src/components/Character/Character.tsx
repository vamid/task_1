import { Avatar } from "@mui/material";
import ICharacter from "./types";
import "./Character.scss";

export default function Character({
  img,
  firstName,
  lastName,
  workPosition,
}: ICharacter) {
  return (
    <div className="character">
      <Avatar className="character-avatar" alt={firstName} src={img} />
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );
}

Character.defaultProps = {
  firstName: "DefaultUser",
};
