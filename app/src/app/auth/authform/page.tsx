"use client";

import EmailPasswordForm from "@/components/auth/EmailPasswordForm";
import SocialAuthButtons from "@/components/auth/SocialAuthButtons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const AuthForm: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Card className="w-full max-w-md mx-auto my-8 shadow-lg rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 mt-2">
          {isSignUp ? "Join us today!" : "Sign in to continue"}
        </CardDescription>
        <Separator className="my-2" />
      </CardHeader>
      <CardContent className="px-6 py-1">
        <EmailPasswordForm isSignUp={isSignUp} />
        <Separator className="my-3" />
        <SocialAuthButtons />
      </CardContent>
      <CardFooter className="flex justify-center py-4">
        <button
          onClick={toggleForm}
          className="text-sm text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
        >
          {isSignUp
            ? "Already have an account? Sign In"
            : "Don't have an account? Sign Up"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default AuthForm;
