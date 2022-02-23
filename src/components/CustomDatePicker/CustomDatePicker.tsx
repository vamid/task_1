import { FC, ReactNode, useCallback, useState } from "react";
import type { CustomDatePickerProps } from "./types";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button, Stack } from "@mui/material";
import "./CustomDatePicker.scss";
import React from "react";

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  date,
  onClick,
}) => {
  const options = { month: "long", year: "numeric" } as const;
  const monthYear = date.toLocaleDateString("en-US", options);
  return (
    <Stack direction={"row"}>
      <ArrowBackIosNewIcon />
      <Button>Marth 2022</Button>
      <ArrowForwardIosIcon />
    </Stack>
  );
};
