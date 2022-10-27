import React from "react";
import StepCard from "./StepCard";
import ReferalCard from "./ReferralCard/ReferalCard";

function LandingPg() {
	return (
		<main>
			<div className="main-wrapper">
				<ReferalCard />
				<div className="step-wrapper">
					<StepCard
						img="/images/invite.svg"
						step="STEP 1"
						title="INVITE FRIENDS"
						description="Refer friends with your unique referral link."
					/>
					<StepCard
						img="/images/collect-coins.svg"
						step="STEP 2"
						title="COLLECT COINS"
						description="Get 1 coin for each friend that installs our extension using your referral link."
					/>
					<StepCard
						img="/images/voucher.svg"
						step="STEP 3"
						title="GET VOUCHER"
						description="Redeem for a $20 hotel booking voucher once you collect 20 coins."
					/>
				</div>
			</div>
		</main>
	);
}

export default LandingPg;
