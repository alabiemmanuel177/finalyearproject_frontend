import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { BsRecordCircleFill } from 'react-icons/bs'

export default function AssignedCards() {
  return (
    <Grid item xs={5} md={3}>
        <Card>
            <CardHeader
                sx={{ padding: '10px 20px 10px 10px', position: 'relative' }}
                action={
                  <BsRecordCircleFill style={{ color: '#0A3697', position: 'relative', fontSize: '22px' }}/>
                }
                title={<h6 
                          style={{ 
                          margin: '0', 
                          color: 'gray', 
                          borderRadius: '10px', 
                          width: 'fit-content',
                          backgroundColor: '#d3d3d36b', 
                          padding: '5px 10px', 
                          fontSize: '10px' 
                        }}
                      >10 marks</h6>
                    }
            />
            <CardContent sx={{ padding: '0px 10px'}}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', margin: '5px 0px' }} component='div'>
                SENG 302: Assignment 1
              </Typography>
              <Typography variant={'body2'} sx={{color: 'grey'}}>
                Can you write about the Oracle database 12C Multitenant architecture?
              </Typography>
            </CardContent>
            <CardActions sx={{padding: '12px 4px'}}>
              <Button sx={{ color: 'gray', textTransform: 'none' }}>Due, Dec 8 •&nbsp; <span style={{color: '#0A3697', fontWeight: 'bold'}}>{' '}8:00pm</span></Button>
            </CardActions>
        </Card>
    </Grid>
  )
}
