import React from 'react';

interface MediumIconProps {
    className?: string;
}

const MediumIcon: React.FC<MediumIconProps> = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
        strokeWidth="2"
        className={className}
    >
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
        <path d="M8 9h1l3 3l3 -3h1"></path>
        <path d="M8 15l2 0"></path>
        <path d="M14 15l2 0"></path>
        <path d="M9 9l0 6"></path>
        <path d="M15 9l0 6"></path>
    </svg>
);

export default MediumIcon;
