import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <div className="shadow-[0px_4px_12px_0px rgba(0,0,0,0.05)] bg-white flex justify-between items-center p-4 sticky w-full z-[99999] top-0 sm:bg-[blue] md:bg-[purple] lg:bg-[yellow] xs:bg-[skyblue]">
        {/* logo */}
        <div className="font-Grotesque text-[25px] flex items-center">
          <span className="bg-[#7b79ef] p-1 rounded-lg text-white">Gym</span>
          <span className="ml-1">baran</span>
        </div>
        {/* navbar */}
        <div className="text-[25px]">
          <RxHamburgerMenu />
        </div>
        {/* <div className="">
          <p>Home</p>
          <p>Program</p>
          <p>Blog</p>
          <p>About Us</p>
          <p className="">Log in</p>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
