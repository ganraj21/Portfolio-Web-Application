import React, { createContext, useEffect, useState } from 'react';
const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {
  const uri = 'https://port-web-app.onrender.com/local-privatedata';
  const [rootData, setRootData] = useState([]);
  const [utilData, setUtilData] = useState([]);
  const [csStyleData, setCSStyleData] = useState([]);

  const getStyleData = async (path) => {
    const response = await fetch(`${uri}/${path}`);

    if (response.ok) {
      const result = await response.json();
      path === 'SCStyle'
        ? setCSStyleData(result)
        : path === 'RootStyle'
        ? setRootData(result)
        : setUtilData(result);
    } else {
      throw new Error('System Error');
    }
  };
  useEffect(() => {
    getStyleData('RootStyle');

    setTimeout(() => {
      getStyleData('UtilStyle');
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
