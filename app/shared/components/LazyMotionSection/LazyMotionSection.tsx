import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LazyMotionSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) setShow(true);
    if (!inView) setShow(false);
  }, [inView]);

  return (
    <div ref={ref}>
      {show && (
        <motion.div
          initial={{ opacity: 0.5, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
