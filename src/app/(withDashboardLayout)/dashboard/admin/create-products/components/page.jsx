"use client"

import { Button, Grid } from "@mui/material";
import ReuseForm from "../../../../../../components/ReuseForms/ReuseForm";
import FullScreenProductsModal from "../../../../../../components/shared/CustomModal/FullScreenProductsModal";
import ReuseInputField from "../../../../../../components/ReuseForms/ReuseInputField";
import ReuseInputFile from "../../../../../../components/ReuseForms/ReuseInputFile";
import ReuseSelectField from "../../../../../../components/ReuseForms/ReuseSelectField";
import { useCreateCategoriesMutation, useGetAllCategoriesQuery } from "../../../../../../redux/api/categoriesApi";
import { modifyPayload } from "../../../../../../util/modifyPayload";

const ProductsModal = ({ open, setOpen }) => {

    const {data:categories, isLoading} = useGetAllCategoriesQuery({})
    // console.log(data)
    
    //   create api
     const [createProduct] = useCreateCategoriesMutation()

     const handleCreateProduct =async(values)=>{
        // console.log(values)
        const modifyData = modifyPayload(values)
        try {
           const res = await createProduct(modifyData).unwrap()
           console.log(res)

        }
        catch(error){
          console.log(error.message)
        }
     }







     const categoryOptions = categories?.payload?.map(category => ({
        id: category._id,
        name: category.name
      })) || [];








  return (
    <FullScreenProductsModal
      open={open}
      setOpen={setOpen}
      title="Create a product"
    >
      <ReuseForm onSubmit={handleCreateProduct}>
        <Grid container spacing={2}>


          <Grid item md={6} sm={12} xs={12}>
            <ReuseInputField
              name="name"
              fullWidth={true}
              size="small"
              label="Product name"
            />
            
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <ReuseInputField
              name="price"
              type='number'
              fullWidth={true}
              size="small"
              label="Product price"
            />
            
          </Grid>


          <Grid item md={6} sm={12} xs={12}>
            <ReuseInputField
              name="quantity"
              type='number'
              fullWidth={true}
              size="small"
              label="Product quantity"
            />
            
          </Grid>



         <Grid item md={6} sm={12} xs={12}>
            <ReuseInputField
              name="shipping"
              type='number'
              fullWidth={true}
              size="small"
              label="Product shipping"
            />
            
          </Grid>

            <Grid item md={6} sm={12} xs={12}>
            <ReuseInputField
              name="sold"
               type='number'
              fullWidth={true}
              size="small"
              label="Product sold"
            />
            
          </Grid>

          <Grid item md={6} sm={12}>
            <ReuseInputFile
              name="file"
              label="Upload File"
              sx={{ width: "100%" }}
            />
          </Grid>



        <Grid item md={12} sm={12} xs={12}>
            <ReuseInputField
              name="description"
              fullWidth={true}
              sx={{ height: 100 }}
            //   size="small"
              label="Product description"
            />
            
          </Grid>

           <Grid item md={6} sm={12} xs={12}>
            <ReuseSelectField
              name="category"
              options={categoryOptions}
              fullWidth={true}
            //    size='small',
              label="Product category"
               sx={{width:'100%'}}
            />
            
          </Grid>




        

           <Grid item md={12} sm={12}>
           <Button type="submit" fullWidth>Create Product</Button>
          </Grid>

          
        </Grid>
      </ReuseForm>
    </FullScreenProductsModal>
  );
};

export default ProductsModal;
