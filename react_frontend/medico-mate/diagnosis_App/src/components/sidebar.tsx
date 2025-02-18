import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { History, Heart, User2 } from "lucide-react"
// import Link from "next/link"
import { Link } from 'react-router-dom';
import { usePathname } from "next/navigation"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 w-64 border-r hidden md:block", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
          <Link to="/profile">
              <Button 
                variant={pathname === "/profile" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <User2 className="h-4 w-4" />
                Personal Information
              </Button>
            </Link>
            <Link to="/history">
            <Button 
                variant={pathname === "/profile" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <User2 className="h-4 w-4" />
                History
              </Button>
            </Link>
            <Link to="/favorites">
            <Button 
                variant={pathname === "/profile" ? "secondary" : "ghost"}
                className="w-full justify-start gap-2"
              >
                <User2 className="h-4 w-4" />
                Favorites
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

