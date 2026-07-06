import React from "react";

const Stats = () => {
	const stats = [
		{
			label: "Total Saved Collectively",
			value: "₦25.9M",
		},
		{
			label: "Active Circles",
			value: "850+",
		},
		{
			label: "Trust Completion Rate",
			value: "99.9%",
		},
		{
			label: "Countries Supported",
			value: "145+",
		},
	];
	return (
		<div className="grid grid-cols-2 gap-5.5 md:grid-cols-4 sm:gap-8">
			{stats.map((stat, index) => (
				<div
					key={index}
					className="text-center flex flex-col items-center place-self-center w-full"
				>
					<h3 className="text-[36px] sm:text-[48px] md:text-[52px] xl:text-[74px] text-primary-dark-active">
						{stat.value}
					</h3>
					<p className="font-light text-sm sm:text-base -mt-2 whitespace-nowrap">
						{stat.label}
					</p>
				</div>
			))}
		</div>
	);
};

const About = () => {
	return (
		<section>
			<div className="custom-container py-13 sm:py-20 lg:py-22">
				<Stats />
			</div>
		</section>
	);
};

export default About;
