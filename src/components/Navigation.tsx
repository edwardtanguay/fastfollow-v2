"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	Home,
	Info,
	Menu,
	X,
	ToolCase,
} from "lucide-react";

interface NavItem {
	label: string;
	href: string;
	icon: React.ReactNode;
}

const navItems: NavItem[] = [
	{ label: "Home", href: "/", icon: <Home size={20} /> },
	{ label: "Topics", href: "/topics", icon: <ToolCase size={20} /> },
	{ label: "About", href: "/about", icon: <Info size={20} /> },
];

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => setIsOpen(!isOpen);

	const isActive = (href: string) => {
		return pathname === href
			? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]"
			: "text-gray-400 hover:text-gray-200 hover:bg-gray-800/50";
	};

	return (
		<>
			{/* Mobile menu button */}
			<button
				onClick={toggleMenu}
				className="fixed top-6 right-6 z-50 md:hidden bg-gray-800 p-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition"
			>
				{isOpen ? <X size={24} /> : <Menu size={24} />}
			</button>

			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/20 md:hidden z-30"
					onClick={() => setIsOpen(false)}
				/>
			)}

			{/* Sidebar Navigation */}
			<aside
				className={`fixed md:static inset-y-0 right-0 md:left-0 z-40 w-64 
					bg-gray-950/95 backdrop-blur-xl supports-backdrop-filter:bg-gray-950/80
					border-l border-white/10 md:border-r md:border-l-0 md:border-gray-800 
					transition-transform duration-300 ease-out md:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full"} 
					flex flex-col pt-16 md:pt-0
					before:absolute before:inset-0 before:z-[-1] before:bg-linear-to-b before:from-gray-900 before:via-purple-900/10 before:to-purple-500/30`}
			>
				<nav className="flex-1 px-4 py-8 space-y-2">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition hover:bg-gray-800 ${isActive(
								item.href
							)}`}
						>
							{item.icon}
							<span>{item.label}</span>
						</Link>
					))}
				</nav>

			</aside>
		</>
	);
}