import style from "./accessibility.module.css";
import { BsArrowRightShort } from "react-icons/bs";

const Accessibility = () => {
  const {
    acsb_head,
    acsb_wrap,
    acsb_task_wrap,
    acsb_task_logo,
    acsb_task_img,
    acsb_task_text,
    acsb_task_black_icon
  } = style;
  return (
    <>
      <div className={acsb_head}>
        <div className={acsb_task_wrap}>
          <div className={acsb_task_logo}></div>
          <div className={acsb_task_img}>
            <img src="Img/crucified-pose.svg" alt="" />
          </div>
          <div className={acsb_task_text}>
            <p>Get that 11 line in 30 days</p>
            <p>
              Learn more <BsArrowRightShort />
            </p>
          </div>
        </div>
        <div className={acsb_task_wrap}>
          <div className={acsb_task_logo}></div>
          <div className={acsb_task_img}>
            <img src="Img/dancer-balance-pose.svg" alt="" />
          </div>
          <div className={acsb_task_text}>
            <p>14 Days sherd challenge</p>
            <p>
              Learn more <BsArrowRightShort />
            </p>
          </div>
        </div>
        <div className={acsb_task_wrap}>
          <div className={acsb_task_logo}></div>
          <div className={acsb_task_img}>
            <img src="Img/dancer-motion.svg" alt="" />
          </div>
          <div className={acsb_task_text}>
            <p>Get flat belly in 30 days</p>
            <p className={acsb_task_black_icon}>
              Learn more <BsArrowRightShort />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;
