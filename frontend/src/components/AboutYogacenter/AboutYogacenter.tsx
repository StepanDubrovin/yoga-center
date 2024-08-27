import React from 'react';
import { Typography, Box, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const AboutYogacenter: React.FC = () => {
  return (
    <Box 
      sx={{ 
        padding: { xs: 2, sm: 4 }, 
        backgroundColor: '#fff', 
        maxWidth: '100%', 
        margin: '0 auto',  
        
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ fontWeight: 'bold', textAlign: 'center' }}
      >
        Почему именно Студия йоги "Гармония движения"?
      </Typography>
      
      <Divider sx={{ marginY: 3 }} />
      
      <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <Box sx={{ textAlign: 'center', marginBottom: 3, flex: '1 1 30%' }}>
          <HomeIcon sx={{ fontSize: 50, color: '#9370DB' }} />
          <Typography 
            variant="h6" 
            component="h3" 
             
            sx={{ color: '#9370DB', marginTop: 1 }}
          >
            Комфорт
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', marginBottom: 3, flex: '1 1 30%' }}>
          <SchoolIcon sx={{ fontSize: 50, color: '#9370DB' }} />
          <Typography 
            variant="h6" 
            component="h3" 
            
            sx={{ color: '#9370DB', marginTop: 1 }}
          >
            Квалификация инструкторов
          </Typography>
        </Box>

        <Box sx={{ textAlign: 'center', marginBottom: 3, flex: '1 1 30%' }}>
          <FitnessCenterIcon sx={{ fontSize: 50, color: '#9370DB' }} />
          <Typography 
            variant="h6" 
            component="h3" 
            
            sx={{ color: '#9370DB', marginTop: 1 }}
          >
            Укрепление здоровья
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutYogacenter;
