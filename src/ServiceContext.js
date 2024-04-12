import React, { createContext, useEffect, useState } from 'react';
const ServiceContext = createContext();

const ServiceProvider = ({ children }) => {
  const [rootData, setRootData] = useState([]);
  const [utilData, setUtilData] = useState([]);
  const [csStyleData, setCSStyleData] = useState([]);

  const getStyleData = async (path) => {
    const response = await fetch(`${process.env.REACT_APP_WEB_SERVER}/${path}`);

    if (response.ok) {
      const result = await response.json();
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
      getStyleData(process.env.REACT_APP_ARP_UTIL);
    }, 900);
  }, []);

  return (
    <>
      <ServiceContext.Provider
        value={{ rootData, utilData, csStyleData, getStyleData }}
      >
        {children}
      </ServiceContext.Provider>
    </>
  );
};

export { ServiceContext, ServiceProvider };
