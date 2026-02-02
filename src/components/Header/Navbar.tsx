import { motion } from "motion/react";
import { useState, useEffect } from "react";
import "./Navbar.css";

const navItems = ["home", "projects", "about", "contact"];

export default function Navbar() {
	const [activeTab, setActiveTab] = useState("home");

	useEffect(() => {
		const handleScroll = () => {
			const sections = navItems.map((item) => document.getElementById(item));
			const scrollPosition = window.scrollY + 100; // Offset

			for (const section of sections) {
				if (
					section &&
					section.offsetTop <= scrollPosition &&
					section.offsetTop + section.offsetHeight > scrollPosition
				) {
					setActiveTab(section.id);
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav className="nav-items">
			<ul className="nav-items-list">
				{navItems.map((item) => (
					<li key={item} style={{ position: "relative" }}>
						<a
							href={`#${item}`}
							className={`nav-link ${activeTab === item ? "active" : ""}`}
							onClick={() => setActiveTab(item)}
						>
							{activeTab === item && (
								<motion.div
									layoutId="active-pill"
									className="active-pill"
									transition={{ type: "spring", duration: 0.6 }}
								/>
							)}
							<span style={{ position: "relative", zIndex: 1 }}>{item}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
