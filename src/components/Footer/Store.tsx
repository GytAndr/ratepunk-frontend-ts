import React from "react";
import Image from "next/image";
type StoreProps = {
	img: string;
	store: string;
};
function Store({ img, store }: StoreProps) {
	return (
		<div className="footer-store">
			<div className="footer-store-imgWrapper">
				<Image src={img} width={56} height={52} alt="store image" />
			</div>
			<div>
				<p className="footer-store-text--avail">available in the</p>
				<p className="footer-store-text--loc">{store}</p>
			</div>
		</div>
	);
}

export default Store;
