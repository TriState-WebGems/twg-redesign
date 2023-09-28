'use client'

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Types
type AnimatedRoutesProps = {
    children: React.ReactNode;
};


const AnimatedRoutes = ({ children }: AnimatedRoutesProps) => {
    return (
        <motion.div
            key={usePathname()}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
                pageInitial: {
                    opacity: 0,
                },
                pageAnimate: {
                    opacity: 1,
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedRoutes;
