import React, { memo } from "react";
import { Avatar } from "@material-ui/core";
import { Popover, Profile, ProfileDetail } from "../../styles/header.styled";



function UserPopover({ open }) {
  return (
    <Popover open={open}>
      <Profile>
        <Avatar />
        <ProfileDetail>
          
        </ProfileDetail>
      </Profile>
      <div></div>
      <div></div>
    </Popover>
  );
}
export default memo(UserPopover);
