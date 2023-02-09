import Image from "next/image";
import { CgProfile } from "react-icons/cg";
// border-2 border-[#abc]
const Trainer = () => {
  return (
    <div className="border-2 border-[#abc] max-w-[300px] ">
      <div className=" max-w-[280px]">
        <Image
          className="w-full h-full object-cover"
          src={`/Img/traning_img.jpg`}
          alt="Triner Picture"
          height={200}
          width={300}
        />
      </div>
      {/* <div className="">
        <img src="/Img/curve.svg" alt="" />
      </div>
      <div className="">
        <img src="/Img/ellipse.svg" alt="" />
      </div>
      <div className="">
        {[...Array(28)].map((val, i) => (
          <span key={i}>
            <img src="/Img/wave.svg" alt="" />
          </span>
        ))}
      </div>
      <div className="">
        <div className="">
          <img src="Img/kick.svg" alt="" />
        </div>
        <div className="">
          <span className="font-semibold">150+</span>
          <div className="text-[#262524] opacity-70">Members</div>
        </div>
      </div>
      <div className="">
        <img src="Img/person.svg" alt="" />
      </div>
      <div className="">
        <img src="Img/stretching.svg" alt="" />
      </div>
      <div className="">
        <div className="">
          <CgProfile />
        </div>
        <p>Zaqky Simorang</p>
        <small>Trainer</small>
      </div> */}
    </div>
  );
};

export default Trainer;
