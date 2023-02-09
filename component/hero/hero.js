import Trainer from "./trainer_sec";

const Hero = () => {
  return (
    <>
      <div className="max-w-full p-8">
        {/* hero main title */}
        <p className="text-[26px] font-Grotesque font-bold max-w-[305px]">
          Healthy in side <span className="text-[#8382EB]">fresh</span> out side
        </p>
        <p className="font-Poppins text-[16px] max-w-[340px] py-2 opacity-50">
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine.
        </p>
        {/* hero btn section */}
        <div className="max-w-[320px] grid grid-cols-2 gap-4 h-max py-6">
          <button className="flex items-center justify-around rounded-md bg-[#0a32d1] py-1 font-Poppins text-[12px]">
            <div className="text-white">Get started</div>
            <svg
              width="20"
              height="25"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.71424 0.874023C7.10726 0.874023 5.53638 1.35055 4.20023 2.24333C2.86408 3.13612 1.82268 4.40507 1.20772 5.88972C0.592754 7.37437 0.431852 9.00804 0.745357 10.5841C1.05886 12.1602 1.83269 13.608 2.96899 14.7443C4.1053 15.8806 5.55303 16.6544 7.12913 16.9679C8.70522 17.2814 10.3389 17.1205 11.8235 16.5055C13.3082 15.8906 14.5771 14.8492 15.4699 13.513C16.3627 12.1769 16.8392 10.606 16.8392 8.99902C16.8367 6.8449 15.9799 4.77972 14.4567 3.25653C12.9335 1.73334 10.8684 0.876513 8.71424 0.874023ZM11.3198 9.4635L8.19483 12.276C8.13384 12.331 8.06262 12.3733 7.98524 12.4008C7.90787 12.4282 7.82584 12.4401 7.74386 12.4358C7.66188 12.4315 7.58155 12.4111 7.50745 12.3758C7.43336 12.3404 7.36695 12.2908 7.31203 12.2298C7.25711 12.1688 7.21475 12.0976 7.18737 12.0202C7.15998 11.9428 7.14812 11.8608 7.15245 11.7788C7.15678 11.6968 7.17721 11.6165 7.21259 11.5424C7.24798 11.4683 7.2976 11.4019 7.35865 11.347L9.96729 8.99902L7.35865 6.651C7.23555 6.54009 7.16154 6.38484 7.15289 6.21938C7.14423 6.05391 7.20164 5.89179 7.31249 5.76864C7.42334 5.64549 7.57855 5.5714 7.74401 5.56267C7.90947 5.55393 8.07163 5.61126 8.19483 5.72205L11.3198 8.53455C11.385 8.59314 11.437 8.66476 11.4727 8.74478C11.5083 8.8248 11.5267 8.91142 11.5267 8.99902C11.5267 9.08662 11.5083 9.17324 11.4727 9.25326C11.437 9.33328 11.385 9.40491 11.3198 9.4635Z"
                fill="white"
              />
            </svg>
          </button>
          <button className="flex rounded-md  items-center justify-around bg-[#fcfcfd] py-1 font-Poppins text-[12px]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 0.874023C7.39303 0.874023 5.82214 1.35055 4.486 2.24333C3.14985 3.13612 2.10844 4.40507 1.49348 5.88972C0.87852 7.37437 0.717618 9.00804 1.03112 10.5841C1.34463 12.1602 2.11846 13.608 3.25476 14.7443C4.39106 15.8806 5.8388 16.6544 7.4149 16.9679C8.99099 17.2814 10.6247 17.1205 12.1093 16.5055C13.594 15.8906 14.8629 14.8492 15.7557 13.513C16.6485 12.1769 17.125 10.606 17.125 8.99902C17.1225 6.8449 16.2657 4.77972 14.7425 3.25653C13.2193 1.73334 11.1541 0.876513 9 0.874023ZM11.8467 9.51904L8.09668 12.019C8.00258 12.0819 7.89317 12.118 7.78014 12.1235C7.66711 12.129 7.55471 12.1038 7.45494 12.0504C7.35516 11.997 7.27177 11.9175 7.21366 11.8204C7.15555 11.7233 7.1249 11.6122 7.125 11.499V6.49902C7.1249 6.38586 7.15555 6.27479 7.21366 6.17769C7.27177 6.08059 7.35516 6.00109 7.45494 5.94769C7.55471 5.8943 7.66711 5.869 7.78014 5.87452C7.89317 5.88003 8.00258 5.91615 8.09668 5.979L11.8467 8.479C11.9323 8.53607 12.0025 8.6134 12.051 8.70412C12.0996 8.79483 12.125 8.89613 12.125 8.99902C12.125 9.10192 12.0996 9.20322 12.051 9.29393C12.0025 9.38465 11.9323 9.46197 11.8467 9.51904Z"
                fill="#264373"
              />
            </svg>
            <div className="">Learn more</div>
          </button>
        </div>
        {/* hero brand  */}
        <div className="pt-4 pb-4">
          <p className="font-Grotesque">Brands:</p>
          <div className="max-w-[320px] flex justify-center items-center gap-[20px]">
            <div className="max-w-[100px]">
              <img src="Img/nike.svg" alt="" />
            </div>
            <div className="max-w-[100px]">
              <img src="Img/adidas.svg" alt="" />
            </div>
            <div className="max-w-[100px]">
              <img src="Img/puma.svg" alt="" />
            </div>
            <div className="max-w-[100px]">
              <img src="Img/reebok.svg" alt="" />
            </div>
          </div>
        </div>
        {/* Triner Section   */}
        <Trainer />
      </div>
    </>
  );
};

export default Hero;
