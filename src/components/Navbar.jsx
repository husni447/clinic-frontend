import Link from "next/link";
import Image from "next/image";
import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-gradient-to-r from-blue-100 via-white to-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpg"
            alt="JJU CLINIC Logo"
            width={40}
            height={40}
            className="mr-2"
            priority
          />
          <span className="text-2xl font-bold text-blue-700 tracking-wide hover:text-blue-900 transition-colors duration-200">
            JJU CLINIC
          </span>
        </Link>

        {/* Empty nav placeholder for future links */}
        <nav aria-label="Primary Navigation" />

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <button className="relative group p-2 rounded-full hover:bg-blue-50 transition-colors duration-200">
            <Bell className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
          </button>
          <button className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-200">
            <User className="w-5 h-5 text-gray-600 hover:text-blue-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
