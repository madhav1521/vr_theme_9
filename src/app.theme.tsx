import { PaletteMode, createTheme } from "@mui/material";
import React from "react";

// const primary = "#00A2A1";
// const primaryMain = "#009291";
// const primaryContrast = '#F6f6F6';
// const secondary = "#505050";
// const secondaryMain = "#848484";
// const secondaryLight = "#9C9C9C";
// const secondaryContrast = "#A3A3A3";
// const grey = "#B0B0B0";
// const greyLight = "#E2E2E2";
// const greyDark = "#BDBDBD";
// const white = "#FFFFFF";
// const black = "#000000";
// const warning = "#cecece";


const primary = "#59c2c3";
const primaryMain = "#31b3b3";
const primaryContrast = '#F6f6F6';
const secondary = "#dddddd";
const secondaryMain = "#848484";
const secondaryLight = "#9C9C9C";
const secondaryContrast = "#F4F4F4";
const grey = "#808080";
const greyLight = "#999999";
const greyDark = "#999999";
const white = "#202020";
const black = "#f4f4f4";
const warning = "#cecece";
const bg = "#0e0e0e";

export const appTheme = createTheme({
 
  palette: {
    // mode,
    // ...(mode === 'light'
    //   ? {
    //       // palette values for light mode
    //       primary: primary,
    //       divider: primary[200],
    //       text: {
    //         primary: grey[900],
    //         secondary: grey[800],
    //       },
    //     }
    //   : {
    //       // palette values for dark mode
    //       primary: primary,
    //       divider: primary[700],
    //       background: {
    //         default: primary[900],
    //         paper: primary[900],
    //       },
    //       text: {
    //         primary: '#fff',
    //         secondary: grey[500],
    //       },
    //     }),
    primary: {
      main: primary,
      light: "#1aabaa",
      dark: primaryMain,
    },
    secondary: {
      main: secondary,
      light: "#626262",
      dark: secondaryMain,
    },
    info: {
      main: white,
      light: "#ebebeb",
      dark: "#bababa",
    },
    warning: {
      main: secondaryLight,
      light: warning,
    },
  },
  spacing: [0, 8, 15, 20, 30, 40],
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
      fontSize: "30px",
      lineHeight: "35px",
      color: black,
      fontWeight: "700",
      "@media (max-width:1399px)": {
        fontSize: "27px",
        fontWeight: "600",
      },
    },
    h3: {
      fontSize: "25px",
      lineHeight: "29px",
      color: secondary,
      fontWeight: "500",
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
    },
    body2: {
      fontSize: "12px",
      lineHeight: "18px",
      color: secondary,
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
                ".dark-theme &.register-here":{
                    fontSize:"15px",
                    lineHeight:"17px",
                    color:secondary,
                },
                "&.card-subhead":{
                  color:black,
                  fontSize:"18px",
                    lineHeight:"21px",
                },
                "&.weekly-total":{
                  color:black,
                  marginBottom:"10px",
                  marginTop:"30px",
                },
                "&.error-message":{
                  color:"#FF3535"
                },
                "&.warn-message":{
                  color:"#FFA800"
                },
                "&.info-message":{
                  color:"#00B9E1"
                },
                "&.valid-message":{
                  color:"#00AF27"
                },
                ".dark-theme &.error-message":{
                  color:"#661515"
                },
                ".dark-theme &.warn-message":{
                  color:"#664300"
                },
                ".dark-theme &.info-message":{
                  color:"#004A5A"
                },
                ".dark-theme &.valid-message":{
                  color:"#004610"
                },
                "&.text-message":{
                  fontSize:"15px",
                  lineHeight:"18px",
                  flexGrow:0,
                  marginLeft:"8px",
                },
                "&.page-head":{
                  marginBottom: '26px',
                  fontWeight: 500,
                },
                "&.page-subhead":{
                  fontSize:"18px",
                  fontWeight:"400",
                  lineHeight:"21px",
                  color:secondary,
                  marginBottom:"16px",
                  
                },
                "&.tab-text":{
                  fontSize:"15px",
                  fontWeight:"400",
                  lineHeight:"24px",
                  color:secondary,
                },
                "&.nis":{
                  fontSize:"15px",
                  lineHeight:"17px",
                  color:grey,
                },
            },
        },
    },
    MuiFormControlLabel:{
      styleOverrides:{
        root:{
          marginRight:"45px",
          ".MuiFormControlLabel-label":{
            color:grey,
            fontSize:"15px",
            lineHeight:"18px",
          },
        },
      },
    },
    MuiFormControl:{
        styleOverrides:{
            root:{
                width:"100%",
                ".MuiFormHelperText-root":{
                  fontSize:"12px",
                  lineHeight:"14px",
                  marginTop:"7px",
                  color:grey,
                  "&.Mui-error":{
                    color:"#FF3939",
                  },
                  ".dark-theme &.Mui-error":{
                    color:"#FF4D4D",
                  },
                },
            },
        },
    },
    MuiInputLabel:{
        styleOverrides:{
            root:{
                fontSize:"15px",
                fontWeight:"400",
                lineHeight:"17px",
                color:grey,
                "&.Mui-focused":{
                    color:grey,
                },
                "&.Mui-error": {
                  color: "#FF3939",
                },
                ".dark-theme &.Mui-error": {
                  color: "#FF4D4D",
                },
                ".dark-theme &.Mui-disabled":{
                  color:"#787878",
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
                  "&.Mui-error:before":{
                    borderBottom:"1px solid #FF3939",
                  },
                  "&.Mui-disabled:before":{
                    borderBottom:"1px dashed" + greyDark,
                  },
                  ".dark-theme &.Mui-disabled:before":{
                    borderBottom:"1px dashed #787878" ,
                  },
                  ".dark-theme &.Mui-error:before":{
                    borderBottom:"1px solid #FF4D4D",
                  },
                "&:hover:not(.Mui-disabled, .Mui-error):before":{
                  borderBottom:"1px solid rgba(0,0,0,0.5)" ,
                },
                ".dark-theme &:hover:not(.Mui-disabled, .Mui-error):before":{
                  borderBottom:"1px solid rgba(0,240,240,0.5)" ,
                },
            },
            input:{
                fontSize:"15px",
                fontWeight:"400",
                lineHeight:"17px",
                color:secondary,
                height:'17px',
                padding:"5px 0 14px",
                
                ".dark-theme &.Mui-disabled":{
                  color:"#787878",
                  WebkitTextFillColor:"#787878",
                },
                "&.MuiSelect-select":{
                  height:"17px",
                  minHeight: '17px',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                },
            },
        },
    },
    MuiSvgIcon:{
      styleOverrides:{
        root:{
          ".MuiInputAdornment-root &.MuiSvgIcon-root":{
            width:"20px",
            height:"20px",
            transform:"rotateX(180deg)",
            color:grey,
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "7px",
          // lineHeight:"normal"
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: "7px",
          // lineHeight:"normal"
        },
      },
    },
    MuiButton:{
        styleOverrides:{
            root:{
                borderRadius:"0",
                "&.login-btn":{
                    padding:"15px 30px",
                    "& span":{
                      fontSize:"18px",
                      fontWeight:"700",
                      lineHeight:"21px",
                      textTransform:"uppercase",
                      color:white,
                    },
                    "@media (max-width:599px)": {
                      padding:"11px 30px",
                    },
                  },
                  ".dark-theme &.login-btn ":{
                    "& span":{
                      color:black,
                    },
                  },
                "&.search-btn": {
                  display: "none",
                  "@media (max-width:899px)": {
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "10px",
                  },
                  "& .search-icon":{
                    width:"25px",
                    height:"25px",
                  },
                  "& .dark-search-icon":{
                    display:"none",
                  },
                },
                ".dark-theme &.search-btn": {
                  display: "none",
                  "@media (max-width:899px)": {
                    display: "flex",
                    marginLeft: "auto",
                    marginRight: "10px",
                  },
                  "& .dark-search-icon":{
                    display:"flex",
                    width:"25px",
                    height:"25px",
                  },
                  "& .search-icon":{
                    display:"none",
                  },
                },
                "&.notification-btn": {
                  marginLeft: "auto",
                  marginRight: "28px",
                  "@media (max-width:899px)": {
                    marginRight: "10px",
                    marginLeft:'0'
                  },
                  "& .dark-bell-btn":{
                    display:"none",
                  },
                },
                ".dark-theme &.notification-btn": {
                  marginLeft: "auto",
                  marginRight: "28px",
                  "@media (max-width:899px)": {
                    marginRight: "10px",
                    marginLeft:'0'
                  },
                  "& .bell-btn":{
                    display:"none",
                  },
                  "& .dark-bell-btn":{
                    display:"block",
                  },
                },
                "&.dropdown": {
                  border: "1px solid transparent",
                  padding: "10px",
                  background:'transparent',
                  minWidth:'40px',
                  height:'40px',
                  "&:hover, &:focus, &:active": {
                    border: "1px solid" + white,
                  },
                  "@media (max-width:899px)": {
                    padding: "5px",
                  },
                },
                "&.menu":{
                  padding:"10px",
                  display:"flex",
                  alignItems:"center",
                  textAlign:"start",
                  minWidth:"auto",
                  height:"auto",
                  textTransform:"capitalize",
                  "@media (max-width:599px)": {
                    padding: "5px",
                    "& .dropdown-arrow, & .profile-name":{
                      display:"none",
                    },
                  },
                  "& .dark-dropdown-arrow":{
                    display:"none",
                  },
                },
                ".dark-theme &.menu":{
                  padding:"10px",
                  display:"flex",
                  alignItems:"center",
                  textAlign:"start",
                  minWidth:"auto",
                  height:"auto",
                  textTransform:"capitalize",
                  "& .dark-dropdown-arrow":{
                    display:"block",
                  },
                  "& .dropdown-arrow":{
                    display:"none",
                  },
                  "@media (max-width:599px)": {
                    padding: "5px",
                    "& .dark-dropdown-arrow, & .profile-name":{
                      display:"none",
                    },
                  },
                },
                "&.card-dots":{
                  padding:'3px',
                  background:"transparent",
                  minWidth:"30px",
                  height:"30px",
                  borderRadius:"50px",
                  "&:hover, &:active":{
                    backgroundColor:"rgba(176,176,176,0.1)",
                  },
                  ".MuiTouchRipple-root":{
                    color:grey,
                  },
                },
                "&.primary-btn":{
                  padding:"13px 30px",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "21px",
                  color:white,
                },
                "&.secondary-btn":{
                  padding:"13px 24px",
                  fontSize: "18px",
                  fontWeight: "700",
                  lineHeight: "21px",
                  color:primary,
                  border:"2px solid" + primary,
                },
                ".upload-content &.MuiButton-root": {
                  padding: "9px 22px",
                  border: "0",
                  fontSize: "15px",
                  lineHeight: "17px",
                  backgroundColor: primaryContrast,
                  textTransform: "lowercase",
                  color: secondary,
                },
                ".dark-theme .upload-content &.MuiButton-root":{
                  color:secondaryContrast,
                  backgroundColor:'#363636',
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
                    fontSize:"15px",
                    lineHeight:"17px",
                },
                ".dark-theme &.forgot-password":{
                    color:secondary,
                    fontSize:"15px",
                    lineHeight:"17px",
                },
                "&.sign-up":{
                    color:primary,
                    fontWeight:"700",
                },
                "&:hover, &:focus, &:active":{
                    textDecoration:"underline",
                }
            },
        },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          boxShadow: "0px 4px 15px -4px rgba(0, 0, 0, 0.1)",
          ".dark-theme &.MuiPopover-paper":{
            color:black ,
            backgroundColor:'#1A1A1A',
            boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.05)",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "15px",
          fontSize: "15px",
          fontWeight: "400",
          lineHeight: "21px",
          borderBottom: "1px solid #E4E4E4",
          ".dark-theme &.MuiTableCell-root":{
            borderBottom: "1px solid rgba(153,153,153,0.8)",
          },
        },
        body: {
          color: secondary,
          lineHeight:"17px",
          "&:last-child": {
            padding: "0 7px",
          },
        },
        head: {
          color: secondaryContrast,
          fontWeight: "500",
          fontSize: "18px",
          height: "52px",
          letterSpacing: '0.05em',
          textTransform: "uppercase",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          marginTop: "11px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          ".MuiSelect-icon": {
            opacity: "0",
          },
        },
        input: {
          padding: "13px 14px",
          color: secondary,
          fontSize: "15px",
          height: "22px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        icon: {
          display: "none",
        },
        action: {
          margin: 0,
          padding: 0,
        },
        root: {
          padding: "4px 5px 4px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          height: "100%",
          borderRadius: "0",
          "&.text-danger": {
            backgroundColor: "#FFFAFA",
            border:"1px solid #FFC9C9",
            color:"#FF3535",
          },
          ".dark-theme &.text-danger":{
            backgroundColor: "#FF9C9C",
            border:"1px solid transparent",
            color:"#661515",
          },
          "&.text-info": {
            backgroundColor: '#F3FDFF',
            border:"1px solid #BAF3FF",
            color:"#00B9E1",
          },
          ".dark-theme &.text-info":{
            backgroundColor: "#82DDF0",
            border:"1px solid transparent",
            color:"#004A5A",
          },
          "&.text-warn": {
            backgroundColor: "#FFFCF5",
            border:"1px solid #FFDFA0",
            color:"#FFA800",
          },
          ".dark-theme &.text-warn":{
            backgroundColor: "#FFD482",
            border:"1px solid transparent",
            color:"#664300",
          },
          "&.text-success": {
            backgroundColor: "#F5FFF8",
            border:"1px solid #9AFFB0",
            color:"#00AF27",
          },
          ".dark-theme &.text-success":{
            backgroundColor: "#82D895",
            border:"1px solid transparent",
            color:"#004610",
          },
        },
        message: {
          alignItems: "center",
          display: "flex",
          color: white,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        flexContainer: {
          flexWrap: "nowrap",
          height: "51px",
          "&.MuiTabs-indicator": {
            height: "3px",
            marginBottom: "-1px",
            bottom: "3px",
          },
        },
        root: {
          minHeight: "15px",
          "&.inner-tabs": {
            marginBottom: "14px",
            ".MuiTabs-flexContainer": {
              borderBottom: "1px solid" + greyLight,
            },
          },
          "&.dash-tabs": {
            ".MuiTabs-flexContainer": {
              borderBottom: "none",
            },
          },
        },

        indicator: {
          height: "3px",
          marginBottom: "-1px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: "15px",
          fontSize: "15px",
          fontWeight: "400",
          color: grey,
          textTransform: "capitalize",
          "&.tabs": {
            padding: "16px 23px ",
            minWidth: "max-content",
            "&:hover , &:active , &:focus": {
              color: grey,
              background: 'rgba(50, 179, 179, 0.15)',
            },
            ".dark-theme &:hover , .dark-theme &:active , .dark-theme &:focus": {
              color: grey,
              background: 'rgba(5, 19, 19, 0.3)',
            },
          },
          "&.tabs.Mui-selected": {
            color: primary,
            fontWeight: "500",
          },
          ".dark-theme &.tabs.Mui-selected": {
            color: primary,
            fontWeight: "500",
          },
        },
      },
    },
    


},




});

function setMode(arg0: (prevMode: PaletteMode) => "light" | "dark") {
  throw new Error("Function not implemented.");
}
