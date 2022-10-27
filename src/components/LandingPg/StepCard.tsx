import React from "react";
import Image from "next/image";

type StepCardProps = {
	img: string;
	step: string;
	title: string;
	description: string;
};
function StepCard({ img, step, title, description }: StepCardProps) {
	return (
		<div className="step-card">
			<div className="step-img">
				<Image src={img} height={140} width={128} alt="step image" />
			</div>
			<div className="step-text-container">
				<p className="step-text--step">{step}</p>
				<p className="step-text--title">{title}</p>
				<p className="step-text--description">{description}</p>
			</div>
		</div>
	);
}

export default StepCard;
