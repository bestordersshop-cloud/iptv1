import { motion, AnimatePresence } from 'motion/react';
import { X, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string | null;
}

export default function CheckoutModal({ isOpen, onClose, checkoutUrl }: CheckoutModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!checkoutUrl) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[1000] bg-black/80 backdrop-blur-sm"
          />

          {/* Modal — full screen on mobile, centered card on larger screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-[1001] flex items-end sm:items-center justify-center sm:p-4 pointer-events-none"
          >
            <div className="bg-[#F4F4F1] w-full sm:max-w-[600px] h-[92vh] sm:h-[80vh] rounded-t-3xl sm:rounded-2xl overflow-hidden relative shadow-2xl sm:border-2 sm:border-black pointer-events-auto">
              {/* Header/Close */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-black/10 bg-[#F4F4F1]">
                <span className="text-black/50 text-xs font-bold uppercase tracking-widest">Secure Checkout</span>
                <button
                  onClick={onClose}
                  className="p-2 text-black/50 hover:text-[#ff4d4d] transition-colors rounded-lg hover:bg-black/5"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Loading State */}
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#F4F4F1] z-10">
                  <Loader2 className="w-8 h-8 animate-spin text-brand mb-2" />
                  <p className="text-black/40 font-bold text-xs uppercase tracking-widest">Loading Checkout...</p>
                </div>
              )}

              {/* Iframe */}
              <iframe
                src={checkoutUrl}
                className="w-full h-[calc(100%-48px)] border-none"
                onLoad={() => setIsLoading(false)}
                title="Gumroad Checkout"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
