import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

const StyledBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  maxWidth: '100%',
  margin: '0 auto',
  textAlign: 'left',
  boxShadow: theme.shadows[3],
}));

const ItemBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

const Contacts: React.FC = () => {
  return (
    <StyledBox>
      <Typography variant="h4" component="h2" gutterBottom sx={{textAlign: 'center'}}>
        Контакты
      </Typography>
      <ItemBox>
        <LocationOnIcon fontSize="large" sx={{ color: '#9370DB', marginRight: 2 }} />
        <Box>
          <Typography variant="h6" component="h3">
            Адрес:
          </Typography>
          <Typography variant="body1">
            Тюмень, Спасская улица, 14
          </Typography>
        </Box>
      </ItemBox>
      <ItemBox>
        <PhoneIcon fontSize="large" sx={{ color: '#9370DB', marginRight: 2 }} />
        <Box>
          <Typography variant="h6" component="h3">
            Телефон:
          </Typography>
            <Typography variant="body1">
            <a href="tel:+79120770429" style={{ textDecoration: 'none', color: 'inherit' }}>
              +7 (912) 077-04-29
            </a>
          </Typography>
          <Typography variant="body1">
            <a href="tel:+79222694969" style={{ textDecoration: 'none', color: 'inherit' }}>
              +7 (922) 269-49-69
            </a>
          </Typography>
        </Box>
      </ItemBox>
      
    </StyledBox>
  );
};

export default Contacts;
