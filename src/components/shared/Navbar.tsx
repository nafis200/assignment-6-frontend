"use client";
import { Button } from "../ui/button";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { logout } from "@/services/AuthService";
import { useUser } from "@/context/UserContext";


export default function Navbar() {
  const { user, setIsLoading} = useUser();
 
  const handleLogOut = () => {
    logout();
    setIsLoading(true);
  };

  return (
    <header className="border-b bg-background w-full sticky top-0 z-10 p-2 bg-gray-300">
      <div className="container flex justify-between items-center mx-auto h-16 px-5">
        <Link href="/">
          <h1 className="text-2xl font-black flex items-center">
             Meal box
          </h1>
        </Link>
        <div className="max-w-md  flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href="/cart">
            <Button variant="outline" className="rounded-full p-0 size-10">
              <ShoppingBag />
            </Button>
          </Link>

          {user? (
            <>
              <Link href="/">
                <Button className="rounded-full">Home</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem><Link href={`/profile`}>Update Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href={`/${user?.jwtPayload?.role}/dashboard`}>Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>My Shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogOut}
                  >
                    <LogOut />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button className="rounded-full" variant="outline">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
