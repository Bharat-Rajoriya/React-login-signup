import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast, Toaster } from "sonner"
import { Button } from "@/components/ui/button"
import {  Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel,} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  email: z.email(),
  password: z.string()
    .min(5, "Please enter at least 5 characters.")
    .max(32, "You can use maximum 32 characters."),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <>
    
        <Card className="w-full sm:max-w-md ">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Sing In</CardTitle>
        <CardDescription className="text-center">
          Please fill the below details for Sign In
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-email">
                    Email
                  </FieldLabel>
                 <Input
                    {...field}
                    id="form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Email Here!"
                    autoComplete="off"
                  />                  
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-password">
                    Passowrd
                  </FieldLabel>
                 <Input
                    {...field}
                    type="password"
                    id="form-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Password Here!"
                    autoComplete="off"
                  />                  
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Toaster theme="dark" position="top-right" />
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="submit" form="form-rhf-demo" onClick={() => toast("Details has been saved.")}>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
    
    </>
  )
}

export default LoginForm
