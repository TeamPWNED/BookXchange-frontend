// 'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Logo from "@/assets/logobook.png";
import { useRouter } from "next/navigation";

export const Header = () => {
  const navigate = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("Buzz");

  useEffect(() => {
    // Check for authentication in localStorage
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    // If both tokens are present, consider the user as authenticated
    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignOut = async () => {
    try {
      // Hit the 'api/account/logout/' URL (adjust your API call as needed)
      await fetch('api/account/logout/', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      // Additional actions after hitting the logout URL
      // For example, clearing tokens from localStorage and updating state
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      setIsLoggedIn(false);

      // Redirect to the desired page after logout
      navigate.push('/');
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <header
      id="header"
      className="header fixed left-0 w-full z-999 top-0 bg-custom-bg backdrop-filter backdrop-blur-md bg-opacity-50"
    >
      <div className="header--container wrap wrap-px flex p-5">
        <div className="header-logo--container">
          <Link href="/">
            <Image src={Logo} alt="logo" height="120" width="100" priority />
          </Link>
        </div>

        <div className="flex items-center ml-auto">
          <Navbar />
          <div className="flex gap-2">
            {isLoggedIn ? (
              <>
                <p className="p-2">Hello, {userName}</p>
                <Button onClick={handleSignOut} variant="outline">
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/sign-up">
                  <Button variant="red">Sign Up</Button>
                </Link>
                <Link href="/sign-in">
                  <Button variant="outline">Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};


