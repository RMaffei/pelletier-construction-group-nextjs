import {Box, Button, Stack, Typography} from "@mui/material";
import Footer from '../components/Footer';
import Link from "next/link";

export default function Home() {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: "100vh", backgroundColor: "white", color: "black" }}>
    <Stack>
      <Box margin="auto" textAlign={"center"} justifyContent={"center"} sx={{ paddingTop: "120px", backgroundColor:"white" }}>
        <Typography component="h1" variant="h4" sx={{ pb: 4 }}>
          Seattle&apos;s Premier DADU Specialists
        </Typography>
        <Typography>
          <Link href="tel:+19078417274" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              (907) 841-7274
            </Box>
          </Link>
        </Typography>
        <Typography>
          <Link href="mailto:ryan@pelletier.construction" passHref>
            <Box component="a" sx={{ color: "inherit", textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
              ryan@pelletier.construction
            </Box>
          </Link>
        </Typography>
        <Button variant="contained" color="primary" href="/contact" sx={{ mt: 3, fontSize: "1.2rem", width: "200px", height: "50px" }}>
          Contact Us
        </Button>
      </Box>
    </Stack>    
    <Footer />
    </Box>
  )
}