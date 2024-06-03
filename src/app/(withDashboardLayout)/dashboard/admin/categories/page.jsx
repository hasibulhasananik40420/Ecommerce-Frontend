"use client"
import { Box, Button, Stack, TextField } from "@mui/material"
import CategoriesModal from "./components/CategoriesModal"
import { useState } from "react";

const CreateCategories = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <Box>
       <Stack direction='row' justifyContent='space-between' alignItems='center'>
            <Button onClick={()=>setIsOpenModal(true)}>Create Categories</Button>
             <CategoriesModal open={isOpenModal} setOpen={setIsOpenModal}/>
            <TextField size='small'  placeholder='Search Categories' variant="outlined" />
       </Stack>
    </Box>
  )
}

export default CreateCategories