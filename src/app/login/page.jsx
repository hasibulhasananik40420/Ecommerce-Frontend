"use client";
import {
  Container,
  Stack,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import login from "../../assets/login (2).png";
import { useForm } from "react-hook-form";
import { userLogin } from "../../services/actions/userLogin";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "../../services/authServices";
import ReuseForm from "../../components/ReuseForms/ReuseForm";
import ReuseInputField from "../../components/ReuseForms/ReuseInputField";

const LoginPage = () => {
  const router = useRouter();

 
  const handleLogin = async (values) => {
    try {
      const res = await userLogin(values);
      if (res?.success) {
        toast.success(res?.message, { duration: 2000 });
        storeUserInfo(res?.payload?.userWithoutPassword);
        router.push("/");
      } else {
        toast.error(res?.message, { duration: 2000 }); // Show error message from backend response
      }
    } catch (err) {
      console.error(err.message);
    }
    // console.log(data)
  };

  return (
    <Container>
      <Stack
        sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 6,
            textAlign: "center",
          }}
        >
          <Box sx={{ width: "60px", height: "60px", margin: "10px auto" }}>
            <Image src={login} alt="login icon" />
          </Box>
          <Box>
            <Typography variant="h3" fontSize={"30px"} fontWeight={700}>
              Please Login Here
            </Typography>
          </Box>

          <Box>
            <ReuseForm onSubmit={handleLogin}>
              <Grid spacing={2} my={3}>
                <Grid item md={12} sm={12}>
                  <ReuseInputField name='email' label='Email' type='email' size='small' fullWidth={true} />
                </Grid>

                <Grid item md={12} sm={12} my={2}>
                <ReuseInputField name='password' label='Password' type='password' size='small' fullWidth={true} />

                </Grid>

                <Typography
                  component="p"
                  fontWeight="300"
                  textAlign="end"
                  color="red"
                >
                  {" "}
                  Forget Password{" "}
                </Typography>
              </Grid>

              <Button type="submit" fontWeight={600} fullWidth={true}>
                Login
              </Button>

              <Typography component="p" fontWeight="300" my={1}>
                Don&apos;t have an account ?{" "}
                <Link
                  className="text-red-500 font-medium text-[16px]"
                  href="/register"
                >
                  Register
                </Link>
              </Typography>
            </ReuseForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
