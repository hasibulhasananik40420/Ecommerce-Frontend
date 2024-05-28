'use client'
import { Container,Stack,Box, Typography, Grid, TextField, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import login from "../../assets/login (2).png"
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const RegisterPage = () => {
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Container>

       <Stack sx={{height:'100vh', justifyContent:'center', alignItems:'center'}}>
           <Box sx={{maxWidth:'500px', width:'100%', boxShadow:1,borderRadius:1, p:6, textAlign:'center'}}>
                <Box sx={{width:"60px", height:'60px',margin: '10px auto'}}>
                  <Image src={login} alt='login icon'/>
                </Box>
                <Box>
                  <Typography variant="h3" fontSize={'30px'} fontWeight={700}>Please Register Here</Typography>
                </Box>

                 <Box>
                   <form >
                   <Grid spacing={2} my={3}>

                   <Grid item md={12} sm={12} my={2}>
                      <TextField label="Name" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Grid item md={12} sm={12}>
                      <TextField label="Email" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Grid item md={12} sm={12} my={2}>
                      <TextField label="Password" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Grid item md={12} sm={12} my={2}>
                      <TextField label="Phone" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>
                       <Grid item md={12} sm={12} my={2}>
                      <TextField label="Address" size="small" variant="outlined" fullWidth={true}/>
                      </Grid> 
                      
                      <Grid item md={12} sm={12} my={2}>
                      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
       fullWidth
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
                      </Grid>

                     

                  </Grid>
                    
                    <Button type="submit" fontWeight={600} fullWidth={true}>Register</Button>
                    
                    <Typography component="p" fontWeight="300" >Allready have an account ? <Link className="text-red-400 font-medium" href="/login">login</Link></Typography>
                 
                 
                   </form>
                 </Box>
           </Box>
       </Stack>

    </Container>
  )
}

export default RegisterPage