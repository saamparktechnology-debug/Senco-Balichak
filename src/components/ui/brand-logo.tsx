import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  showBranch?: boolean;
  orientation?: "horizontal" | "vertical";
  priority?: boolean;
}

const sizeMap = {
  sm: {
    height: 30,
    width: 75,
    branchText: "text-[10px] font-bold tracking-wider px-1.5 py-0.5",
  },
  md: {
    height: 44,
    width: 110,
    branchText: "text-xs font-bold tracking-wider px-2 py-0.5",
  },
  lg: {
    height: 64,
    width: 160,
    branchText: "text-xs font-bold tracking-wider px-2.5 py-1",
  },
  xl: {
    height: 84,
    width: 210,
    branchText: "text-sm font-bold tracking-wider px-3 py-1",
  },
};

export function BrandLogo({
  className,
  size = "md",
  orientation,
  showBranch = false,
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
      <div className="relative flex shrink-0 items-center justify-center rounded-lg bg-white px-2 py-1 shadow-sm border border-neutral-200/80 transition-transform duration-200 hover:scale-[1.02]">
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
    </div>
  );
}
