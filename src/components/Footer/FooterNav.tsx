import React from "react";
import Image from "next/image";
import Link from "next/link";

function FooterNav() {
	return (
		<section className="footer-nav">
			<div className="footer-nav-wrapper">
				<div className="footer-nav-description">
					<div>
						<Image src="/images/logo.svg" height={32} width={120} alt="logo" />
					</div>
					<p>
						Ratepunk compares hotel room prices across the major online travel
						agencies. When you search for a room, Ratepunk extension scans the
						top booking sites and runs a price comparison, so you can be
						confident in knowing you’re getting the best deal!
					</p>
				</div>
				<div className="footer-nav-links">
					<h4>QUICK LINKS</h4>
					<Link href="/">Price Comparison</Link>
					<Link href="/">Chrome Extension</Link>
					<Link href="/">How It Works</Link>
					<Link href="/">Ratepunk Blog</Link>
					<Link href="/">Privacy Policy</Link>
				</div>
				<div className="footer-nav-contacts">
					<h4>CONTACT</h4>
					<div className="footer-nav-contacts-email">
						<Image
							src="/images/email-footer.svg"
							height={13}
							width={16}
							alt="email icon"
						/>
						<a href="mailto:hi@ratepunk.com">hi@ratepunk.com</a>
					</div>
					<h4>SOCIAL</h4>
					<div className="footer-nav-socials">
						<a
							href="https://www.instagram.com/ratepunk/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="footer-nav-socials-wrapper">
								<Image
									src="/images/instagram.svg"
									width={16}
									height={16}
									alt="instagram icon"
								/>
							</div>
						</a>
						<a
							href="https://www.facebook.com/r8punk/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="footer-nav-socials-wrapper">
								<Image
									src="/images/facebook.svg"
									width={16}
									height={16}
									alt="facebook icon"
								/>
							</div>
						</a>
						<a
							href="https://www.linkedin.com/company/ratepunk/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="footer-nav-socials-wrapper">
								<Image
									src="/images/linkedin.svg"
									width={16}
									height={16}
									alt="linkedin icon"
								/>
							</div>
						</a>
						<a
							href="https://twitter.com/rate_punk"
							target="_blank"
							rel="noreferrer"
						>
							<div className="footer-nav-socials-wrapper">
								<Image
									src="/images/twitter.svg"
									width={16}
									height={16}
									alt="twitter icon"
								/>
							</div>
						</a>
						<a
							href="https://www.tiktok.com/@ratepunk"
							target="_blank"
							rel="noreferrer"
						>
							<div className="footer-nav-socials-wrapper">
								<Image
									src="/images/tiktok.svg"
									width={16}
									height={16}
									alt="tiktok icon"
								/>
							</div>
						</a>
					</div>
				</div>
				<div className="footer-nav-rights">
					<p>© 2022 Ratepunk. All Rights Reserved.</p>
				</div>
			</div>
		</section>
	);
}

export default FooterNav;
