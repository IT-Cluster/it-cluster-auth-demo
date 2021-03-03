import React, { useState, useEffect } from "react";
import './Loader.css';

const Loader = ({ text = 'Завантаження...', textDelay = 1000 }) => {
    const [textVisible, setTextVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setTextVisible(true), textDelay);
        return () => clearTimeout(timeout);
    }, [textDelay, setTextVisible]);

    return (
        <>
            <div className="loader" />
            {text && textVisible && <div className="loader-text">{text}</div>}
        </>
    );
};

export default Loader;
