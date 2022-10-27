import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
	const navRef = useRef<HTMLDivElement>(null!);
	const btnRef = useRef<HTMLDivElement>(null!);
	const showNavbar = () => {
		navRef.current.classList.toggle("expanded");
		btnRef.current.classList.toggle("open");
	};
	return (
		<header className="header">
			<div className="header-wrapper">
				<div className="header-logo">
					<a href="">
						<Image
							src="/images/logo.svg"
							priority
							height={32}
							width={120}
							alt="logo"
						/>
					</a>

					<div ref={btnRef} className="header-btn" onClick={showNavbar}>
						<div className="header-btn--burger"></div>
					</div>
				</div>
				<nav ref={navRef}>
					<Link href="/">
						<a>Chrome Extenstion</a>
					</Link>
					<Link href="/">Price Comparison</Link>
					<Link href="/">Blog</Link>
				</nav>
			</div>
		</header>
	);
}

export default Navbar;
