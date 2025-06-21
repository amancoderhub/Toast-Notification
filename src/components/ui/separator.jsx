import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

/**
 * Separator component
 *
 * A thin, styled divider line using Radix UI's `Separator` primitive.
 * Can be horizontal or vertical.
 *
 * Props:
 * - `orientation`: "horizontal" (default) or "vertical"
 * - `decorative`: true (default) - tells screen readers to ignore it
 * - `className`: additional utility classes
 */

const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border", // Common styling
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", // Orientation-based style
        className,
      )}
      {...props}
    />
  )
);

Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
