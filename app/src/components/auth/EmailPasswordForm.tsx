"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { auth } from "../../config/firebase";
import { useValidation } from "../../hooks/useValidation";

interface EmailPasswordFormProps {
  isSignUp?: boolean;
}

interface FormData {
  email: string;
  password: string;
}

const EmailPasswordForm: React.FC<EmailPasswordFormProps> = ({
  isSignUp = false,
}) => {
  const router = useRouter();
  const { validateField } = useValidation();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    const emailError = validateField("email", formData.email);
    const passwordError = validateField("password", formData.password);
    setFormErrors({ email: emailError, password: passwordError });
    return !emailError && !passwordError;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const { email, password } = formData;
      try {
        if (isSignUp) {
          await createUserWithEmailAndPassword(auth, email, password);
        } else {
          await signInWithEmailAndPassword(auth, email, password);
        }
        router.push("/dashboard");
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          className={`border rounded-md px-3 py-2 ${
            formErrors.email ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
          autoFocus
        />
        {formErrors.email && (
          <span className="text-red-500 text-xs">{formErrors.email}</span>
        )}
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          className={`border rounded-md px-3 py-2 ${
            formErrors.password ? "border-red-500" : "border-gray-300"
          } focus:outline-none focus:ring-2 focus:ring-blue-400`}
          required
        />
        {formErrors.password && (
          <span className="text-red-500 text-xs">{formErrors.password}</span>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
      >
        {isSignUp ? "Sign Up" : "Sign In"}
      </Button>
    </form>
  );
};

export default EmailPasswordForm;
