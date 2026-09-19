import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md",
        belizeBlue: "bg-belize-blue text-white shadow-sm hover:bg-belize-blue/90 hover:shadow-lg hover:-translate-y-0.5",
        belizeGreen: "bg-belize-green text-white shadow-sm hover:bg-belize-green/90 hover:shadow-lg hover:-translate-y-0.5",
        belizeTeal: "bg-belize-teal text-white shadow-sm hover:bg-belize-teal/90 hover:shadow-lg hover:-translate-y-0.5",
        belizeCoral: "bg-belize-coral text-white shadow-sm hover:bg-belize-coral/90 hover:shadow-lg hover:-translate-y-0.5",
        belizeGradient:
          "bg-gradient-to-r from-belize-green to-belize-teal text-white shadow-md hover:shadow-glow hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        outlineBelize:
          "border-2 border-belize-green text-belize-green hover:bg-belize-green hover:text-white",
        outlineBlue:
          "border-2 border-belize-blue text-belize-blue hover:bg-belize-blue hover:text-white",
        outlineTeal:
          "border-2 border-belize-teal text-belize-teal hover:bg-belize-teal hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "rounded-lg hover:bg-accent hover:text-accent-foreground",
        link: "rounded-none text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
