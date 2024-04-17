import React, { createContext, useEffect, useState } from 'react';
const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [rootData, setRootData] = useState([]);
  const [utilData, setUtilData] = useState([]);
  const [imageStyle, setImageStyle] = useState([]);
  const [csStyleData, setCSStyleData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(1);

  const uri = `${process.env.REACT_APP_WEB_SERVER}`;
  const getStyleData = async (path) => {
    const response = await fetch(
      `${uri}/${process.env.REACT_APP_SERVICE_PATH}/${path}`
    );

    if (response.ok) {
      const result = await response.json();
      if (path === process.env.REACT_APP_ARP_IMAGE) setImageStyle(result);

      path === process.env.REACT_APP_ARP_CS
        ? setCSStyleData(result)
        : path === process.env.REACT_APP_ARP_ROOT
        ? setRootData(result)
        : setUtilData(result);
    } else {
      throw new Error('System Error');
    }
  };
  useEffect(() => {
    getStyleData(process.env.REACT_APP_ARP_ROOT);

    setTimeout(() => {
      getStyleData(process.env.REACT_APP_ARP_IMAGE);
    }, 900);

    setTimeout(() => {
      getStyleData(process.env.REACT_APP_ARP_UTIL);
    }, 1800);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <>
      <ServiceContext.Provider
        value={{
          uri,
          rootData,
          utilData,
          imageStyle,
          csStyleData,
          getStyleData,
          isDarkMode,
          toggleTheme,
        }}
      >
        {children}
      </ServiceContext.Provider>
    </>
  );
};

export { ServiceContext, ServiceProvider };
