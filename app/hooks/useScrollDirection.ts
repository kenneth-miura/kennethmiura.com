import {useCallback, useEffect, useState} from "react";

export default function useScrollDirection(){
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up' | 'no-scroll'>('no-scroll');
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);

    const handleScroll = useCallback(() => {
        if(window.scrollY > lastScrollY) {
            setScrollDirection('down');
        }
        else if(window.scrollY < lastScrollY) {
            setScrollDirection('up');
        }
        else {
            setScrollDirection('no-scroll');
        }
        setLastScrollY(window.scrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    return scrollDirection;

}