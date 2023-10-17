import { createContext } from 'react';

import { Button as LocalButton } from './Button';

const DataContext = createContext(null);

const data = {
  key: () => {
    console.log('provider function test');
  },
  name: 'buttonName',
};

function DataProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

function Provider() {
  return (
    <>
      <DataContext.Provider value={data}>
        <LocalButton />
      </DataContext.Provider>
      abstracted as a HOC
      <DataProvider>
        <LocalButton />
      </DataProvider>
    </>
  );
}

export { DataContext };
export default Provider;
