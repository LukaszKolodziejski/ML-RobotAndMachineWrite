import React from "react";
import { ReactSVG } from "react-svg";
import gsap from "gsap";
import styles from "../css/App.module.css";
import RobotSVG from "../svg/robot.svg";

const Robot = (props) => {
  const takeSvg = (svg) => {
    const legs = svg.querySelectorAll("#leg-right, #leg-left");

    const bar = () => {
      const bars = document.querySelectorAll("#voice-bars > *");
      const scale = () => gsap.utils.random(0.2, 3);
      const color = () => gsap.utils.random(["red", "green", "yellow"]);

      const tl = gsap.timeline({ onComplete: bar });
      tl.set(bars, {
        y: -30,
        transformOrigin: "50% 50%",
      });
      tl.timeScale(2);
      tl.to(bars, {
        duration: 0.7,
        scaleY: scale,
        fill: color,
        ease: "bounce.out",
        stagger: {
          each: 0.2,
          repeat: 1,
          yoyo: true,
        },
      });
      return tl;
    };

    const move = (legs) => {
      const tl = gsap.timeline();
      tl.timeScale(1.5);
      tl.to(legs, {
        y: -60,
        rotateY: 45,
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "slow(0.7, 0.7, false)",
        },
      });
      return tl;
    };

    const blink = () => {
      const eyes = document.querySelectorAll("#eye-left,#eye-right");
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
      tl.set(eyes, { transformOrigin: "50% 50%" });

      tl.to(eyes, { duration: 0.1, scaleY: 0, fill: "#231f20" });
      tl.to(eyes, { duration: 0.05, scaleY: 1, fill: "#48b3e6" });
      tl.to(eyes, {
        duration: 0.12,
        scaleY: 0,
        fill: "#231f20",
        delay: 0.5,
      });
      tl.to(eyes, { duration: 0.03, scaleY: 1, fill: "#48b3e6" });
      tl.to(eyes, { duration: 0.08, scaleY: 0, fill: "#231f20", delay: 1.5 });
      tl.to(eyes, { duration: 0.08, scaleY: 1, fill: "#48b3e6" });
      return tl;
    };

    const master = gsap.timeline();
    master.add("now");
    master.add(bar(), "now").add(move(legs), "now").add(blink(), "now");
  };

  return (
    <div className={styles.Robot}>
      <ReactSVG src={RobotSVG} afterInjection={(error, svg) => takeSvg(svg)} />
    </div>
  );
};

export default Robot;
