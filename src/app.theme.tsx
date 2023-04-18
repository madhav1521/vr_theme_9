import { createTheme } from "@mui/material";
// const currentDirection = "ltr";
const primary = "#00A2A1";
const primaryMain = "#009291";
const primaryContrast = "#F6F6F6";
const secondary = "#505050";
const secondaryMain = "#848484";
const secondaryLight = "#9C9C9C";
const secondaryContrast = "#989898";
const grey = "#B0B0B0";
const greyLight = "#CECECE";
const greyDark = "#DBDBDB";
const white = "#FFFFFF";
const black = "#000000";
const blue = "#F4FBFF";
const danger = "#FF5555";
const primaryHover = "#35598E";
const warning = "#cecece";

export const appTheme = createTheme({
//   direction: currentDirection,
  palette: {
    primary: {
      main: primary,
      light: "#1aabaa",
      dark: "#009291",
    },
    secondary: {
      main: secondary,
      light: "#626262",
      dark: "#404040",
    },
    info: {
      main: grey,
      light: "#ebebeb",
      dark: "#bababa",
    },
    warning: {
      main: secondaryLight,
      light: warning,
    },
  },
//   spacing: [0, 8, 15, 20, 30, 40],
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "45px",
      lineHeight: "52px",
      color: black,
      fontWeight: "700",
      "@media (max-width:1199px)": {
        fontSize: "40px",
        fontWeight: "600",
        lineHeight: "45px",
      },
      "@media (max-width:899px)": {
        fontSize: "36px",
      },
    },
    h2: {
      fontSize: "35px",
      lineHeight: "41px",
      color: white,
      fontWeight: "600",
      "@media (max-width:899px)": {
        fontSize: "30px",
        lineHeight: "35px",
      },
      "@media (max-width:599px)": {
        fontSize: "28px",
        fontWeight: "500",
      },
    },
    h3: {
      fontSize: "25px",
      lineHeight: "29px",
      color: black,
      fontWeight: "600",
    },
    h4: {
      fontSize: "20px",
      lineHeight: "23px",
      color: secondary,
      fontWeight: "600",
    },
    h5: {
      fontSize: "20px",
      lineHeight: "23px",
      color: secondary,
      fontWeight: "300",
    },
    h6: {
      fontSize: "16px",
      lineHeight: "21px",
      color: secondaryMain,
      fontWeight: "400",
    },
    body2: {
      fontSize: "12px",
      lineHeight: "14px",
      color: secondaryLight,
      fontWeight: "400",
      letterSpacing: "-0.01em",
    },
  },
components:{
    MuiTypography:{
        styleOverrides:{
            root:{
                "&.login-subheading":{
                    color:black,
                },
                "&.register-here":{
                    fontSize:"15px",
                    lineHeight:"17px",
                    color:secondaryMain,
                },
            },
        },
    },
    MuiFormControl:{
        styleOverrides:{
            root:{
                width:"100%",
            },
        },
    },
    MuiInputLabel:{
        styleOverrides:{
            root:{
                fontSize:"15px",
                fontWeight:"400",
                lineHeight:"17px",
                // color:grey,
                ".login-form &.MuiInputLabel-root":{
                    color:grey,
                },
            },
        },
    },
    MuiInput:{
        styleOverrides:{
            root:{
                "&:before":{
                    borderBottom:"1px solid" + greyDark,
                },
            },
            input:{
                fontSize:"15px",
                fontWeight:"400",
                lineHeight:"17px",
                color:secondary,
                height:'17px',
                padding:"7px 0 12px",
            },
        },
    },
    MuiButton:{
        styleOverrides:{
            root:{
                borderRadius:"0",
                "&.login-btn":{
                    padding:"15px 30px",
                    "&span":{
                        fontSize:"15px",
                    fontWeight:"700",
                    lineHeight:"21px",
                    color:white,
                    },
                },
            },
        },
    },
    MuiLink:{
        styleOverrides:{
            root:{
                textDecoration:"none",
                "&.forgot-password":{
                    color:secondaryMain,
                },
                "&.sign-up":{
                    color:primary,
                    fontWeight:"600",
                },
                "&:hover, &:focus, &:active":{
                    textDecoration:"underline",
                }
            },
        },
    },
    
},




});