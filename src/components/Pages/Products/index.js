import { Box, Button, Typography } from '@mui/material'
import { ArrowBackIosNew } from '@mui/icons-material'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sici from '../../../img/sic.jpeg'
import New from '../../../img/new.jpeg'
import Chic from '../../../img/download.jpeg'
import Neap from '../../../img/neop.jpeg'

export default function Products({ data }) {
  let { id } = useParams()
  const navigate = useNavigate()
  console.log(id)
  const pizza = data.filter((item) => {
    return item.id === +id
  })
  const backToOverviewPage = () => {
    navigate('/')
  }
  console.log(pizza)
  return (
    <Box sx={{ width: '100%' }}>
      <Box textAlign="left">
        <Button
          color="primary"
          variant="outlined"
          startIcon={<ArrowBackIosNew />}
          onClick={backToOverviewPage}
        >
          Go back
        </Button>

        {pizza.map((el) => {
          return (
            <Box my={5} mx={10}>
              <img
                src={
                  el.id === 1
                    ? Chic
                    : el.id === 2
                    ? Neap
                    : el.id === 3
                    ? New
                    : Sici
                }
                alt={el.img}
                width={400}
              />
              <Typography>name: {el.name}</Typography>
              <Typography>description: {el.desc}</Typography>
              <Typography>price: {el.price}$</Typography>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}
