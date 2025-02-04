import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const HorizontalScroll = ({ screens }) => {
  const [page, setPage] = useState({ index: 0, direction: 1 });
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = useCallback(
    (event) => {
      if (isAnimating) return;

      if (event.deltaY > 0 && page.index < screens.length - 1) {
        setPage({ index: page.index + 1, direction: 1 });
        setIsAnimating(true);
      } else if (event.deltaY < 0 && page.index > 0) {
        setPage({ index: page.index - 1, direction: -1 });
        setIsAnimating(true);
      }
    },
    [isAnimating, page.index, screens.length]
  );

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: true });
    return () => window.removeEventListener("wheel", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container">
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setIsAnimating(false)}
      >
        <motion.div
          key={page.index}
          className="screen"
          custom={page.direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {React.createElement(screens[page.index])}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

HorizontalScroll.propTypes = {
  screens: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default HorizontalScroll;
