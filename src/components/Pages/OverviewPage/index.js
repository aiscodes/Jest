import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function OverviewPage({ data }) {
  console.log(data)
  const renderButton = data.map((item, index) => {
    return (
      <NavLink to={`details/${item.id}`} key={index}>
        <Button variant="contained" sx={{ margin: '10px' }}>
          {item.name}
        </Button>
      </NavLink>
    )
  })
  return (
    <Box my={'5rem'} mx={'auto'}>
      <Typography sx={{ marginBottom: 10 }}>CHOOSE A PIZZA</Typography>
      {renderButton}
    </Box>
  )
}
