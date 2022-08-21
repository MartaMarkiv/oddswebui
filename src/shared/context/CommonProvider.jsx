import React, { useState } from 'react';
import styled from "styled-components";
import {DRAWER_WIDTH} from "../../constants";


const Wrapper = styled.div`
  transition: width 0.3s;
  width: ${({drawerOpened}) => drawerOpened ? 'calc(100% - ' + DRAWER_WIDTH + 'px)' : '100%'};
`;

const CommonContext = React.createContext({});

export const CommonProvider = ({children}) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        drawerOpened,
        setDrawerOpened
      }}>
       <Wrapper drawerOpened={drawerOpened}>
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