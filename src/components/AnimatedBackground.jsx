import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function AnimatedBackground() {
  // Floating orb animation variants
  const floatingVariants = {
    animate: (custom) => ({
      y: [0, -30, 0],
      x: [0, custom.offsetX, 0],
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    }),
  };

  // Rotating shapes animation
  const rotatingVariants = {
    animate: (custom) => ({
      rotate: custom.direction === "cw" ? 360 : -360,
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    }),
  };

  // Pulsing animation
  const pulsingVariants = {
    animate: {
      opacity: [0.15, 0.35, 0.15],
      scale: [1, 1.1, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -1,
      }}
    >
      {/* Main animated gradient background */}
      <MotionBox
        animate={{
          background: [
            "linear-gradient(135deg, rgba(160,82,61,0.06) 0%, rgba(250,248,245,1) 100%)",
            "linear-gradient(135deg, rgba(160,82,61,0.08) 0%, rgba(250,248,245,1) 100%)",
            "linear-gradient(135deg, rgba(160,82,61,0.06) 0%, rgba(250,248,245,1) 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Top-left floating orb */}
      <MotionBox
        custom={{ offsetX: 40, duration: 6, delay: 0 }}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160, 82, 61, 0.12), transparent 70%)",
          top: { xs: "-80px", md: "-100px" },
          left: { xs: "-80px", md: "-120px" },
          filter: "blur(60px)",
          zIndex: 1,
        }}
      />

      {/* Right floating orb */}
      <MotionBox
        custom={{ offsetX: -50, duration: 7, delay: 0.5 }}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 180, md: 300 },
          height: { xs: 180, md: 300 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160, 82, 61, 0.1), transparent 70%)",
          top: { xs: "20%", md: "10%" },
          right: { xs: "-80px", md: "-100px" },
          filter: "blur(70px)",
          zIndex: 1,
        }}
      />

      {/* Bottom floating orb */}
      <MotionBox
        custom={{ offsetX: 35, duration: 8, delay: 1 }}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160, 82, 61, 0.08), transparent 70%)",
          bottom: { xs: "-100px", md: "-150px" },
          left: { xs: "10%", md: "15%" },
          filter: "blur(80px)",
          zIndex: 1,
        }}
      />

      {/* Right-bottom floating orb */}
      <MotionBox
        custom={{ offsetX: -40, duration: 7.5, delay: 1.5 }}
        variants={floatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 160, md: 280 },
          height: { xs: 160, md: 280 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(160, 82, 61, 0.09), transparent 70%)",
          bottom: { xs: "-60px", md: "-80px" },
          right: { xs: "-60px", md: "-100px" },
          filter: "blur(75px)",
          zIndex: 1,
        }}
      />

      {/* Subtle pulsing accent orb */}
      <MotionBox
        variants={pulsingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 120, md: 200 },
          height: { xs: 120, md: 200 },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(74, 42, 46, 0.06), transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "blur(50px)",
          zIndex: 0,
        }}
      />

      {/* Animated mesh grid overlay */}
      <MotionBox
        animate={{
          opacity: [0.02, 0.04, 0.02],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(160, 82, 61, 0.02) 25%, rgba(160, 82, 61, 0.02) 26%, transparent 27%, transparent 74%, rgba(160, 82, 61, 0.02) 75%, rgba(160, 82, 61, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(160, 82, 61, 0.02) 25%, rgba(160, 82, 61, 0.02) 26%, transparent 27%, transparent 74%, rgba(160, 82, 61, 0.02) 75%, rgba(160, 82, 61, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: "50px 50px",
          zIndex: 0,
        }}
      />

      {/* Decorative rotating rings */}
      <MotionBox
        custom={{ duration: 20, direction: "cw" }}
        variants={rotatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 300, md: 500 },
          height: { xs: 300, md: 500 },
          top: "50%",
          left: "-10%",
          transform: "translateY(-50%)",
          border: "1px solid rgba(160, 82, 61, 0.08)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      <MotionBox
        custom={{ duration: 25, direction: "ccw" }}
        variants={rotatingVariants}
        animate="animate"
        sx={{
          position: "absolute",
          width: { xs: 400, md: 700 },
          height: { xs: 400, md: 700 },
          top: "50%",
          right: "-15%",
          transform: "translateY(-50%)",
          border: "1px solid rgba(160, 82, 61, 0.06)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
    </Box>
  );
}