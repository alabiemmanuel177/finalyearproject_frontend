import React from 'react'
import { Button, Card, CardActions, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { BsRecordCircleFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import moment from 'moment';

export default function AssignedCards({ assignment }) {
  const momentObj = moment(assignment.dueDate)
  const date = momentObj.format('Do MMM'); // get the date string in the format of "YYYY-MM-DD"
  const time = momentObj.format('HH:mm');

  return (
    <Grid item xs={5} md={3}>
      <NavLink to={`/lecturerdoassignment/${assignment._id}`}>
        <Card className='assignmentCard'>
          <CardHeader
            sx={{ padding: '10px 20px 10px 10px', position: 'relative' }}
            action={
              <BsRecordCircleFill style={{ color: '#0A3697', position: 'relative', fontSize: '22px' }} />
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
          <CardContent sx={{ padding: '0px 10px' }}>
            <Typography variant="body1" sx={{ fontWeight: 'bold', margin: '5px 0px' }} component='div'>
              {`${assignment.courseId.courseabrev}: ${assignment.title}`}
            </Typography>
            <Typography variant={'body2'} sx={{ color: 'grey' }} className="assignmentDesc">
              {assignment.description}
            </Typography>
          </CardContent>
          <CardActions sx={{ padding: '12px 4px' }}>
            <Button sx={{ color: 'gray', textTransform: 'none' }}>Due, {date} •&nbsp; <span style={{ color: '#0A3697', fontWeight: 'bold' }}>{time}</span></Button>
          </CardActions>
        </Card>
      </NavLink>
    </Grid>
  )
}
