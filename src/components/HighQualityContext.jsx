import React, { createContext, useState, useEffect } from "react";

export const HighQualityContext = createContext();

export const HighQualityProvider = ({ children }) => {
  const [readyForHighQuality, setReadyForHighQuality] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setReadyForHighQuality(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <HighQualityContext.Provider value={readyForHighQuality}>
      {children}
    </HighQualityContext.Provider>
  );
};