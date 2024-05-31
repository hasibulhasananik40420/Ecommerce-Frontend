'use client'

import { Container,Stack,Box, Typography, Grid, TextField, Button } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import login from "../../assets/login (2).png"
import ReuseInputFile from "../../components/ReuseForms/ReuseInputFile"
import ReuseForm from "../../components/ReuseForms/ReuseForm"
import { registerUser } from "../../services/actions/RegisterUser"
import ReuseInputField from "../../components/ReuseForms/ReuseInputField"
import { modifyPayload } from "../../util/modifyPayload"
import { toast } from "sonner"

const RegisterPage = () => {
  // const router = useRouter();


  const handleRegister = async (values) => {
      const data = modifyPayload(values)
    // console.log(data)
    try {
       const res = await registerUser(data)
        if(res?.success){
          toast.success(res?.message, { duration: 5000 });
          
        }
        else{
          toast.error(res?.message, { duration: 2000 }); // Show error message from backen response

        }
      //  console.log(res)

      
     
    } catch (err) {
      
      toast.error(err?.message, { duration: 2000 }); // Show error message from backen response
    }
    // console.log(data)
  };


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
                   <ReuseForm onSubmit={handleRegister}>
                   <Grid spacing={2} my={3}>

                     <Grid item md={12} sm={12} my={2}>
                     <ReuseInputField name='name' label='Name' type='text' size='small' fullWidth={true} />
                      </Grid>

                      <Grid item md={12} sm={12}>
                      <ReuseInputField name='email' type='email' label="Email" size="small" variant="outlined" fullWidth={true}/>
                      </Grid>

                      <Grid item md={12} sm={12} my={2}>
                      <ReuseInputField name='password' label='Password' type='password' size='small' fullWidth={true} />
                      </Grid>

                      <Grid item md={12} sm={12} my={2}>
                      <ReuseInputField name='phone' label='Phone' type='text' size='small' fullWidth={true} />
                      </Grid>
                       <Grid item md={12} sm={12} my={2}>
                       <ReuseInputField name='address' label='Address' type='text' size='small' fullWidth={true} />                      </Grid> 
                      
                      <Grid item md={12} sm={12} my={2}>

                      <ReuseInputFile name='file' label='File Upload' fullWidth={true}  sx={{ width:'100%'}}/>
                      </Grid>


                  </Grid>
                    
                    <Button type="submit" fontWeight={600} fullWidth={true}>Register</Button>
                    
                    <Typography component="p" fontWeight="300" >Allready have an account ? <Link className="text-red-400 font-medium" href="/login">login</Link></Typography>
                 
                 
                   </ReuseForm>
                 </Box>
           </Box>
       </Stack>

    </Container>
  )
}

export default RegisterPage