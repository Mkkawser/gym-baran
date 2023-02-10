import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  return (
    <>
      <div className="shadow-[0px_4px_12px_0px rgba(0,0,0,0.05)] bg-white flex justify-between p-4">
        {/* logo */}
        <div className="font-Grotesque text-[28px] ">
          <span className="bg-[#1361f3] p-1 rounded-lg text-white">Gym</span>
          <span className="ml-1">baran</span>
        </div>
        {/* navbar */}
        <div className="text-[28px]">
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
