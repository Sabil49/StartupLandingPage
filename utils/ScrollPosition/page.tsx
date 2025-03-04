'use client'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedHeader() {

  const { scrollYProgress } = useScroll();

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]); // Opacity fades out after scrolling 20%



  return (

    <motion.header className=" sticky top-0" style={{ opacity: headerOpacity }}>

      <div style={{width:'100%',height:'100px',background:'red'}}>sdd</div>

    </motion.header>

  );

}
