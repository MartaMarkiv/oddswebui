import React, { useState } from 'react';
import styled from "styled-components";
import {DRAWER_WIDTH, MULTI_DRAWER_WIDTH} from "../../constants";


const Wrapper = styled.div`
  transition: width 0.3s;
  width: ${({drawerOpened, space}) => drawerOpened ? 'calc(100% - ' + space + 'px)' : '100%'};
  height: 100%;
`;

const CommonContext = React.createContext({});

export const CommonProvider = ({fullFeed, children}) => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <CommonContext.Provider
      value={{
        drawerOpened,
        setDrawerOpened
      }}>
       <Wrapper drawerOpened={drawerOpened} space={fullFeed ? MULTI_DRAWER_WIDTH : DRAWER_WIDTH}>
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
