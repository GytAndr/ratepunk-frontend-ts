import React from "react";
import FooterNav from "./FooterNav";
import Rating from "./Rating";
import Store from "./Store";

function Footer() {
	return (
		<footer className="footer">
			<section className="footer-stores">
				<div className="footer-wrapper">
					<a
						href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk"
						target="_blank"
						rel="noreferrer"
					>
						<Store img="/images/chrome.svg" store="chrome web store" />
					</a>
					<a
						href="https://apps.apple.com/app/ratepunk/id1607823726"
						target="_blank"
						rel="noreferrer"
					>
						<Store img="/images/apple.svg" store="apple app store" />
					</a>
					<Rating />
				</div>
			</section>
			<FooterNav />
		</footer>
	);
}

export default Footer;
