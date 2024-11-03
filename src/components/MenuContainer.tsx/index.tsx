import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";

// import  * as styles from '../header.module.css'
// import * as styles from "./styles.module.css";
import CompanyCard from "../Cards/Company";
import DevelopersCard from "../Cards/Developer";
import ProductsCard from "../Cards/Product";
import "./stylemenu.css";
import LearnCard from "../Cards/Learn";
import SupportCard from "../Cards/Support";
// import ProductsCard from '../Cards/Products'
// import DevelopersCard from '../Cards/Developers'
// import CompanyCard from '../Cards/Company'

interface MenuContainerProps {
  selectedNavOption:
    | "features"
    | "pricing"
    | "affiliate"
    | "support"
    | "learn"
    | "contact"
    | null;
  selectedNavOptionPosition: { x: number };
}

const MenuContainer = ({
  selectedNavOption,
  selectedNavOptionPosition,
}: MenuContainerProps) => {
  const features = useRef<HTMLElement | null>(null);
  const pricing = useRef<HTMLElement>(null);
  const affiliate = useRef<HTMLElement>(null);
  const support = useRef<HTMLElement>(null);
  const learn = useRef<HTMLElement>(null);
  const contact = useRef<HTMLElement>(null);

  const containerWidth = useMotionValue<number | null>(null);
  const containerHeight = useMotionValue<number | null>(null);

  const [isFirstInteraction, setIsFirstInteraction] = useState(true);

  useEffect(() => {
    if (selectedNavOption !== null) setIsFirstInteraction(false);
    else setIsFirstInteraction(true);
  }, [selectedNavOption]);

  useLayoutEffect(() => {
    if (!selectedNavOption) return;

    let width: number, height: number;

    switch (selectedNavOption) {
      case "features":
        if (features === null || features.current === null) return;
        width = features.current.clientWidth;
        height = features.current.clientHeight;
        break;
      case "pricing":
        if (pricing === null || pricing.current === null) return;
        width = pricing.current.clientWidth;
        height = pricing.current.clientHeight;
        break;
      case "affiliate":
        if (affiliate === null || affiliate.current === null) return;
        width = affiliate.current.clientWidth;
        height = affiliate.current.clientHeight;
        break;
      case "support":
        if (support === null || support.current === null) return;
        width = support.current.clientWidth;
        height = support.current.clientHeight;
        break;

      case "learn":
        if (learn === null || learn.current === null) return;
        width = learn.current.clientWidth;
        height = learn.current.clientHeight;
        break;

      case "contact":
        if (contact === null || contact.current === null) return;
        width = contact.current.clientWidth;
        height = contact.current.clientHeight;
        break;
      default:
        return;
    }
    containerWidth.set(width);
    containerHeight.set(height);
  }, [selectedNavOption, containerWidth, containerHeight]);

  const cardProps = {
    className: "card",
    initial: { opacity: 0, x: isFirstInteraction ? 0 : -70 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isFirstInteraction ? 0 : -70 },
    transition: { type: "spring", stiffness: 80, damping: 14 },
  };

  return (
    <AnimatePresence mode="wait">
      {selectedNavOption !== null && (
        <motion.div
          className="menuWrapper"
          style={{
            originX: 0.5,
            originY: 0,
            transformPerspective: 1000,
            height: window.innerHeight,
          }}
          initial={{ opacity: 0, rotateX: -13 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: -13 }}
          transition={{ duration: 0.15, ease: "linear" }}
        >
          <motion.div
            className="menuBody"
            style={{
              width: containerWidth,
              height: containerHeight,
              transition: isFirstInteraction ? "0" : "0.3s",
            }}
          >
            <div
              className="arrow"
              style={{
                left: selectedNavOptionPosition.x - 6,
              }} /* [6 -> half of arrow width] */
            />

            <div className="menuContent">
              <AnimatePresence>
                {selectedNavOption === "features" && (
                  <motion.div {...cardProps}>
                    <ProductsCard ref={features} />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedNavOption === "pricing" && (
                  <motion.div {...cardProps}>
                    <DevelopersCard ref={pricing} />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {selectedNavOption === "affiliate" && (
                  <motion.div {...cardProps}>
                    <CompanyCard ref={affiliate} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {selectedNavOption === "support" && (
                  <motion.div {...cardProps}>
                    <SupportCard ref={support} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {selectedNavOption === "learn" && (
                  <motion.div {...cardProps}>
                    <LearnCard ref={learn} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                {selectedNavOption === "contact" && (
                  <motion.div {...cardProps}>
                    <CompanyCard ref={contact} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuContainer;
