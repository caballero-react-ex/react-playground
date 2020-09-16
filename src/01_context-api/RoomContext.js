import React, { createContext, useState } from 'react';

export const RoomContext = createContext();

function RoomStore({children}) {

  const [ isLit, setLit ] = useState(false);
  const toggleLight = () => {
    setLit(!isLit);
  }

  return (
    <RoomContext.Provider
      value={{
        isLit,
        onToggleLight: toggleLight 
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}

export default RoomStore;