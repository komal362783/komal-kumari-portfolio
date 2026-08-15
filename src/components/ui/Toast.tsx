import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-[#0E1524] border border-cyan-500/30 text-slate-100 rounded-xl shadow-2xl backdrop-blur-xl max-w-sm"
        >
          {type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />}
          {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />}
          {type === 'info' && <Info className="w-5 h-5 text-cyan-400 flex-shrink-0" />}

          <p className="text-sm font-medium pr-2 text-slate-200">{message}</p>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-200 transition-colors p-1 -mr-1"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
