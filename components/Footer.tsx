import React from 'react';
import { Box, Typography, Grid, Stack, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        py: 2,
        px: 2,
        mt: "auto",
        textAlign: "center"
      }}
    >
      <Stack direction="column" width="30%" margin="auto" justifyContent="center">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="http://www.facebook.com/pelletierconstruction/" passHref
          target="_blank" 
          rel="noopener noreferrer" 
          color="inherit" 
          >
            <IconButton aria-label="Facebook" sx={{ color: "inherit" }}>
                <FacebookIcon />
            </IconButton>
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="https://www.google.com/maps/search/?api=1&query=1150%20North%2084th%20Street%2C%20Seattle%2C%20WA%2098103" passHref
            target="_blank" 
            rel="noopener noreferrer" 
            color="inherit" 
            >
                <IconButton aria-label="Map" sx={{ color: "inherit" }}>
                    <LocationOnIcon />
                </IconButton>
                1150 North 84th Street, Seattle, WA 98103
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="tel:+19078417274" passHref color="inherit">
            <IconButton aria-label="Phone" sx={{ color: "inherit" }}>
                <PhoneIcon />
            </IconButton>
            (907) 841-7274
          </Link>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link href="mailto:ryan@pelletier.construction" passHref color="inherit">
            <IconButton aria-label="Email" color="inherit">
                <EmailIcon />
            </IconButton>
            ryan@pelletier.construction
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;