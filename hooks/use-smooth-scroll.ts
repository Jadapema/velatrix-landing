"use client";

import { useCallback, useEffect } from 'react';

interface UseSmoothScrollOptions {
    offset?: number;
    onScroll?: () => void;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
    const { offset = 80, onScroll } = options;

    // Handle all anchor links to use smooth scrolling
    useEffect(() => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;

        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            
            // Only process anchor tags with hash links
            if (!anchor || !anchor.hash || !anchor.href.includes('#')) return;
            
            const id = anchor.hash.substring(1);
            const element = document.getElementById(id);
            
            if (element) {
                e.preventDefault();
                window.scrollTo({
                    top: element.offsetTop - offset,
                    behavior: 'smooth'
                });
                
                if (onScroll) {
                    onScroll();
                }
            }
        };
        
        document.addEventListener('click', handleAnchorClick);
        
        return () => {
            document.removeEventListener('click', handleAnchorClick);
        };
    }, [offset, onScroll]);

    const scrollToElement = useCallback((id: string) => {
        if (typeof window === 'undefined' || typeof document === 'undefined') return;
        
        const element = document.getElementById(id);

        if (element) {
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });

            if (onScroll) {
                onScroll();
            }
        }
    }, [offset, onScroll]);

    const handleLinkClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        scrollToElement(id);
    }, [scrollToElement]);

    return {
        scrollToElement,
        handleLinkClick
    };
}
