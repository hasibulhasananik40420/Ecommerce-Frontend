import { useForm, FormProvider, useFormContext } from "react-hook-form"


const ReuseForm = ({children,onSubmit}) => {
    const methods = useForm()

    const submit = (data) => {
         onSubmit(data)
        // console.log(data)
    }
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(submit)}>
      {children}
      </form>
    </FormProvider>
  )
}

export default ReuseForm