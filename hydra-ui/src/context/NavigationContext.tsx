import React, { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from 'react';

interface NavigationContextType {
  navigationKey: NavigationEnv; // Correctly specify NavigationEnv type here
  setNavigationKey: Dispatch<SetStateAction<NavigationEnv>>;
}

export enum NavigationEnv {
  DEV = 'DEV',
  UAT = 'UAT',
  PROD = 'PROD',
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [navigationKey, setNavigationKey] = useState(NavigationEnv.DEV);

  return (
    <NavigationContext.Provider value={{ navigationKey, setNavigationKey }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};