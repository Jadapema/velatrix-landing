import { useCallback } from 'react';

interface UseSmoothScrollOptions {
    offset?: number;
    onScroll?: () => void;
}

export function useSmoothScroll(options: UseSmoothScrollOptions = {}) {
    const { offset = 80, onScroll } = options;

    const scrollToElement = useCallback((id: string) => {
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
