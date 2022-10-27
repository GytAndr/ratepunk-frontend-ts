import React from "react";
import Image from "next/image";
function Rating() {
	return (
		<div className="footer-stores-rating">
			<Image src="/images/star.svg" width={18} height={18} alt="" />
			<Image src="/images/star.svg" width={18} height={18} alt="" />
			<Image src="/images/star.svg" width={18} height={18} alt="" />
			<Image src="/images/star.svg" width={18} height={18} alt="" />
			<Image src="/images/star.svg" width={18} height={18} alt="" />
			<p>Chrome Store reviews</p>
		</div>
	);
}

export default Rating;
