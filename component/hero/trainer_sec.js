import style from "./hero.module.css";
import Image from "next/image";
import { CgProfile } from "react-icons/Cg";

const Trainer = () => {
  const {
    hero_triner,
    hero_triner_ellipse,
    hero_triner_curve,
    hero_triner_img,
    hero_triner_wave,
    hero_triner_mem,
    hero_triner_circle,
    hero_triner_ex1,
    hero_triner_ex2,
    hero_triner_tmb,
    hero_triner_tmb_img,
    hero_triner_mem_text,
  } = style;
  return (
    <div className={hero_triner}>
      <div className={hero_triner_img}>
        <Image
          src={`/Img/traning_img.jpg`}
          alt="Triner Picture"
          width={"210"}
          height={"200"}
        />
      </div>
      <div className={hero_triner_curve}>
        <img src="/Img/curve.svg" alt="" />
      </div>
      <div className={hero_triner_ellipse}>
        <img src="/Img/ellipse.svg" alt="" />
      </div>
      <div className={hero_triner_wave}>
        {[...Array(28)].map((val, i) => (
          <span key={i}>
            <img src="/Img/wave.svg" alt="" />
          </span>
        ))}
      </div>
      <div className={hero_triner_mem}>
        <div className={hero_triner_circle}>
          <img src="Img/kick.svg" alt="" />
        </div>
        <div className={hero_triner_mem_text}>
          <span className="font-semibold">150+</span>
          <div className="text-[#262524] opacity-70">Members</div>
        </div>
      </div>
      <div className={hero_triner_ex1}>
        <img src="Img/person.svg" alt="" />
      </div>
      <div className={hero_triner_ex2}>
        <img src="Img/stretching.svg" alt="" />
      </div>
      <div className={hero_triner_tmb}>
        <div className={hero_triner_tmb_img}>
          <CgProfile />
        </div>
        <p>Zaqky Simorang</p>
        <small>Trainer</small>
      </div>
    </div>
  );
};

export default Trainer;
