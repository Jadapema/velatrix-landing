import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const LandingLinks = {
  watchitMovie: {
    name: 'WatchitMovie',
    link: 'https://link.watchit.movie/velatrix_landing_watchit_link',
  },
  github: {
    name: 'Github',
    link: 'https://link.watchit.movie/velatrix_landing_github_link',
  },
  x: {
    name: 'X',
    link: 'https://link.watchit.movie/velatrix_landing_x_link',
  },
  xSynapse: {
    name: 'X Synapse',
    link: 'https://link.watchit.movie/velatrix_landing_synapse_x_link',
  },
  medium: {
    name: 'Medium',
    link: 'https://link.watchit.movie/velatrix_landing_medium_link',
  },
  linkedin: {
    name: 'Linkedin',
    link: 'https://link.watchit.movie/velatrix_landing_linkedin_link',
  },
}

// For TypeScript type safety
export type LandingLinkKey = keyof typeof LandingLinks;
