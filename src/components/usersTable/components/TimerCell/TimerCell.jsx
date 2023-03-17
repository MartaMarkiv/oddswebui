import React, { useState, useEffect} from "react";
import { TimeWrapper } from "./styles";

export const TimerCell = ({sessionTime}) => {

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const getTime = () => {
        const time = Date.now() - sessionTime;
    
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
    };

    useEffect(() => {
        getTime();
        const interval = setInterval(() => getTime(), 1000 * 60);
    
        return () => clearInterval(interval);
    }, []);
    
    return <TimeWrapper>
        { hours }h { minutes }m
    </TimeWrapper>
}