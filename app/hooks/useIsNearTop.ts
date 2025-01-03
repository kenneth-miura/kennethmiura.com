import {useState, useEffect, } from "react";
import lodash from "lodash";


const useIsNearTop = (tolerance: number) => {
    const [isNearTop, setIsNearTop] = useState(window.scrollY < tolerance);

    const handleScroll = () => {
        if(window.scrollY <tolerance){
            setIsNearTop(true);
        }
        else {
            setIsNearTop(false);
        }
    };

    const debouncedHandleScroll = lodash.debounce(handleScroll, 100);

    useEffect(() => {
        window.addEventListener('scroll', debouncedHandleScroll);
        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll);
        }
    }, [debouncedHandleScroll]);


    return isNearTop;
};

export default useIsNearTop;