import { tickets } from "../data";
import Button from "./Button";
import { NairaIcon } from "./Svgs";
import img1 from "../assets/ticket1.png";
import img2 from "../assets/ticket2.png";
import img3 from "../assets/ticket3.png";

export default function Ticket() {
	return (
		<section id="tickets">
			<div className="py-16 max-w-[95%] lg:max-w-[90%] mx-auto">
				<div className="text-white lg:max-w-[50%] font-cousine">
					<h3 className="text-2xl lg:text-4xl mb-2">GET TICKETS</h3>
					<p className="text-sm md:text-base leading-6">
						Secure Your Spot at TechStack; Devs2Devs for a day of insights,
						networking, and hands-on sessions.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row mt-12 gap-10">
					{tickets.map((ticket) => (
						<div
							className={`relative text-white flex-1 font-cousine py-12 w-full`}
							key={ticket.slug}
							style={{
								background: `url(${
									ticket.slug === "basic"
										? img1
										: ticket.slug == "vip"
										? img2
										: img3
								}) no-repeat`,
								backgroundSize: "100% 100%",
								backgroundPosition: "center",
							}}
						>
							<div
								className={`text-center min-h-96 h-full flex flex-col gap-7 ${
									ticket.slug !== "v-vip" ? "text-black" : "text-white"
								}`}
							>
								<div className="flex flex-col items-center">
									<h5 className="text-2xl">{ticket.name}</h5>
									<p className="text-3xl flex items-center">
										<NairaIcon
											color={ticket.slug !== "v-vip" ? "#212121" : "white"}
											className="mb-1"
										/>{" "}
										<span>{ticket.price}</span>
									</p>
								</div>
								<ul className="text-start px-6 font-cousine flex flex-col gap-2 mb-10">
									{ticket.attractions.map((att) => (
										<li key={att} className="flex gap-2">
											<div className="pt-1">
												<span
													className={`w-4 h-2  block  ${
														ticket.slug !== "v-vip" ? "bg-black" : "bg-white"
													}`}
												></span>
												<span
													className={`w-2 h-1 bg-black block ${
														ticket.slug !== "v-vip" ? "bg-black" : "bg-white"
													}`}
												></span>
											</div>
											<div>
												<p className="text-sm tracking-wider">{att}</p>
											</div>
										</li>
									))}
								</ul>
								<div className="mt-auto mx-auto">
									<Button
										btnwrapperclass={`${
											ticket.slug === "v-vip"
												? "bg-white text-black"
												: "bg-black"
										}`}
										className="font-semibold"
										color={`${ticket.slug !== "v-vip" ? "blue" : "black"}`}
									>
										GET TICKETS
									</Button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
