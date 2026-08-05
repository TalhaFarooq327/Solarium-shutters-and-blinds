import { X as CloseIcon } from "lucide-react";

export default function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-charcoal/90 p-6 backdrop-blur-sm animate-fade-in"
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full bg-background/10 text-white ring-1 ring-white/30 hover:bg-background/20"
      >
        <CloseIcon className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt=""
        className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain shadow-2xl"
      />
    </div>
  );
}
