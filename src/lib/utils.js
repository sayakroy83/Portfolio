import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs) => { //combining multiple class names dynamically, 
// especially when some of them are conditional, and to avoid Tailwind class conflicts.
    return twMerge(clsx(inputs))
};