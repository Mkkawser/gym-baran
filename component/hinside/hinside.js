import style from "./hinside.module.css";
import styles from "../hero/hero.module.css";

const HSide = () => {
  const { Hside_head,hero_title } = style;
  const { hero_head } = styles;
  return (
    <>
      <div className={Hside_head}>
        <p className={hero_head}>Healthy in side fresh out side</p>
        <p className={hero_title}>
          Exercise is a very important need for our body. Health and fitness
          will be obtained if you can do regular exercise and run a healthy
          routine. Even at home we still have to be diligent in exercising,
          either alone or with your friends at home. Healthy life makes you more
          excited to live the day
        </p>
      </div>
    </>
  );
};

export default HSide;
