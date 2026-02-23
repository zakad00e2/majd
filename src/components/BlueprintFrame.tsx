import { ReactNode } from "react";

interface BlueprintFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Decorative blueprint-style frame with corner brackets.
 * Wraps content in a thin gold-bordered box with corner accents.
 */
export default function BlueprintFrame({ children, className = "" }: BlueprintFrameProps) {
  return (
    <div className={`blueprint-frame p-6 md:p-8 ${className}`}>
      {children}
    </div>
  );
}
