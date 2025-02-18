// import Link from "next/link"
import { Link } from 'react-router-dom';
import { Button } from "./ui/button"
import { Activity } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-blue-600">
          <Activity className="h-6 w-6" />
          Symptomate
        </Link>
        <nav className="flex items-center gap-6 ml-10">
          <Link to="/diagnosis" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Diagnosis
          </Link>
          <Link to="/news" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Medical News
          </Link>
          <Link to="/products" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Medical Products
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link to="/login">Sign in</Link>
          </Button>
          <Button asChild>
            <Link to="/diagnosis">Take a Diagnosis</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

