import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./GsapDemo.module.css";

export default function GsapDemo() {
  const circleRef = useRef(null);

  useEffect(() => {
    const circle = circleRef.current;
    gsap.fromTo(
      circle,
      { x: 0 },
      {
        x: 120,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "none",
        yoyo: true,
        repeat: -1,
      }
    );
    return () => {
      gsap.killTweensOf(circle);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wall} />
      <div ref={circleRef} className={styles.circle}>
        <div className={styles["emoji-container"]}>
          <div className={styles["headbang-emoji"]}>
            <div className={styles.eye}></div>
            <div className={styles.mouth}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
