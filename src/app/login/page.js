import { Container,Stack,Box, Typography, Grid, TextField, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import login from "../../assets/login (2).png"
const LoginPage = () => {
  return (
    <Container>

       <Stack sx={{height:'100vh', justifyContent:'center', alignItems:'center'}}>
           <Box sx={{maxWidth:'500px', width:'100%', boxShadow:1,borderRadius:1, p:6, textAlign:'center'}}>
                <Box sx={{width:"60px", height:'60px',margin: '10px auto'}}>
                  <Image src={login} alt='login icon'/>
                </Box>
                <Box>
                  <Typography variant="h3" fontSize={'30px'} fontWeight={700}>Please Login Here</Typography>
                </Box>

                 <Box>
                   <form >
                   <Grid spacing={2} my={3}>
                      <Grid item md={12} sm={12}>
                      <TextField label="Email" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Grid item md={12} sm={12} my={2}>
                      <TextField label="Password" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Typography component="p" fontWeight="300" textAlign="end" color="red"> Forget Password </Typography>

                  </Grid>
                    
                    <Button type="submit" fontWeight={600} fullWidth={true}>Login</Button>
                    
                    <Typography component="p" fontWeight="300" my={1} >Don&apos;t have an account ? <Link className="text-red-500 font-medium text-[16px]" href="/register">Register</Link></Typography>
                 
                 
                   </form>
                 </Box>
           </Box>
       </Stack>

    </Container>
  )
}

export default LoginPage