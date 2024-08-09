"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
//import "../../app/globals.css";
import { useAuth } from "../../hooks/useAuth";
export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/auth/authform");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
}
