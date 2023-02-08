import style from "./index.module.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const { logo_wrap, logo, gym, menu,menu_icon,menu_list ,login} = style;
  return (
    <>
      <div className={logo_wrap}>
        <div className={logo}>
          <span className={gym}>Gym</span>
          <span>baran</span>
        </div>
        <div className={menu}>
          <span className={menu_icon}>
            <RxHamburgerMenu />
          </span>
        </div>
        <div className={menu_list}>
          <p>Home</p>
          <p>Program</p>
          <p>Blog</p>
          <p>About Us</p>
          <p className={login}>Log in</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
