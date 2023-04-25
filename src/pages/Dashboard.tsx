import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { Box, Button, Grid, Menu, MenuItem, MenuProps, Typography, styled,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material'
import { cost, d_cost, d_datagraph, d_deals, d_profit, d_sale, d_tree, datagraph, deals, menuicon, profit, sale, tablemenu, tree, wallet } from '../assets/images'
import { useNavigate } from 'react-router-dom'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Theme from '../components/Theme'

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
}));

function createData(
  order: number,
  email: string,
  product: string,
  status: string,
  amount: string,
  action: string,
) {
  return { order, email,product, status, amount, action };
}

const rows = [
  createData(487441, 'vuhaithuongnute@gmail.com', 'Air Jordan 1 Top 3 Sneaker (DS) ', 'Delivered', "$1,024,692.00",  ''),
  createData(267400, 'trungkienspktnd@gamail.com', 'Macbook Pro 16 inch ', 'Cancel', "$1,057,664.00",  ''),
  createData(449003, 'binhan628@gmail.com', 'Dell Computer Monitor', 'Delivered', "$1,271,712.00",  ''),
  createData(449003, 'thuhang.nute@gmail.com', 'Coach Tabby 26 for sale', 'Delivered', "$1,057,664.00",  ''),
  createData(487441, 'ckctm12@gmail.com', 'iPad Pro 2017 Model', 'Delivered', "$1,024,692.00",  ''),
  createData(558612, 'manhhachkt08@gmail.com', "Lego Star'War edition", 'Delivered', "$1,102,803.00",  ''),
  createData(651535, 'tranthuy.nute@gmail.com', 'Coach Tabby 26 for sale', 'Delivered', "$1,117,453.00",  ''),
  createData(653518, 'thuhang.nute@gmail.com', 'DJI Mavic Pro 2', 'Delivered', "$1,024,692.00",  ''),
  createData(651535, 'danghoang87hl@gmail.com', 'Playstation 4 Limited Edition', 'Delivered', "$1,024,692.00",  ''),
  createData(267400, 'danghoang87hl@gmail.com', 'Coach Tabby 26 for sale', 'Delivered', "$1,314,768.00",  ''),
  createData(653518, 'nvt.isst.nute@gmail.com', 'DJI Mavic Pro 2', 'Delivered', "$1,267,693.00",  ''),
  createData(558612, 'tienlapspktnd@gmail.com', 'Air Jordan 1 Top 3 Sneaker (DS)', 'Delivered', "$1,024,692.00",  ''),
];
export default function Dashboard() {
  const navigate = useNavigate();
  
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  
  function low(s: any) {
    return s.toLowerCase();
  }
  return (
    <>
      <Box className='main-container'>
        {/* <Box className='sidebar-container'> */}
        <Sidebar />
        {/* </Box> */}
        <Box className='wrapper-content'>
          <Header />
          <Box className='main-page'>
            <Typography variant='h3' marginBottom={{xs:'15px', sm:'20px', md:'30px'}}>Dashboard</Typography>
            <Grid container spacing={{xs:2, sm:3, md:4}}>
              <Grid item xs={12} sm={6} lg={3}>
                <Box className='sticker top-card'>
                  <Box className='sticker-content'>
                    <img src={sale} alt="total-sale-image" className='card-icons' />
                    <img src={d_sale} alt="total-sale-image" className='d-card-icons' />
                    <Box className='card-data'>
                      <Typography component='span' variant='body2' >Total Sale</Typography>
                      <Typography component='p' variant='h2' >34,789</Typography>
                    </Box>
                  </Box>
                  <Typography variant='body2' component='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={3}>
                <Box className='sticker top-card'>
                  <Box className='sticker-content'>
                    <img src={tree} alt="total-sale-image" className='card-icons' />
                    <img src={d_tree} alt="total-sale-image" className='d-card-icons' />
                    <Box className='card-data'>
                      <Typography component='span' variant='body2' >Total Lead</Typography>
                      <Typography component='p' variant='h2' >54,899</Typography>
                    </Box>
                  </Box>
                  <Typography variant='body2' component='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={3}>
                <Box className='sticker top-card'>
                  <Box className='sticker-content'>
                    <img src={profit} alt="total-sale-image" className='card-icons' />
                    <img src={d_profit} alt="total-sale-image" className='d-card-icons' />
                    <Box className='card-data'>
                      <Typography component='span' variant='body2' >Total Profit</Typography>
                      <Typography component='p' variant='h2' >45,677</Typography>
                    </Box>
                  </Box>
                  <Typography variant='body2' component='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} lg={3}>
                <Box className='sticker top-card'>
                  <Box className='sticker-content'>
                    <img src={cost} alt="total-sale-image" className='card-icons' />
                    <img src={d_cost} alt="total-sale-image" className='d-card-icons' />
                    <Box className='card-data'>
                      <Typography component='span' variant='body2' >Total Cost</Typography>
                      <Typography component='p' variant='h2' >103,678</Typography>
                    </Box>
                  </Box>
                  <Typography variant='body2' component='p' >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
                </Box>
              </Grid>

              <Grid item xs={12} lg={8}>
                <Box className='sticker'>
                  <Box className='card-heading-line'>
                    <Typography variant='h6' className='card-subhead'>Total Cost</Typography>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      className="card-dots"
                      title='menu-btn'
                    >
                      <img src={menuicon} alt="menu" />
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="menu-list"
                    >
                      <MenuItem onClick={handleClose}>
                        Action
                      </MenuItem>
                      <MenuItem onClick={() => { navigate('/'); }} >
                        Logout
                      </MenuItem>
                    </StyledMenu>
                  </Box>
                  <img src={datagraph} alt="data-graph" className='img-fluid graph-img' />
                  <img src={d_datagraph} alt="data-graph" className='img-fluid d-graph-img' />
                </Box>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Box className='sticker'>
                  <Box className='card-heading-line'>
                    <Typography variant='h6' className='card-subhead'>Current Deals</Typography>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      className="card-dots"
                      title='menu-btn'
                    >
                      <img src={menuicon} alt="menu" />
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="menu-list"
                    >
                      <MenuItem onClick={handleClose}>
                        Action
                      </MenuItem>
                      <MenuItem onClick={() => { navigate('/'); }}>
                        Logout
                      </MenuItem>
                    </StyledMenu>
                  </Box>
                  <Typography variant='h4' component='h4' className='weekly-total' >$ 800,678</Typography>
                  <Typography variant='body2' component='span' display='block'>Used Balance Current deals</Typography>
                  <img src={deals} alt="weekly-graph" className='img-fluid weekly-img' />
                  <img src={d_deals} alt="weekly-graph" className='img-fluid d-weekly-img' />
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box className='sticker'>
                  <Box className='card-heading-line'>
                    <Typography variant='h6' className='card-subhead'>Recent Transaction</Typography>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? 'demo-customized-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      className="card-dots"
                      title='menu-btn'
                    >
                      <img src={menuicon} alt="menu" />
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      className="menu-list"
                    >
                      <MenuItem  onClick={handleClose}>
                        Action
                      </MenuItem>
                      <MenuItem onClick={() => { navigate('/'); }} >
                        Logout
                      </MenuItem>
                    </StyledMenu>
                  </Box>
                  
                  <TableContainer >
                      <Table className='table' size="small" aria-label="a dense table" >
                        <TableHead >
                          <TableRow>
                            <TableCell component="th" align="left">Order id</TableCell>
                            <TableCell component="th" align="left">Email ID</TableCell>
                            <TableCell component="th" align="left">Product Name</TableCell>
                            <TableCell component="th" align="left">Status</TableCell>
                            <TableCell component="th" align="left">amount</TableCell>
                            <TableCell component="th" align="center">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody >
                          {rows.map((row) => (
                            <TableRow
                              key={row.order}
                              sx={{ '&:last-child td, &:last-child th, .dark-theme &:last-child td, .dark-theme &:last-child th': { border: 0 } }}
                            >
                              <TableCell scope="row">{row.order}</TableCell>
                              <TableCell align="left">{row.email}</TableCell>
                              <TableCell align="left">{row.product}</TableCell>
                              <TableCell align="left">
                              <span className={`${low(row.status)}`}>
                              {row.status}
                              </span>
                              </TableCell>
                              <TableCell align="left">{row.amount}</TableCell>
                              <TableCell align="center">{
                                <Box>
                                  <IconButton
                                    aria-label="more"
                                    id="long-button"
                                    aria-controls={open3 ? 'long-menu' : undefined}
                                    aria-expanded={open3 ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleClick3}
                                    className='sales-menu'
                                    color='warning'
                                    title='menu-icon'
                                  >
                                    <img src={tablemenu} alt="menu-btn" />
                                  </IconButton>
                                  <StyledMenu
                                    id="demo-customized-menu"
                                    MenuListProps={{
                                      'aria-labelledby': 'demo-customized-button',
                                    }}
                                    anchorEl={anchorEl3}
                                    open={open3}
                                    onClose={handleClose3}
                                    className="menu-list"
                                  >
                                    <MenuItem onClick={handleClose3} disableRipple>
                                      Add more
                                    </MenuItem>
                                  </StyledMenu>
                                </Box>

                              }</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>
      </Box>
      <Theme />
    </>
  )
}
