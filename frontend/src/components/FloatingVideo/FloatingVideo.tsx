import React from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import videoSrc from '../../assets/video/videoYoga.mp4'; 

const FloatingVideo: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true); 

  const handleClose = () => {
    setIsVisible(false); 
  };

  if (!isVisible) return null; 

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: '200px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
        zIndex: 1000, 
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: 4,
          right: 4,
          zIndex: 1001,
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
        }}
      >
        <CloseIcon />
      </IconButton>
      <video
        src={videoSrc}
        controls
        autoPlay
        style={{ width: '100%', borderRadius: '8px' }}
      >
      </video>
    </Box>
  );
};

export default FloatingVideo;
