import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store';
import YogaIcon from '@mui/icons-material/SelfImprovement'; 



interface ClassDetails {
  time: string;
  type: string;
}

const ScheduleTable: React.FC = () => {
  const schedule = useSelector((state: RootState) => state.schedule.schedule);

  
  const dayIcons = {
    Понедельник: <YogaIcon fontSize="large" />,
    Вторник: <YogaIcon fontSize="large" />,
    Среда: <YogaIcon fontSize="large" />,
    Четверг: <YogaIcon fontSize="large" />,
    Пятница: <YogaIcon fontSize="large" />,
    Суббота: <YogaIcon fontSize="large" />,
  };

  return (
    <Box sx={{ textAlign: 'center', marginTop: '80px' }}>
      
      <Grid container spacing={5} justifyContent="center">
        {Object.keys(schedule).map((day) => (
          <Grid item key={day} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {dayIcons[day as keyof typeof dayIcons]} {/* Иконка для дня */}
              <Typography variant="h6" sx={{ fontWeight: 'bold', margin: '10px 0' }}>
                {day}
              </Typography>
              {schedule[day].map((classDetail: ClassDetails, index: number) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: '#E6E6FA',
                    padding: '10px',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    width: '200px',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {classDetail.time}
                  </Typography>
                  <Typography variant="body2">{classDetail.type}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScheduleTable;
