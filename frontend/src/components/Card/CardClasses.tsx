import * as React from 'react';
import { styled, Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Box, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/store'
import CloseIcon from '@mui/icons-material/Close'

const StyledCard = styled(Card)({
  width: 330,
  height: 630,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  
  padding: '15px',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


const CardClasses: React.FC = () => {
  

  const [open, setOpen] = React.useState(false);
  const [selectedDescription, setSelectedDescription] = React.useState('');
  const [selectedBenefits, setSelectedBenefits] = React.useState<string[]>([]);
  const [selectedImageModal, setselectedImageModal] = React.useState('')

  const classes = useSelector((state: RootState) => state.classes.classes)

  const handleOpen = (description: string, benefits: string[], imageModal: string) => {
    setSelectedDescription(description);
    setSelectedBenefits(benefits);
    setselectedImageModal(imageModal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedDescription('');
    setSelectedBenefits([]);
  };

  return (
    <>
      <Grid container spacing={1} sx={{ marginTop: '65px' }}>
        {classes.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} sx={{ padding: '15px' }}>
            <StyledCard>
              <CardMedia sx={{width: '300px', height: '450px'}}
                component="img" 
                src={card.image}
                alt={card.title}
              />
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
              </StyledCardContent>
              <CardActions>
                <Button
                  variant="contained"
                  sx={{ bgcolor: '#9370DB', color: '#fff', marginTop: 'auto', '&:hover': { backgroundColor: '#7A5DC7' } }}
                  onClick={() => handleOpen(card.description, card.benefits, card.imageModal)}
                >
                  Узнать больше
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{...modalStyle, position: 'relative'}}>
          <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute', 
            top: 8,
            right: 8,
            color: 'grey'
          }}
          >
              <CloseIcon/>
          </IconButton>
          <Typography id="modal-title" variant="h6" component="h2">
            Описание
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            {selectedDescription}
          </Typography>
          {selectedBenefits.length > 0 && (
            <>
              <Typography variant="h6" component="h3" sx={{ mt: 2 }}>
                Преимущества
              </Typography>
              <ul>
                {selectedBenefits.map((benefit, index)  => (
                  <li key={index}>
                    <Typography variant="body2">{benefit}</Typography>
                  </li>
                ))}
              </ul>
             
              
            </>
          )}
          {selectedImageModal && (
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              mt: 2 }}>
            <img 
              src={selectedImageModal} 
              alt='nidra'
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                objectFit: 'contain' 
              }}
            />
          </Box>
          )}
        </Box>
        
      </Modal>
    </>
  );
};

export default CardClasses;
