import React from 'react';
import styled from "styled-components";
import {DRAWER_WIDTH, MULTI_DRAWER_WIDTH} from "../../constants";


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const CommonContext = React.createContext({});

export const CommonProvider = ({drawerOpened, setDrawerOpened, children}) => {

  return (
    <CommonContext.Provider
      value={{
        drawerOpened,
        setDrawerOpened
      }}>
       <Wrapper>
           { children }
       </Wrapper>
    </CommonContext.Provider>
  );
};

export function useCommon() {
  const context = React.useContext(CommonContext);

  if (context === undefined) {
    throw new Error('useCommon must be used within an CommonProvider');
  }

  return context;
}

export function useDrawerOpened() {
  const context = useCommon();

  return context.drawerOpened;
}

export function useSetDrawerOpened() {
  const context = useCommon();
  return context.setDrawerOpened;
}
