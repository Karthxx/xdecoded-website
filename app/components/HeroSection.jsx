"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const words =
    "Transforming the digital landscape with intelligent, AI-driven solutions.";

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="max-w-6xl sm:my-36 px-8 text-center">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <TextGenerateEffect duration={2} filter={false} words={words} />
        <motion.p variants={childVariants} className="my-6 text-2xl ">
          Elevate your brand with XDecoded, a London-based creative agency
          specialising in integrating cutting-edge artificial intelligence with
          intuitive UX design to create innovative, personalized digital
          experiences.
        </motion.p>
        <motion.button
          variants={childVariants}
          className="relative inline-flex overflow-hidden rounded-full p-[1px] "
        >
          <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
          />
          <span
            className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 backdrop-blur-3xl  text-lg"
          >
            Get Started
          </span>
        </motion.button>
        <motion.div variants={childVariants}>
          <video
            className="mx-auto mt-9 rounded"
            width="600"
            autoPlay
            loop
            muted
          >
            <source
              src="/video/code.mp4"
              type="video/mp4"
              alt="snippet of coding"
            />
          </video>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
