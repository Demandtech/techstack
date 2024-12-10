import Button from "../Button";
import { sponsors } from "../../data";
function Sponsors() {
	return (
		<section className="bg-light-grey py-16 lg:py-20" id="sponsors">
			<div className="flex flex-col px-3 gap-8 lg:gap-16 max-w-4xl mx-auto">
				<div className="text-center font-cousine max-w-md mx-auto">
					<span className="text-blue uppercase lg:text-lg mb-1 block">
						Our Sponsors
					</span>
					<h3 className="text-lg lg:text-2xl">
						We are proud to partner with industry leaders
					</h3>
				</div>
				<div className=" flex flex-wrap justify-center gap-6 lg:gap-12">
					{sponsors.map((sponsor) => (
						<div className="max-w-[100px] md:max-w-[200px]">
							<img src={sponsor} alt="Sponsor" />
						</div>
					))}
				</div>
				<div className="max-w-[210px] mx-auto">
					<Button color="blue" className="uppercase">
						Become a sponsor
					</Button>
				</div>
			</div>
		</section>
	);
}

export default Sponsors;
