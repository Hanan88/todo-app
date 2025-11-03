import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};
export default function Modal({ isOpen, onClose, title, children }: ModalProps) {

  if (!isOpen) return null;

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl font-bold"
        >
          ×
        </button>

        {title && <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>}

        {children}
      </div>
    </div>
  );
};
