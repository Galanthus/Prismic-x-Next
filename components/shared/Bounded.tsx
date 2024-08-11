import React from "react"

type BoundedProps = {
  as?: React.ElementType
  className?: string
  children: React.ReactNode
}

const Bounded = React.forwardRef<HTMLElement, BoundedProps>(
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    return (
      <Comp ref={ref} className={className} {...restProps}>
        <div className="w-full mx-auto max-w-7xl">{children}</div>
      </Comp>
    )
  }
)

// Set a display name for the component
Bounded.displayName = "Bounded"

export default Bounded
