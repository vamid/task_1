import { MouseEventHandler } from "react";

export type CustomDatePickerProps = {
  date: Date;
  onClick: MouseEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
};
