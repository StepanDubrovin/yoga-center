import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store'

interface ClassDetails {
  time: string;
  type: string;
}

const ScheduleTable: React.FC = () => {
 
  const schedule = useSelector((state: RootState) => state.schedule.schedule);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, marginTop: '70px', }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {Object.keys(schedule).map(day => (
              <TableCell key={day} align="center">
                <Typography variant="h6">{day}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.keys(schedule).map(day => (
              <TableCell key={day} align="center" sx={{ verticalAlign: 'top', paddingRight: '25px' }}>
                {schedule[day].map((classDetail: ClassDetails, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      backgroundColor: '#E6E6FA',
                      color: 'black',
                      padding: '25px',
                      borderRadius: '10px',
                      marginBottom: '50px',
                      width: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '30px',
                    }}
                  >
                    <Typography>{classDetail.time}</Typography>
                    <Typography>{classDetail.type}</Typography>
                  </Box>
                ))}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ScheduleTable;
