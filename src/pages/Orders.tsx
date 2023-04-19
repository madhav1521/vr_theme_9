import { Alert, Box, Button, Card, Checkbox, Collapse, FormControl, FormControlLabel, Grid, Icon, IconButton, Input, InputAdornment, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Password, Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { checkedicon, checkedradio, error, info, uncheckedicon, uncheckedradio, uploadicon, valid, warn } from "../assets/images";
import CloseIcon from '@mui/icons-material/Close';

export default function Orders() {
    const navigate = useNavigate();
    // for Password --------------------------------
    const [showPassword1, setShowPassword1] = React.useState(false);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleMouseDownPassword1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
    const [showPassword2, setShowPassword2] = React.useState(false);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
    const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };
//   for select option --------------------------
    const [age1, setAge1] = React.useState("");
    const [age2, setAge2] = React.useState("");
    const [age3, setAge3] = React.useState("");
  
    const handleChange1 = (event: SelectChangeEvent) => {
      setAge1(event.target.value as string);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
      setAge2(event.target.value as string);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
      setAge3(event.target.value as string);
    };
//   for snackbar ---------------------
      const [open1, setOpen1] = React.useState(true);
      const [open2, setOpen2] = React.useState(true);
      const [open3, setOpen3] = React.useState(true);
      const [open4, setOpen4] = React.useState(true);

      function snackbara() {
        const a: any = document.getElementById("alert-a");
        a.style.display = "none";
      }
      function snackbarb() {
        const b: any = document.getElementById("alert-b");
        b.style.display = "none";
      }
      function snackbarc() {
        const c: any = document.getElementById("alert-c");
        c.style.display = "none";
      }
      function snackbard() {
        const d: any = document.getElementById("alert-d");
        d.style.display = "none";
      }
  return (
    <Box className="main-container">
      <Sidebar />
      <Box className="wrapper-content">
        <Header />
        <Box className="main-page">
          <Typography variant="h3" marginBottom="30px">
            Orders
          </Typography>

          <Grid container spacing={3}>
              {/* page-heading
              ------------------------------------------------------------------------------------------------------------------- */}
             
              <Grid item xs={12} >
                <Box className="sticker user-page">
                  {/* One Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography variant='h5' className='page-head'>One Column</Typography>

                  <Grid container spacing={{xs:2, sm:3}}>
                    <Grid item xs={12}>
                      <TextField label="Name" variant="standard" type="text" autoFocus />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl variant="standard" fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Dropdown</InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          
                          value={age1}
                          onChange={handleChange1}
                          label="Dropdown"
                          fullWidth
                          className="user-select text"
                        >
                          <MenuItem value={10}>India</MenuItem>
                          <MenuItem value={7}>America</MenuItem>
                          <MenuItem value={8}>Africa</MenuItem>
                          <MenuItem value={9}>China</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        id="standard-multiline-static"
                        label="Textarea"
                        multiline
                        rows={3}
                        variant="standard"
                        className="textarea"
                      />
                    </Grid>
                  </Grid>
                  {/* Two Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography variant='h5' className='page-head'>Two Column</Typography>

                  <Grid container rowSpacing={3} columnSpacing={4}>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Name" variant="standard" type="text" />
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword1 ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword1}
                                onMouseDown={handleMouseDownPassword1}
                              >
                                {showPassword1 ? <Visibility />: <VisibilityOff />     }
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField label="Name" variant="standard" type="text"/>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          className='error-text'
                          error
                          fullWidth
                          id="outlined-error-helper-text"
                          label="Error"
                          defaultValue="Lorem Ipsum is simply dummy text"
                          variant="standard"
                          autoComplete="email"
                        />
                      </Box>
                    </Grid>
                  </Grid>

                  {/* Three Column
                  ------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h5" variant='h5' className='page-head'>Three Column</Typography>

                  <Grid container rowSpacing={3} columnSpacing={4}>
                  <Grid item xs={12} sm={4} >
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          className='error-text'
                          error
                          fullWidth
                          id="outlined-error-helper-text"
                          label="Error"
                          defaultValue="Lorem Ipsum is simply dummy text"
                          variant="standard"
                          autoComplete="email"
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        disabled
                        label="Disabled"
                        defaultValue="John Doe"
                        variant="standard"
                        className="disable-text"
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField label="Focus" variant="standard" type="text" />
                    </Grid>
                  </Grid>

                  {/* Fourth Column
                  ------------------------------------------------------------------------------------------------------------------- */}

                  <Typography variant='h5' className='page-head'>Four Column</Typography>

                  <Grid container rowSpacing={3} columnSpacing={4}>
                  <Grid item xs={12} sm={6} lg={3}>
                      <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                      >
                        <TextField
                          className='error-text'
                          error
                          fullWidth
                          id="outlined-error-helper-text"
                          label="Error"
                          helperText='Invalid Entry'
                          defaultValue="Lorem Ipsum is simply dummy text"
                          variant="standard"
                          autoComplete="email"
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField label="Designation" helperText='Helper Text'defaultValue='Managing Director' variant="standard" type="text" />
                    </Grid>
                    
                    <Grid item xs={12} sm={6} lg={3}>
                      <TextField label="Name" defaultValue='Anne Thurium' variant="standard" type="text" />
                    </Grid>

                    <Grid item xs={12} sm={6} lg={3}>
                      <FormControl variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                          id="standard-adornment-password"
                          type={showPassword2 ? 'text' : 'password'}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword2}
                                onMouseDown={handleMouseDownPassword2}
                              // edge='end'
                              >
                                {showPassword2 ?<Visibility />  :<VisibilityOff />  }
                              </IconButton>
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                  {/* Design elements starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h5" variant="h5" className="page-head">
                    Other Design Elements
                  </Typography>
                  <Typography component="h6" variant="h6" className=" file-upload page-subhead">
                    File Upload
                  </Typography>

                  <Stack direction="row" alignItems="center" spacing={2} className="upload-content">
                    <Button variant="outlined" component="label" className="upload-btn" >
                      <img src={uploadicon} alt="upload files" /> &nbsp; Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                    <Typography component="span" variant="body2" className=" nis">
                      No item Selected
                    </Typography>
                  </Stack>
                  <Typography component="h6" variant="h6" className="option-head page-subhead" marginTop="31px">
                    Check Box
                  </Typography>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                        color="primary"
                        icon={<Icon>{<img src={uncheckedicon} />}</Icon>}
                        checkedIcon={<Icon>{<img src={checkedicon} />}</Icon>}
                      />
                      }
                      label="Selected"
                    />&nbsp;&nbsp;&nbsp;
                    <FormControlLabel
                      control={
                        <Checkbox
                        color="primary"
                        icon={<Icon>{<img src={uncheckedicon} />}</Icon>}
                        checkedIcon={<Icon>{<img src={checkedicon} />}</Icon>}
                      />
                      }
                      label="Not yet Selected"
                    />
                  </Grid>
                  <Typography component="h6" variant="h6" className="option-head page-subhead" marginTop="38px">
                    Radio Button
                  </Typography>

                  <Grid item xs={12} >
                    <FormControl className="radio-check" >
                      <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        defaultValue="selected"
                      >
                        <FormControlLabel value="selected" control={<Radio
                            icon={<Icon>{<img src={uncheckedradio} />}</Icon>}
                            checkedIcon={
                              <Icon>{<img src={checkedradio} />}</Icon>
                            }
                          />} label="Selected" />&nbsp;&nbsp;&nbsp;
                        <FormControlLabel value="not yet selected" control={<Radio
                            icon={<Icon>{<img src={uncheckedradio} />}</Icon>}
                            checkedIcon={
                              <Icon>{<img src={checkedradio} />}</Icon>
                            }
                          />} label="Not yet Selected" />
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  {/* Snackbar starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h6" variant="h6" className="snackbar-head page-subhead" marginTop="31px">
                    Snackbar
                  </Typography>
                  <Grid container rowSpacing={3} columnSpacing={4} className="validation-notes">
                    <Grid item xs={12} md={6} onClick={snackbara} id="alert-a">
                      <Box >
                        <Collapse  in={open1} >
                          
                          <Alert className="text-danger" 
                            action={
                              <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen1(false);
                              }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            <img src={error} alt="" />
                            <Typography component="p" variant="body2" className='text-message error-message' >This is an error Message</Typography>
                          </Alert>
                        </Collapse>
                        
                      </Box>

                    </Grid>
                    <Grid item xs={12} md={6} onClick={snackbarb} id="alert-b">
                      <Box>
                        <Collapse in={open2}>
                          <Alert className="text-info"
                            id="box2"
                            action={
                              <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen2(false);
                              }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            <img src={info} alt="" />
                            <Typography component="p" variant="body2" className='text-message info-message'>This is an information message!</Typography>
                          </Alert>
                        </Collapse>
                      </Box>

                    </Grid>
                    <Grid item xs={12} md={6} onClick={snackbarc} id="alert-c">
                      <Box>
                        <Collapse in={open3}>
                          <Alert className="text-warn"
                            action={
                              <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen3(false);
                              }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            <img src={warn} alt="" />
                            <Typography component="p" variant="body2" className='text-message warn-message'>This is a warning message!</Typography>
                          </Alert>
                        </Collapse>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6} onClick={snackbard} id="alert-d">
                      <Box >
                        <Collapse in={open4}>
                          <Alert className="text-success"
                            action={
                              <IconButton
                              aria-label="close"
                              color="inherit"
                              size="small"
                              onClick={() => {
                                setOpen4(false);
                              }}
                              >
                                <CloseIcon fontSize="inherit" />
                              </IconButton>
                            }
                          >
                            <img src={valid} alt="" />
                            <Typography component="p" variant="body2" className='text-message valid-message'>This is an Success message!</Typography>
                          </Alert>
                        </Collapse>
                      </Box>
                    </Grid>
                  </Grid>
                    {/* CTA starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h6" variant="h6" className="cta page-subhead">
                    CTA
                  </Typography>
                  <Box className="prim-sec">
                    <Button type="submit" disableElevation variant="contained" className="primary-btn" onClick={() => { navigate("/"); }} >
                      Primary
                    </Button>
                    <Button type="submit" disableElevation variant="outlined" className="secondary-btn" onClick={() => { navigate("/"); }} >
                      Secondary
                    </Button>
                  </Box>
                  {/* Tabs starts
              ------------------------------------------------------------------------------------------------------------------------------- */}
                  <Typography component="h5" variant="h5" className="page-head">
                    Tabs
                  </Typography>
                  {/* <BasicTabs /> */}



                </Box>
              </Grid>

            </Grid>
        </Box>
      </Box>
    </Box>
  );
}
