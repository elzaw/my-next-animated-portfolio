"use client";
import { motion } from "framer-motion";
const portfolioPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      portfolioPage
    </motion.div>
  );
};

export default portfolioPage;
