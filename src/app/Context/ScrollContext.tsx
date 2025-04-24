'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ScrollContextProps {
    scrollY: number;
    windowHeight: number;
}

function debounce<T extends (...args: any[]) => void>(
    func: T,
    wait: number
): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(1);

    useEffect(() => {
        // スクロール可能な要素を取得
        const scrollableElement = document.querySelector('.overflow-y-scroll');

        if (!scrollableElement) {
            console.error("スクロール可能な要素が見つかりませんでした。");
            return;
        }

        const handleScroll = debounce(() => {
            const newScrollY = scrollableElement.scrollTop; // 要素のスクロール位置を取得
            setScrollY(newScrollY);
        }, 16); // 約60fps

        const handleResize = debounce(() => {
            setWindowHeight(window.innerHeight);
        }, 100);

        handleResize();
        
        // イベントを登録
        scrollableElement.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        

        return () => {
            scrollableElement.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{ scrollY, windowHeight }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScroll() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error('useScroll must be used within a ScrollProvider');
    }
    return context;
}
