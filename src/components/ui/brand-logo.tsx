import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
<<<<<<< HEAD
  showBranch?: boolean;
=======
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
  orientation?: "horizontal" | "vertical";
  priority?: boolean;
}

const sizeMap = {
  sm: {
<<<<<<< HEAD
    height: 30,
    width: 75,
    branchText: "text-[10px] font-bold tracking-wider px-1.5 py-0.5",
  },
  md: {
    height: 44,
    width: 110,
=======
    height: 28,
    width: 71,
    branchText: "text-[10px] font-bold tracking-wider px-1.5 py-0.5",
  },
  md: {
    height: 42,
    width: 106,
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
    branchText: "text-xs font-bold tracking-wider px-2 py-0.5",
  },
  lg: {
    height: 64,
<<<<<<< HEAD
    width: 160,
=======
    width: 162,
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
    branchText: "text-xs font-bold tracking-wider px-2.5 py-1",
  },
  xl: {
    height: 84,
<<<<<<< HEAD
    width: 210,
=======
    width: 212,
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
    branchText: "text-sm font-bold tracking-wider px-3 py-1",
  },
};

export function BrandLogo({
  className,
  size = "md",
  orientation,
<<<<<<< HEAD
  showBranch = false,
=======
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
  priority = false,
}: BrandLogoProps) {
  const config = sizeMap[size];
  const isHorizontal = orientation === "horizontal" || (orientation === undefined && size === "sm");

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center",
        isHorizontal ? "flex-row gap-2" : "flex-col gap-2",
        className,
      )}
    >
      {/* Official Senco Gold & Diamonds Logo */}
<<<<<<< HEAD
      <div className="relative flex shrink-0 items-center justify-center rounded-lg bg-white px-2 py-1 shadow-sm border border-neutral-200/80 transition-transform duration-200 hover:scale-[1.02]">
=======
      <div className="relative flex shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm border border-neutral-200/80 transition-transform duration-200 hover:scale-[1.02]">
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
        <Image
          src="/senco-logo.png"
          alt="Senco Gold & Diamonds"
          width={config.width}
          height={config.height}
          priority={priority}
          style={{ width: "auto", height: `${config.height}px` }}
          className="object-contain"
        />
      </div>

<<<<<<< HEAD
      {showBranch && (
        <span
          className={cn(
            "rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-600/30 uppercase shrink-0 font-sans",
            config.branchText,
          )}
        >
          (Balichak)
        </span>
      )}
=======
      {/* Mention under bracket: (Balichak) */}
      <span
        className={cn(
          "rounded-full bg-red-600/10 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-600/30 uppercase shrink-0 font-sans",
          config.branchText,
        )}
      >
        (Balichak)
      </span>
>>>>>>> 4e86411c8923c66fd1435c65ac974fa5abcf29ec
    </div>
  );
}
