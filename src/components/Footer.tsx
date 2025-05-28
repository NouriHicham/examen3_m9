import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Footer() {
  return (
    <div className="container mx-auto px-4">
      <footer className="flex h-16 w-full items-center px-8 bg-black text-white justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <img src="/logo.svg" alt="Pandem" width={20} height={20} />
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
                contact us
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="px-4 py-2 text-white bg-black rounded"
                prefetch={false}
              >
                terms of service
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </footer>
    </div>
  );
}
