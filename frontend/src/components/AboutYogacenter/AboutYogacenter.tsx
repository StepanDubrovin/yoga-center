import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const AboutYogacenter: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 4 },
        backgroundColor: '#fff', 
        maxWidth: '100%',
        margin: '0 auto',
        
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 'bold', textAlign: 'center', color: 'black' }} 
      >
        Почему именно Студия йоги "Гармония движения"
      </Typography>

      <Divider sx={{ marginY: 3, borderColor: '#9370DB' }} /> 

      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        {[
          { icon: <HomeIcon />, title: 'Комфорт' },
          { icon: <SchoolIcon />, title: 'Квалификация инструкторов' },
          { icon: <FavoriteBorderIcon />, title: 'Укрепление здоровья' },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              textAlign: 'center',
              marginBottom: 3,
              padding: 2,
              flex: '1 1 30%',
              maxWidth: '250px',
              backgroundColor: '#fff', 
              borderRadius: 2,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
              transition: 'transform 0.3s, box-shadow 0.3s', 
              '&:hover': {
                transform: 'translateY(-5px)', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
              },
            }}
          >
            {React.cloneElement(item.icon, { sx: { fontSize: 50, color: '#9370DB' } })} 
            <Typography
              variant="h6"
              component="h3"
              sx={{ color: '#9370DB', marginTop: 1 }} 
            >
              {item.title}
            </Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ marginY: 3, borderColor: '#9370DB' }} />
    </Box>
  );
};

export default AboutYogacenter;
