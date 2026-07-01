import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GoldButtonProps {
  href: string
  children: React.ReactNode
  variant?: 'filled' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  onClick?: () => void
}

export default function GoldButton({ href, children, variant = 'filled', size = 'md', className, external, onClick }: GoldButtonProps) {
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-4 text-base',
  }

  const variants = {
    filled: 'bg-gold text-primary hover:bg-gold-light hover:shadow-lg hover:shadow-gold/30',
    outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-primary',
    ghost: 'text-gold hover:text-gold-light underline underline-offset-4',
  }

  const cls = cn(
    'inline-flex items-center gap-2 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5',
    sizes[size],
    variants[variant],
    className
  )

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls} onClick={onClick}>{children}</a>
  }
  return <Link href={href} className={cls} onClick={onClick}>{children}</Link>
}
