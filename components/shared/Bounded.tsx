import React from "react"

import { cn } from "@/lib/utils"

type BoundedProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp
        ref={ref}
        className={cn("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
        {...restProps}
      >
        <div className="w-full mx-auto max-w-7xl">{children}</div>
      </Comp>
    )
  }
)

// Set a display name for the component
Bounded.displayName = "Bounded"

export default Bounded
