
'use client';

import { useLoading } from '@/hooks/use-loading-store';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingBar() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed top-0 left-0 w-full h-1 bg-primary z-[100]"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute top-0 right-0 h-full bg-primary/50"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 10, ease: 'linear' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
