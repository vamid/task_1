import { IAvatar } from "./types";
import "./Avatar.css";

export const Avatar: React.FC<IAvatar> = ({ img }) => (
  <img src={img} className="Avatar" />
);
