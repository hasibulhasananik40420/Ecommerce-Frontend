"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import ProductsModal from "./components/page"
import { useState } from "react";


const CreateProducts = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
    <Stack direction='row' justifyContent='space-between' alignItems='center'>
         <Button onClick={()=>setIsModalOpen(true)}>Create Products</Button>
          <ProductsModal open={isModalOpen} setOpen={setIsModalOpen}/>
         <TextField size='small'  placeholder='Search products' variant="outlined" />
    </Stack>
 </Box>
  )
}

export default CreateProducts