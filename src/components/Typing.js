import React, { useEffect, useRef } from "react";
import styles from "../css/App.module.css";

const Typing = (props) => {
  const wrapper = useRef(null);
  useEffect(() => {
    const box = wrapper.current;
    const text = [
      "Wow! I'm glad you're here. ^ I like talking to people! ",
      "What's your name? Maybe Michael? ",
      "There was a Michael here once. ^We spent beautiful time together. ",
      "Unfortunately, my wife told me to leave the monitor and throw coal into the furnace. ^I hope you don't have an oven! ",
    ];
    const speed = 50;
    let wordIndex = 0;
    let textIndex = 0;
    let oldTime = 0;
    let activeDOMelement;

    const typing = (newTime) => {
      if (newTime - oldTime > speed) {
        let letter = text[textIndex].substr(wordIndex, 1);
        if (wordIndex === text[textIndex].length - 1) {
          if (textIndex === text.length - 1) return;
          waitTimeAndRestartAnimation();
        } else if (wordIndex === 0 || letter === "^") {
          if (letter === "^") letter = " ";
          const p = document.createElement("p");
          box.appendChild(p);
          activeDOMelement = p;
        }
        oldTime = newTime;
        activeDOMelement.textContent += letter;
        wordIndex++;
      }
      requestAnimationFrame(typing);
    };

    typing();

    const waitTimeAndRestartAnimation = () => {
      return setTimeout(() => {
        wordIndex = 0;
        textIndex++;
        box.textContent = "";
        requestAnimationFrame(typing);
      }, 2000);
    };
  }, []);

  return <div ref={wrapper} className={styles.Typing}></div>;
};

export default Typing;
