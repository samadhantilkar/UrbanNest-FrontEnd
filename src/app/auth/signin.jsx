import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { email } from "zod";
import { fa } from "zod/v4/locales/index.cjs";

function SignIn(){
    const [showPassword,setShowPassword]=useState(false)
    const form=useForm({
        defaultValues:{
            name:"sa",
            email:"",
            password:""
        }
    });

    const handleHidePassword=(e)=>{
        e.preventDefault();
        setShowPassword(prev=>!prev );
    }

    const onSubmit=(data)=>{
        console.log("Got the data... ",data)
    }
    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-8 space-y-5">
                    
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
                               <div className="flex items-center justify-between">
                                    <Input type={showPassword?"text":"password"} {...field} className="h-10 rounded flex-1"/> 
                                    <Button  type="button" onClick={(e)=> handleHidePassword(e)} >
                                        <Icon icon={showPassword?"eyeClose":"eye"}/>
                                    </Button>
                               </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}/>

                    <Button type="submit" className="w-full h-10" aria-label="Login in your Account">
                        Log in
                    </Button>
                </form>
            </Form>

            <div className="flex items-center justify-center mt-6">
                <span className="text-sm ">
                    Don't have an account? {" "}
                    {/* TODO: replace with Link */}
                    <a className="text-primary hover:underline" href="">
                        Create Account
                    </a>
                </span>
            </div>
        </>
    )
}
export default SignIn;