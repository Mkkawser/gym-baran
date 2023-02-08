import style from "./bestfullbody.module.css";
import styles from "../hero/hero.module.css";

const BestFullBody = () => {
  const {
    bfb_head,
    bfb_head_text,
    bfb_head_btn,
    shadow_remove,
    bfb_main,
    bfb_ex1,
    bfb_ex2,
    bfb_ex3,
    bfb_ex3_inner1,
    bfb_ex3_inner2,
    bfb_alu,
    bfb_ellipse,
    bfb_wave,
    bfb_main_img
  } = style;
  const { hero_btn_gst, hero_btn_gst_text } = styles; //   Reuse get-start btn

  return (
    <>
      <div className={bfb_head}>
        <div className={bfb_head_text}>
          <p>Best full body workout to lose fat</p>
          <p>
            Exercise is a very important need for our body. Health and fitness
            will be obtained if you can do regular exercise and run a healthy
            routine. Even at home we still have to be diligent in exercising,
            either alone or with your friends at home.
          </p>
          <div className={[bfb_head_btn, shadow_remove].join(" ")}>
            <button className={[hero_btn_gst, , shadow_remove].join(" ")}>
              <div className={hero_btn_gst_text}>Get started</div>
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
          </div>
        </div>
        <div className={bfb_main}>
          <div className={bfb_ex1}>
            <img src="Img/dancer-motion.svg" alt="" />
          </div>
          <div className={bfb_ex2}>
            <img src="Img/stretching.svg" alt="" />
          </div>
          <div className={bfb_ex3}>
            <div className={bfb_ex3_inner1}>
              <img src="Img/crucified-pose.svg" alt="" />
            </div>
            <div className={bfb_ex3_inner2}>
              <p>800 kall</p>
              <p>Burn fat</p>
            </div>
          </div>
          <div className={bfb_alu}>
            <img src="Img/alu.svg" alt="" />
          </div>
          <div className={bfb_ellipse}>
            <img src="Img/ellipse.svg" alt="" />
          </div>
          <div className={bfb_wave}>
            {[...Array(28)].map((val, i) => (
              <span key={i}>
                <img src="/Img/wave.svg" alt="" />
              </span>
            ))}
          </div>
          <img className={bfb_main_img} src="Img/best-workout.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default BestFullBody;
