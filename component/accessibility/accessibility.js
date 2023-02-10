import { BsArrowRightShort } from "react-icons/bs";

const Accessibility = () => {
  return (
    <>
      <div className="font-Poppins text-white max-w-[350px] bg-gradient-to-t from-[#6462f0] to-[#9190e9] m-8 p-6 rounded-3xl flex flex-wrap gap-4">
        {/* 1st accessibility */}
        <div className="flex items-center justify-around gap-4">
          <div className="w-[80px] h-[80px] bg-[#9897ef] rounded-[20px] relative grid justify-items-center items-center">
            <div className="absolute">
              <img
                className="w-full h-full"
                src="/Img/crucified-pose.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px]">
              Get that 11 line in 30 days
            </p>
            <p className="opacity-50">
              Learn more <BsArrowRightShort className="inline-block" />
            </p>
          </div>
        </div>
        {/* 2nd accessibility */}
        <div className="flex items-center justify-around gap-4">
          <div className="w-[80px] h-[80px] bg-[#9897ef] rounded-[20px] relative grid justify-items-center items-center">
            <div className="absolute">
              <img
                className="w-full h-full"
                src="Img/dancer-balance-pose.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px]">14 Days sherd challenge</p>
            <p className="opacity-50">
              Learn more <BsArrowRightShort className="inline-block" />
            </p>
          </div>
        </div>
        {/* 3rd accessibility */}
        <div className="flex items-center justify-around gap-4">
          <div className="w-[80px] h-[80px] bg-[#9897ef] rounded-[20px] relative grid justify-items-center items-center">
            <div className="absolute">
              <img
                className="w-full h-full"
                src="Img/dancer-motion.svg"
                alt=""
              />
            </div>
          </div>
          <div>
            <p className="font-semibold text-[16px]">
              Get flat belly in 30 days
            </p>
            <p className="opacity-50">
              Learn more{" "}
              <BsArrowRightShort className="inline-block text-[#000]" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
