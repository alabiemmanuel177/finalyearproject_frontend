import { Grid } from '@mui/material'
import React from 'react'
import AssignedCard from './Card';
import EmptyAssignment from '../../Student/Classroom Student/EmptyAssignment';
import { Skcourse } from '../../Skeleton Loader/dasboardMetrics';

export default function index({ assignments, isAssignments, empty }) {
  return (
    <> {isAssignments ? <Skcourse /> : <>{!empty ? (

      <div className='lecturer-assigned-list'>
        <Grid container spacing={2}>
          {assignments.map((p) => (
            <AssignedCard assignment={p} key={p._id} />
          ))}
        </Grid>
      </div>
    ) : (<EmptyAssignment />)}</>}
    </>
  )
}
