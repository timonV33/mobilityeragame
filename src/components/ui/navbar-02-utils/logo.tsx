import Image from "next/image";

export const Logo = () => {
  return (
    <a href="#" className="flex items-center gap-2.5 select-none group" aria-label="Mobility Era">
      <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
        <Image
          src="/images/globe-logo.png"
          alt="Mobility Era Globe"
          fill
          priority
          unoptimized
          className="object-contain transition-transform group-hover:scale-105"
        />
      </div>
      <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#0f172a]">
        Mobility Era
      </span>
    </a>
  );
};
