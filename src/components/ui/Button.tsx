import type { ButtonHTMLAttributes } from 'react'
import { Link } from 'react-router'

type Variant = 'primary' | 'secondary' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variantStyles: Record<Variant, string> = {
  primary: 'bg-tulip-600 text-white hover:bg-tulip-700 focus:ring-tulip-500',
  secondary: 'bg-leaf-600 text-white hover:bg-leaf-700 focus:ring-leaf-500',
  outline: 'border-2 border-tulip-600 text-tulip-600 hover:bg-tulip-50 focus:ring-tulip-500',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  to?: string
}

export default function Button({ variant = 'primary', size = 'md', to, className = '', children, ...props }: ButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
