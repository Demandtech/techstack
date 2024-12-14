import { useEffect } from "react";
import { ArrowRight } from "../components/Svgs";

function Contact() {
	
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section>
			<div className="max-w-[95%] font-cousine py-10 lg:py-16 lg:max-w-[90%] mx-auto">
				<div className="text-white gap-5 flex flex-col md:flex-row md:items-center">
					<h2 className="text-5xl lg:text-7xl font-cousine leading-[60px]">
						Get in
						<span className="flex items-center gap-4">
							<ArrowRight className="max-w-[120px]" /> <span> Touch </span>
						</span>
					</h2>
					<div className="md:max-w-[50%] lg:max-w-[30%] ml-auto">
						<p className="text-sm lg:text-lg leading-6 lg:leading-8">
							Have questions about TechStack; Devs2Devs Conference? Reach out to
							us, we are here to help!
						</p>
					</div>
				</div>
				<div className="text-sm md:text-base mt-10 lg:mt-16 lg:max-w-[55%] text-xm gap-y-5 gap-x-10 grid md:grid-cols-2">
					<div>
						<p className="text-blue mb-1.5">Email Address</p>
						<p className="text-white">hello@techstackdev2dev.com</p>
					</div>
					<div>
						<p className="text-blue mb-1.5">Phone Number</p>
						<p className="text-white text-nowrap">
							+2348902838493 +2348902838493
						</p>
					</div>
					<div>
						<p className="text-blue mb-1.5">Venue</p>
						<p className="text-white leading-6 lg:leading-8">
							1234 Tech Avenue, Suite 500, Innovation District, Silicon Valley,
							CA 94043, Nigeria.
						</p>
					</div>
					<div>
						<p className="text-blue mb-1.5">Socials</p>
						<div className="text-white inline-grid grid-cols-2 gap-3 lg:gap-5">
							<a href="">Instagram</a>
							<a href="">Facebook</a>
							<a href="">X (Twitter)</a>
							<a href="">Discord</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact;
