import logo from "../../assets/logo-white.png";
import Button from "../Button";

function Footer() {
  return (
    <footer className="text-white">
      <div className="max-w-[90%] pt-16 font-cousine lg:max-w-[90%] mx-auto">
        <div>
          <div
            style={{ backgroundSize: "100% 100%" }}
            className="bg-center bg-no-repeat bg-footersm md:bg-footer py-10 px-5 lg:px-16 flex flex-col justify-between gap-5 md:flex-row"
          >
            <div className="">
              <p className="text-2xl md:text-4xl font-cousine">
                Subscribe to get <br /> the latest updates
              </p>
            </div>
            <form className="bg-white flex gap-2 items-center px-2 py-4 lg:px-4">
              <input
                placeholder="Enter Your Email"
                className="placeholder:text-ellipsis w-full text-black focus:outline-none"
              />
              <Button color="blue"> SUBSCRIBE</Button>
            </form>
          </div>
          <div className="flex py-7 gap-3 flex-wrap items-center justify-center md:justify-between">
            <div className="max-w-[200px] lg:max-w-[300px]">
              <img src={logo} />
            </div>
            <ul className="flex flex-wrap gap-5 justify-center md:justify-normal">
              <li className="hover:opacity-50 transition-opacity duration-300">
                <a href="">Discord</a>
              </li>
              <li className="hover:opacity-50 transition-opacity duration-300">
                <a href="">Facebook</a>
              </li>
              <li className="hover:opacity-50 transition-opacity duration-300">
                <a href="">Instagram</a>
              </li>
              <li className="hover:opacity-50 transition-opacity duration-300">
                <a href="">X (Twitter)</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 lg:py-3 text-center border-t border-grey">
          <p className="text-xs lg:text-sm">
            {new Date().getFullYear()} &copy; TechStack. All right reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
