import React, { useContext, useState, useEffect } from "react";

const AmazonContext = React.createContext();

export function useAmazonContext() {
  return useContext(AmazonContext);
}

export function AmazonContextProvider(props) {
  //Alt konteynerin açılması ve kapatılmasından sorumludur
  const [subContainer, setSubContainer] = useState(false);
  //SubContainers girişlerini saklamaktan sorumludur
  const [subContainerEntries, setSubContainerEntries] = useState(null);
  //Gezinti çubuğuna giren tüm verileri tutar
  const [entryStore, setEntryStore] = useState(null);

  useEffect(() => {
    fetch("http://200126984.cs2410-web01pvm.aston.ac.uk/react-amazon-navbar/")
      .then((data) => data.json())
      .then((response) => {
        setEntryStore(response);
      });
  }, []);

  const value = {
    subContainer,
    setSubContainer,
    subContainerEntries,
    setSubContainerEntries,
    entryStore,
    setEntryStore,
  };

  return (
    <AmazonContext.Provider value={value}>
      {props.children}
    </AmazonContext.Provider>
  );
}
