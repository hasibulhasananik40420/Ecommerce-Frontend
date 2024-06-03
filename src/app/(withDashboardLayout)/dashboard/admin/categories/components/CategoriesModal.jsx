import { Button, Grid } from "@mui/material"
import ReuseForm from "../../../../../../components/ReuseForms/ReuseForm"
import CustomModal from "../../../../../../components/shared/CustomModal/CustomModal"
import ReuseInputField from "../../../../../../components/ReuseForms/ReuseInputField"
import ReuseInputFile from "../../../../../../components/ReuseForms/ReuseInputFile"
import { useCreateCategoriesMutation } from "../../../../../../redux/api/categoriesApi"
import { modifyPayload } from "../../../../../../util/modifyPayload"
import { toast } from "sonner"


const CategoriesModal = ({open,setOpen}) => {

     const [createCategories] = useCreateCategoriesMutation()
    //  console.log(createCategories)
     
    const handleCatgories =async(values)=>{
        // console.log(values)
          const data = modifyPayload(values)
         
          
         try {
            const res = await createCategories(data).unwrap()
            console.log(res)
             if(res?.success){
               toast.success(res?.message, { duration: 2000 });
               setOpen(false)
             }
             else{
               toast.error(res?.message, { duration: 2000 });
             }
          } catch (error) {
            console.log(error)
         }
    }


  return (
     <CustomModal open={open} setOpen={setOpen} title="Create Categories For Products">
         <ReuseForm onSubmit={handleCatgories}>

            <Grid container spacing={2}>

                <Grid item md={12} sm={12}>
                     <ReuseInputField name='name' fullWidth={true} size='small' label='Categories name'/>
                </Grid> 
                <Grid item md={12} sm={12}>
                     <ReuseInputFile name='file' label='Upload File' sx={{width:'100%'}}/>
                </Grid>

            </Grid>

            <Button type='submit' fullWidth sx={{marginTop:'14px'}}>
              Create Categories
            </Button>

         </ReuseForm>
     </CustomModal>
  )
}

export default CategoriesModal