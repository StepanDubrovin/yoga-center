import React from 'react';
import { Typography, Box, Divider } from '@mui/material';

const AboutYogacenter: React.FC = () => {
  return (
    <Box 
      sx={{ 
        padding: { xs: 2, sm: 4 }, 
        background: 'linear-gradient(to bottom, #E6E6FA, #D8BFD8)', 
        maxWidth: '100%', 
        margin: '0 auto',  
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography 
        variant="h4" 
        component="h2" 
        gutterBottom 
        sx={{ fontWeight: 'bold', color: '#4B0082', textAlign: 'center' }}
      >
        Почему именно Студия йоги "Гармония движения"?
      </Typography>
      
      <Divider sx={{ marginY: 3 }} />
      
      <Box sx={{ marginBottom: 3 }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom 
          sx={{ color: '#4B0082' }}
        >
          1. Комфорт.
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom 
          sx={{ color: '#483D8B' }}
        >
          Большое, светлое, уютное пространство с панорамными окнами, из которых открывается прекрасный вид.
        </Typography>
      </Box>

      <Box sx={{ marginBottom: 3 }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom 
          sx={{ color: '#4B0082' }}
        >
          2. Квалификация инструкторов.
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom 
          sx={{ color: '#483D8B' }}
        >
          Наши инструкторы, которые с любовью и большой погруженностью относятся к своему делу, постоянно обучаются и повышают свою квалификацию для безопасных, правильных и эффективных занятий.
        </Typography>
      </Box>

      <Box>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom 
          sx={{ color: '#4B0082' }}
        >
          3. Укрепление физического здоровья, гармония души и тела.
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ color: '#483D8B' }}
        >
          Систематические занятия в нашей студии способствуют значительному укреплению физических показателей вашего тела, развивается гибкость, сила, координация, мышцы приобретают тонус. Вы научитесь правильно дышать и расслабляться, что немаловажно для гармонии души и тела.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutYogacenter;
