import { motion } from "framer-motion";

export default function Banner() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-32 overflow-hidden"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("/assets/menu-images/WhatsApp Image 2025-02-01 at 6.33.39 PM.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
    </motion.div>
  );
}
