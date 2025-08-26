'use client';

import * as React from 'react';
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ArrowUpRight } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";

export function Header() {
    const scrollDirection = useScroll();

    const features: { title: string; href: string; description: string }[] = [
        {
            title: "Tool 1",
            href: "/tools-1",
            description: "Tool 1 description.",
        },
        {
            title: "Tool 2",
            href: "/tools-2",
            description: "Tool 2 description.",
        },
        {
            title: "Tool 3",
            href: "/tools-3",
            description: "Tool 3 description.",
        },
    ];

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full border-b backdrop-blur-sm transition-transform duration-300",
                scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
            )}
        >
            <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/logo-192.png"
                        alt="Logo"
                        width={24}
                        height={24}
                    />
                    <span className="text-lg font-bold">LandingAI</span>
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-12">

                        <NavigationMenuItem>

                            <NavigationMenuTrigger className="group inline-flex h-auto items-center justify-center bg-transparent p-0
                                font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground
                                focus:text-muted-foreground focus:bg-transparent focus:outline-none data-[state=open]:!text-foreground
                                data-[state=open]:!bg-transparent">
                                Features
                            </NavigationMenuTrigger>

                            <NavigationMenuContent>
                                <ul className="grid w-[300px]">
                                    <li>
                                        <NavigationMenuLink asChild className='hover:bg-transparent'>
                                            <Link href={features[0].href}>
                                                <div className="font-medium">{features[0].title}</div>
                                                <div className="text-muted-foreground">
                                                    {features[0].description}
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild className='hover:bg-transparent'>
                                            <Link href={features[1].href}>
                                                <div className="font-medium">{features[1].title}</div>
                                                <div className="text-muted-foreground">
                                                    {features[1].description}
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild className='hover:bg-transparent'>
                                            <Link href={features[2].href}>
                                                <div className="font-medium">{features[2].title}</div>
                                                <div className="text-muted-foreground">
                                                    {features[2].description}
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>

                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/#pricing" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground active:bg-transparent">
                                    Pricing
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/#faq" className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground active:bg-transparent">
                                    FAQ
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <Link href="/login">
                        <Button variant="ghost">Log in</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>
                            Sign up
                            <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
