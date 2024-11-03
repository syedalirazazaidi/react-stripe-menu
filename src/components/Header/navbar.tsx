import React, { useEffect, useRef, useState } from "react";

// import MenuContainer from '../MenuContainer'

import MenuContainer from "../MenuContainer.tsx";
import "./styles.css";
import { StaticImage } from "gatsby-plugin-image";
type NavOption =
  | "features"
  | "pricing"
  | "affiliate"
  | "support"
  | "learn"
  | "contact";

const HeaderMy = () => {
  const [selectedNavOption, setSelectedNavOption] = useState<NavOption | null>(
    null
  );
  const [selectedNavOptionPosition, setSelectedNavOptionPosition] = useState<{
    x: number;
  }>({ x: 0 });

  const features = useRef<HTMLParagraphElement>(null);
  const pricing = useRef<HTMLParagraphElement>(null);
  const affiliate = useRef<HTMLParagraphElement>(null);
  const support = useRef<HTMLParagraphElement>(null);
  const learn = useRef<HTMLParagraphElement>(null);
  const contact = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const resizeHandler = () => {
      if (selectedNavOption !== null || selectedNavOptionPosition.x !== 0) {
        setSelectedNavOptionPosition({ x: 0 });
        setSelectedNavOption(null);
      }
    };
    document.addEventListener("resize", resizeHandler);

    return () => document.removeEventListener("resize", resizeHandler);
  }, [selectedNavOption, selectedNavOptionPosition.x]);

  const onNavOptionHover = (navItemId: NavOption) => {
    if (selectedNavOption === navItemId) return;

    let navOptionScreenPosition: ClientRect;

    switch (navItemId) {
      case "features":
        if (features === null || features.current === null) return;
        navOptionScreenPosition = features.current.getBoundingClientRect();
        break;
      case "pricing":
        if (pricing === null || pricing.current === null) return;
        navOptionScreenPosition = pricing.current.getBoundingClientRect();
        break;
      case "affiliate":
        if (affiliate === null || affiliate.current === null) return;
        navOptionScreenPosition = affiliate.current.getBoundingClientRect();
        break;

      case "support":
        if (support === null || support.current === null) return;
        navOptionScreenPosition = support.current.getBoundingClientRect();
        break;

      case "learn":
        if (learn === null || learn.current === null) return;
        navOptionScreenPosition = learn.current.getBoundingClientRect();
        break;

      case "contact":
        if (contact === null || contact.current === null) return;
        navOptionScreenPosition = contact.current.getBoundingClientRect();
        break;
      default:
        return;
    }

    setSelectedNavOptionPosition({
      x: navOptionScreenPosition.left + navOptionScreenPosition.width / 2,
    });
    setSelectedNavOption(navItemId);
  };

  const onMouseLeave = () => {
    setSelectedNavOption(null);
    setSelectedNavOptionPosition({ x: 0 });
  };

  const onNavOptionClicked = (navItemId: NavOption) => {
    selectedNavOption !== null ? onMouseLeave() : onNavOptionHover(navItemId);
  };

  return (
    <header className="header">
      <div>
        <StaticImage
          src="./logo-nw.svg"
          alt="Instagram"
          title="Instagram"
          className="d-inline-block align-text-top img-fluid"
          layout="constrained"
          placeholder="blurred"
        />
      </div>
      <div onMouseLeave={onMouseLeave} className="navigationWrapper">
        <nav className="navigationItems">
          <button
            onMouseEnter={() => onNavOptionHover("features")}
            onClick={() => onNavOptionClicked("features")}
            onFocus={() => onNavOptionHover("features")}
            onTouchStart={() => onNavOptionClicked("features")}
          >
            <p ref={features}>Features</p>
          </button>

          <button
            onMouseEnter={() => onNavOptionHover("pricing")}
            onClick={() => onNavOptionClicked("pricing")}
            onFocus={() => onNavOptionHover("pricing")}
            onTouchStart={() => onNavOptionClicked("pricing")}
          >
            <p ref={pricing}>Pricing</p>
          </button>

          <button
            onMouseEnter={() => onNavOptionHover("affiliate")}
            onClick={() => onNavOptionClicked("affiliate")}
            onFocus={() => onNavOptionHover("affiliate")}
            onTouchStart={() => onNavOptionClicked("affiliate")}
          >
            <p ref={affiliate}>Affiliate</p>
          </button>
          <button
            onMouseEnter={() => onNavOptionHover("support")}
            onClick={() => onNavOptionClicked("support")}
            onFocus={() => onNavOptionHover("support")}
            onTouchStart={() => onNavOptionClicked("support")}
          >
            <p ref={support}>Support</p>
          </button>
          <button
            onMouseEnter={() => onNavOptionHover("learn")}
            onClick={() => onNavOptionClicked("learn")}
            onFocus={() => onNavOptionHover("learn")}
            onTouchStart={() => onNavOptionClicked("learn")}
          >
            <p ref={learn}>Learn</p>
          </button>
          <button
            onMouseEnter={() => onNavOptionHover("contact")}
            onClick={() => onNavOptionClicked("contact")}
            onFocus={() => onNavOptionHover("contact")}
            onTouchStart={() => onNavOptionClicked("contact")}
          >
            <p ref={contact}>Contact Sale</p>
          </button>
        </nav>
        <MenuContainer
          selectedNavOption={selectedNavOption}
          selectedNavOptionPosition={selectedNavOptionPosition}
        />
      </div>
    </header>
  );
};

export default HeaderMy;
