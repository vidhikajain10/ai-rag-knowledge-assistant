import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#04060B]">
      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -120, 120, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "linear",
        }}
        className="absolute top-10 left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 150, -80, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[160px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
          linear-gradient(#3b82f6 1px, transparent 1px),
          linear-gradient(90deg,#3b82f6 1px,transparent 1px)
        `,
          backgroundSize: "45px 45px",
        }}
      />
    </div>
  );
}