import { Avatar } from "@mui/material";
import ICharacter from "./types";
import "./Character.scss";
import { FC } from "react";
import avatarImg from "assets/images/avatar.jpg";

export const Character: FC<ICharacter> = ({
  img,
  firstName = "DefaultUser",
  lastName,
  workPosition,
}: ICharacter) => {
  return (
    <div className="character">
      <Avatar className="character-avatar" alt={firstName} src={img || avatarImg} />
      <div>{`${firstName} ${lastName}`}</div>
    </div>
  );
};
