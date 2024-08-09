"use client";

import { Button } from "@/components/ui/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle as Google } from "react-icons/fc";
import { auth } from "../../config/firebase";

const SocialAuthButtons: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <Button
      className="w-full flex items-center justify-center border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition-colors"
      onClick={handleGoogleSignIn}
    >
      <Google className="mr-2 h-5 w-5" />
      Sign In with Google
    </Button>
  );
};

export default SocialAuthButtons;
