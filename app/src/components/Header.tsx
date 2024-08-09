"use client";

import { ModeToggle } from "@/components/MyUI/ModeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import logo from "../assets/Logo.jpeg"; // Import your logo image

const Header: React.FC = () => {
  const { currentUser, signOut } = useAuth();
  const router = useRouter();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/dashboard" },
    { label: "Profile", path: "/profile" },
    { label: "Settings", path: "/settings" },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsSheetOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Sheet for Mobile Navigation */}
        {currentUser && (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    variant="link"
                    onClick={() => handleNavigation(item.path)}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        )}

        {/* Logo and App Name */}
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={logo.src} alt="MyBoilerPlate Logo" />
            <AvatarFallback>MBP</AvatarFallback>
          </Avatar>
          <span className="text-xl font-bold hidden sm:inline">
            MyBoilerPlate
          </span>
        </div>

        {/* Desktop Navigation */}
        {currentUser && (
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Button
                key={item.path}
                variant="link"
                onClick={() => handleNavigation(item.path)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Button>
            ))}
          </nav>
        )}

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          <ModeToggle />
          {currentUser && (
            <Button
              variant="ghost"
              onClick={signOut}
              className="text-sm font-medium hover:bg-secondary"
            >
              Sign Out
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
