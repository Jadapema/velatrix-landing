import React from 'react';
import { cn } from '@/lib/utils';

interface GradientDividerProps {
    color?: string;
    className?: string;
    thickness?: number;
}

const GradientDivider = ({
                             color = "from-transparent via-velatrix-blue/50 to-transparent",
                             className,
                             thickness = 1
                         }: GradientDividerProps) => {
    return (
        <div
            className={cn(
                `w-full h-px bg-gradient-to-r ${color}`,
                thickness > 1 && `h-[${thickness}px]`,
                className
            )}
        />
    );
};

export default GradientDivider;
