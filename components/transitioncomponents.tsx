"use client"

import { fadeIn } from "@/utils/motion-transitions"
import { motion } from "framer-motion"

interface MotionTransitionProops{
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}
const MotionTransition = (proops: MotionTransitionProops)=>{
    const {children, position, className} = proops
    return (
        <motion.div 
        variants={fadeIn(position)}
        initial= "hidden"
        animate= "visible"
        exit = " hidden"
        className={className}
        >
            {children}
        </motion.div>
    )
}

export default MotionTransition;