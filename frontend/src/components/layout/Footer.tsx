// frontend/src/components/layout/SimpleFooter.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: '100%',
      py: 2,
      px: 2,
      mt: 'auto',
      backgroundColor: '#474255',
      color: '#fff',
      textAlign: 'center',
    }}
  >
    <Typography variant="body2">
      © {new Date().getFullYear()} Your Company Name
    </Typography>
  </Box>
);

export default Footer;
