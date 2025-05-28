import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Header() {
  return (
    <div className="container mx-auto px-4">
      <header className="flex h-16 w-full items-center px-8 bg-black text-white">
        <Link href="#" className="mr-6 flex items-center" prefetch={false}>
          <Image src="/logo.svg" alt="Pandem" width={20} height={20} />
          <span className="ml-3">Pandem</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                Docs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                Pricing
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                Status
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                FAQs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                Contact Us
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto flex gap-2">
          <Button className="bg-black text-white cursor-pointer">Login</Button>
          <Button className="bg-white text-black hover:bg-neutral-300 cursor-pointer">
            Sign Up
          </Button>
        </div>
      </header>
    </div>
  );
}
