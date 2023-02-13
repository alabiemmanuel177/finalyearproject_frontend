import { Grid } from '@mui/material'
import React from 'react'
import AssignedCard from './Card';

export default function index() {
  return (
    <div className='lecturer-assigned-list'>
        <Grid container spacing={2}>
            <AssignedCard />
            <AssignedCard />
            <AssignedCard />
            <AssignedCard />
            <AssignedCard />
        </Grid>
    </div>
  )
}
