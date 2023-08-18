import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/muscle.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#c0c0c0">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '100px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="3px">Rogerinho 2023, learning!</Typography>
    <Typography variant='h6' textAlign={'center'} color={'white'} pb={'40px'} >rogeriohenriquelemos@gmail.com</Typography>
  </Box>
);

export default Footer;
