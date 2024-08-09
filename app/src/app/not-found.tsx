// app/not-found.tsx
"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the dashboard after a short delay
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-gray-500 mt-2">404</p>
      <p className="text-gray-500 mt-2">Redirecting to the dashboard...</p>
    </div>
  );
};

export default NotFound;
