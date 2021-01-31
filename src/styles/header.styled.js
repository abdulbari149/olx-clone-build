import styled from "styled-components";

export const Popover = styled.div`
  width: 290px;
  height: 100px;
  padding: 16px;
  background-color: white;
  display: ${(props) => (props.open ? "flex" : "none")};
  position: absolute;
  top: 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  transform: translateX(-85%);
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 15px;
    height: 0;
    width: 0;
    border: 12px solid transparent;
    border-bottom-color: #fff;
    pointer-events: none;
    transform: translateY(-100%);
  }
`;

export const Profile = styled.div`


`

export const ProfileDetail = styled.div`


`