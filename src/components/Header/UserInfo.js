import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import UserPopOver from "./UserPopover";
import styled from "styled-components";

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

function UserInfo() {
  const [open, setOpen] = useState(false);
  return (
    <UserInfoContainer onClick={(e) => setOpen((prevOpen) => !prevOpen)}>
      <Avatar src="" />
      <ExpandMore />
      <UserPopOver open={open} />
    </UserInfoContainer>
  );
}

export default UserInfo;
