import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  overrides: {
    MuiAvatar: {
      root: {
        height: "35px",
        width: "35px",
      },
    },
    MuiIconButton: {
      root: {
        fontWeight: "bold",
        color: "black",
        fontSize: "2.4rem",
        height: "40px",
        width: "40px",
      },
      colorSecondary:{
        color: '#000',
        '&:hover' :{
          backgroundColor: '#c8f8f6',
          transition:'opacity .2s ease-in'
        }
      }
    },
  },
});
