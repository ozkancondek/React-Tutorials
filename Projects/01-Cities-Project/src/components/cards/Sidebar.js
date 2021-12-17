import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MapIcon from "@mui/icons-material/Map";
import { Badge } from "@mui/material";

export const Sidebar = ({ favList }) => {
  return (
    <div className="sideBar">
      <Badge badgeContent={favList.length} color="secondary">
        <FavoriteIcon fontSize="large" color="black" />
      </Badge>
      <SendIcon fontSize="large" />
      <ThumbUpIcon fontSize="large" />
      <MapIcon fontSize="large" />
    </div>
  );
};
