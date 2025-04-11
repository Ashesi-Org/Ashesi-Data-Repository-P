"use client";

import Image from "next/image";
import FooterLink from "./FooterLink";
import {
	SiFacebook,
	SiX,
	SiInstagram,
	SiLinkedin,
	SiYoutube,
} from "react-icons/si";
import SocialIcon from "@/components/SocialIcon";
import CustomButton from "@/components/CustomButton";

export default function Footer() {
	const icons = [
		{ component: SiFacebook, link: "https://facebook.com" },
		{ component: SiInstagram, link: "https://instagram.com" },
		{ component: SiLinkedin, link: "https://linkedin.com" },
		{ component: SiX, link: "https://twitter.com" },
		{ component: SiYoutube, link: "https://youtube.com" },
	];

	return (
		<>
			<div className="bg-ashesi-red flex justify-center items-center gap-4 py-6">
				<p className="text-white font-semibold">
					Venture into a wide spectrum of datasets submitted by the
					Ashesi Community
				</p>
				{/*<CustomButton bgColor="bg-white" textColor="text-ashesi-red" text="Login Now!" href="/" />*/}
			</div>
			<div className="flex justify-center py-10">
				<Image
					src="/images/logo.webp"
					alt="Ashesi Logo"
					width={200}
					height={200}
					className="object-contain"
				/>
			</div>
			<div className="grid grid-cols-3 gap-4 mb-20 place-items-center">
				<div className="flex gap-5 justify-center">
					{icons.map(({ component, link }, index) => (
						<SocialIcon key={link} icon={component} link={link} />
					))}
				</div>
				<div>
					<p className="text-center">
						1 University Avenue,
						<br /> Berekuso, Ghana
					</p>
					<br />
					<p className="text-center">
						<strong>Phone:</strong>&nbsp;&nbsp;+233 302 610 330
					</p>
					<p className="text-center">
						<strong>Email:</strong>&nbsp;&nbsp;info@ashesi.edu.gh
					</p>
				</div>
				<div>
					<FooterLink title="Home" link="/" />
					<FooterLink title="About The Project" link="/about" />
					<FooterLink title="View Collections" link="/collections" />
					<FooterLink title="Data Policy" link="/data_policy" />
				</div>
			</div>
			<div className="bg-ashesi-gray flex justify-center items-center py-6">
				<p className="text-white text-sm">
					Copyright {new Date().getFullYear()} ©
					&nbsp;&nbsp;|&nbsp;&nbsp;Ashesi University
				</p>
			</div>
		</>
	);
}
