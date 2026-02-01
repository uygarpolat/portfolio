import { motion } from "framer-motion";

import upolat3 from "../../../../public/images/upolat3.png";
import upolat2 from "../../../../public/images/upolat2.jpg";
import "./Image.css";

export default function Image() {
	return (
		<div id="avatar">
			<motion.img
				id="hero-image"
				src={upolat2}
				alt="Uygar Polat"
				initial={{ opacity: 0, y: "-15%", scale: 0.98 }}
				animate={{ opacity: 1, y: "10%", scale: 1 }}
				transition={{ type: "spring", duration: 1.5, ease: "easeOut" }}
			/>
		</div>
	);
}
