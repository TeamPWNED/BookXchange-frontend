'use client'
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Logo from '@/assets/logobook.png'

export const Header = () => {
    return (
        <header
            id="header"
            className="header fixed left-0 w-full z-999 top-0 bg-white backdrop-filter backdrop-blur-md bg-opacity-50"
        >
            <div className="header--container wrap wrap-px flex p-5">

                <div className="header-logo--container">
                    <Link href="/">
                        <Image
                            src={Logo}
                            alt="logo"
                            height="120"
                            width="100"
                            priority
                        />
                    </Link>
                </div>

                <div className="flex items-center ml-auto">
                    <Navbar />
                    <div className="flex gap-2">
                        <Button variant='red'>Sign Up</Button>
                        <Button variant='outline'>Sign In</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};