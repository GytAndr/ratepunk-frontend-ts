import React from "react";
import Input from "./Input";

function ReferalCard() {
	return (
		<div className="referral-card">
			<h1 className="referral-title">REFER FRIENDS AND GET REWARDS</h1>
			<p className="referral-description">
				Refer your friends to us and earn hotel booking vouchers. We&apos;ll
				give you 1 coin for each friend that installs our extension. Minimum
				cash-out at 20 coins.
			</p>
			<Input />
			<p className="referral-notice">Limits on max rewards apply.</p>
		</div>
	);
}

export default ReferalCard;
