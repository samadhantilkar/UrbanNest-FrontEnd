import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { email } from "zod";

function SignUp(){
    const form=useForm({
        defaultValues:{
            name:"sa",
            email:"",
            password:""
        }
    });

    const onSubmit=(data)=>{
        console.log("Got the data... ",data)
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-8 space-y-5">
                    <FormField control={form.control} name="name" render={({field})=>(
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input  {...field} className="h-10 rounded"/> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>

                    <FormField control={form.control} name="email" render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" {...field} className="h-10 rounded"/> 
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                    )}/>

                    <FormField control={form.control} name="password" render={({field})=>(
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" {...field} className="h-10 rounded"/> 
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>

                    <Button type="submit" className="w-full h-10" aria-label="Create a new Account">
                        Create New Account
                    </Button>
                </form>
            </Form>

            <div className="flex items-center justify-center mt-6">
                <span className="text-sm ">
                    Already have an account? {" "}
                    {/* TODO: replace with Link */}
                    <a className="text-primary hover:underline" href="">Sign in</a>
                </span>
            </div>
        </>
    )
}
export default SignUp;