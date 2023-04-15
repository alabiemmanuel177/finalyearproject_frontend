import { Grid } from '@mui/material'
import React from 'react'
import AssignedCard from './Card';

export default function index({ assignments }) {
  return (
    <div className='lecturer-assigned-list'>
      <Grid container spacing={2}>
        {assignments.map((p) => (
          <AssignedCard assignment={p} key={p._id} />
        ))}
      </Grid>
    </div>
  )
}
