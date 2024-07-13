import { createContext, useState, useContext } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
    const [scrollToSection, setScrollToSection] = useState("/");
    
    return (
        <ScrollContext.Provider value={{ scrollToSection, setScrollToSection }}>
        {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = () => useContext(ScrollContext);
