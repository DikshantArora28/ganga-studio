import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getWhatsAppLink(message?: string) {
  const text = message || 'Hi, I visited your website and have a photoshoot requirement.'
  return `https://wa.me/919711384088?text=${encodeURIComponent(text)}`
}
