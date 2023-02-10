import Image from "next/image";
import { CgProfile } from "react-icons/cg";
const Trainer = () => {
  return (
    <div className=" max-w-[300px] relative ml-[40px] mx-[50px]">
      {/* trainer img */}
      <div className="max-w-[210px] z-10 relative ml-[20px]">
        <Image
          className="w-full h-full object-cover pl-4"
          src={`/Img/traning_img.jpg`}
          alt="Triner Picture"
          height={200}
          width={300}
        />
        {/* exersice 1 */}
        <div className="absolute w-[45px] h-[45px] bg-gradient-to-r from-[rgba(84,120,239,1)] to-[rgba(214,223,255,1)] rounded-full flex justify-center items-center left-[-56px] bottom-[90px] shadow-[0px_11px_46px_rgba(51,78,123,0.3)]">
          <img className="w-[30px]" src="Img/person.svg" alt="" />
        </div>
        {/* exersice 2 */}
        <div className="absolute w-[45px] h-[45px]   bg-gradient-to-r from-[rgba(75,172,225,1)] to-[rgba(216,241,255,1)] rounded-full flex justify-center items-center right-[-40px]  top-[60px] shadow-[0px_2px_8px_rgba(0, 0, 0, 0.09)]">
          <img className="w-[30px]" src="Img/stretching.svg" alt="" />
        </div>
        {/* trainer profile */}
        <div className="absolute bg-white rounded-md grid justify-items-center p-2 max-w-[110px] bottom-[20px] right-[-40px] shadow-[0px_11px_46px_gba(51, 78, 123, 0.3)]">
          <div className="bg-[rgba(103,101,240,1)] rounded-full w-[40px] h-[40px] flex justify-center items-center text-white ">
            <CgProfile className="text-[20px]" />
          </div>
          <p className="font-Poppins text-[11px]">Zaqky Simorang</p>
          <small className="opacity-50 text-[9px]">Trainer</small>
        </div>
      </div>
      {/* curve */}
      <div className="absolute bottom-0 ">
        <img className="max-w-[280px]" src="/Img/curve.svg" alt="" />
      </div>
      {/* ellipse */}
      <div className="absolute ml-1 max-w-[220px] bottom-0 -z-10">
        <img src="/Img/ellipse.svg" alt="" />
      </div>
      {/* wave */}
      <div className="absolute top-14 left-2">
        {[...Array(28)].map((val, i) => (
          <span key={i}>
            <img src="/Img/wave.svg" alt="" />
          </span>
        ))}
      </div>
      {/* Number of member */}
      <div className="flex gap-2 rounded-lg p-1 bg-[#fff] absolute top-8 -left-12  z-10 ">
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gradient-to-r from-[rgba(248,164,34,1)] to-[rgba(254,222,172,1)]">
          <img className="w-[25px]" src="Img/kick.svg" alt="" />
        </div>
        <div className="font-Poppins text-[12px] mr-2">
          <span className="font-semibold">150+</span>
          <div className="text-[#262524] opacity-70 text-[10px]">Members</div>
        </div>
      </div>
    </div>
  );
};

export default Trainer;
