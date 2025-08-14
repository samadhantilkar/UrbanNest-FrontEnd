import AuthLayout from "@/components/layouts/auth.layout";
import SignIn from "./signin";
import SignUp from "./signup";

function SignInPage(){
    return (
        <AuthLayout  title="Welcome Back" description="Please enter your details to Sign in">
            <SignIn/>
        </AuthLayout>
    )
}

function SignUpPage(){
    return (
        <AuthLayout title="Create Account" description="Please fill the form to Sign Up">
            <SignUp/>
        </AuthLayout>
    )
}
export {SignInPage,SignUpPage};