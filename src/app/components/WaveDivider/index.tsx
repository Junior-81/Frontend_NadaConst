"use client";
import React from "react";

interface WaveDividerProps {
    variant?: 'top' | 'bottom' | 'both';
    color?: 'blue' | 'purple' | 'green' | 'gray';
    height?: 'sm' | 'md' | 'lg';
    flip?: boolean;
}

export default function WaveDivider({
    variant = 'bottom',
    color = 'blue',
    height = 'md',
    flip = false
}: WaveDividerProps) {

    const colorClasses = {
        blue: 'fill-blue-600',
        purple: 'fill-purple-600',
        green: 'fill-green-600',
        gray: 'fill-gray-600'
    };

    const heightClasses = {
        sm: 'h-16',
        md: 'h-24',
        lg: 'h-32'
    };

    const WaveShape = ({ className }: { className?: string }) => (
        <svg
            className={`w-full ${heightClasses[height]} ${className}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                className={colorClasses[color]}
            />
        </svg>
    );

    const FlowingWave = ({ className }: { className?: string }) => (
        <svg
            className={`w-full ${heightClasses[height]} ${className}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className={colorClasses[color]}
            />
        </svg>
    );

    const GeometricWave = ({ className }: { className?: string }) => (
        <svg
            className={`w-full ${heightClasses[height]} ${className}`}
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className={colorClasses[color]}
            />
        </svg>
    );

    if (variant === 'both') {
        return (
            <div className="relative">
                <div className={flip ? 'rotate-180' : ''}>
                    <WaveShape />
                </div>
                <div className={flip ? '' : 'rotate-180'}>
                    <FlowingWave />
                </div>
            </div>
        );
    }

    if (variant === 'top') {
        return (
            <div className={flip ? 'rotate-180' : ''}>
                <GeometricWave />
            </div>
        );
    }

    return (
        <div className={flip ? 'rotate-180' : ''}>
            <WaveShape />
        </div>
    );
}

// Variante com gradiente animado
export function AnimatedWaveDivider({
    variant = 'bottom',
    height = 'md'
}: Omit<WaveDividerProps, 'color'>) {

    const heightClasses = {
        sm: 'h-16',
        md: 'h-24',
        lg: 'h-32'
    };

    return (
        <div className="relative overflow-hidden">
            <svg
                className={`w-full ${heightClasses[height]}`}
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="50%" stopColor="#8B5CF6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                    <animate
                        attributeName="x1"
                        values="0%;100%;0%"
                        dur="8s"
                        repeatCount="indefinite"
                    />
                </defs>
                <path
                    d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                    fill="url(#waveGradient)"
                    className={variant === 'top' ? 'rotate-180' : ''}
                />
            </svg>
        </div>
    );
}
