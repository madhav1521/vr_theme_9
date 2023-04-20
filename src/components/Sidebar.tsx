import React from 'react'
import { Box, Typography } from "@mui/material";
import { NavLink } from 'react-router-dom'
import { brandlogosmall, cards, cardsnew, dashboard, dashboardnew, invoices, invoicesnew, orders, ordersnew, setting, settingnew, transaction, transactionnew, wallet, walletnew } from '../assets/images';

export default function Sidebar() {
  function togglebtn() {
    document.body.classList.toggle('setStatus')
  };
  return (
    <Box className='sidebar'>
      <Box className="brand-logo"><NavLink to='/' title="brand-logo" > <img src={brandlogosmall} alt=""  /></NavLink></Box>
      <div>
      <NavLink to="/dashboard" className="sidelinks" title="Dashboard" onClick={togglebtn}>
        <img src={dashboard} alt="" className="default" />
        <img src={dashboardnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Dashboard</Typography>
      </NavLink>
      <NavLink to="/orders" className="sidelinks" title="Orders" onClick={togglebtn}>
        <img src={orders} alt="" className="default" />
        <img src={ordersnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Orders</Typography>
      </NavLink>
      <NavLink to="/invoices" className="sidelinks" title="Invoices" onClick={togglebtn}>
        <img src={invoices} alt="" className="default" />
        <img src={invoicesnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Invoices</Typography>
      </NavLink>
      <NavLink to="/cards" className="sidelinks" title="Cards" onClick={togglebtn}>
        <img src={cards} alt="" className="default" />
        <img src={cardsnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Cards</Typography>
      </NavLink>
      <NavLink to="/transaction" className="sidelinks" title="Transaction" onClick={togglebtn}>
        <img src={transaction} alt="" className="default" />
        <img src={transactionnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Transaction</Typography>
      </NavLink>
      <NavLink to="/balances" className="sidelinks" title="Balances" onClick={togglebtn}>
        <img src={wallet} alt="" className="default" />
        <img src={walletnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Balances</Typography>
      </NavLink>
      <NavLink to="/setting" className="sidelinks" title="Setting" onClick={togglebtn}>
        <img src={setting} alt="" className="default" />
        <img src={settingnew} alt="" className="active-img" />
        <Typography component='p' className="text-default">Setting</Typography>
      </NavLink>
      </div>
    </Box>
  )
}
