import { useState } from 'react';
import context from './Context';

function Provider({ children }) {
  const [user, setUser] = useState();


  const value = {
    user,
    setUser,
  };

  return (
    <context.Provider value={ value }>
      {children}
    </context.Provider>
  );
}

export default Provider;