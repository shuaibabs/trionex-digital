
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useLoading } from '@/hooks/use-loading-store';
import GalaxyLoader from './galaxy-loader';

export function GlobalLoader() {
  const { isLoading } = useLoading();

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <GalaxyLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
