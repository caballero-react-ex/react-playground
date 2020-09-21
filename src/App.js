import React from 'react';
import CartApp from './02_cart-project/CartApp';
import WindowDimensionsProvider from './03-responsive-react/components/hooks/WindowDimensionsProvider';
import {BreakpointProvider} from './03-responsive-react/components/hooks/MatchMediaHook';
// import Content from './03-responsive-react/components/Content';
import ContentMatchMedia from './03-responsive-react/components/ContentMatchMedia';
import ContentWithCSSModules from './04_css-modules-breakpoints/ContentWithCSSModules';

const queries = {
  mobile: '(max-width: 520px)',
  tablet: '(min-width: 521px) and (max-width: 1023px)',
  desktop: '(min-width: 1024px)',
  bigDesktop: '(min-width: 1025px)',
  //or: '(orientation: portrait)', // we can check orientation also
}

function App() {

  return (
    <>
      <BreakpointProvider queries={queries}>
    
      {/* /// RESPONSIVE REACT ///  */}
        <ContentMatchMedia />
      </BreakpointProvider>

      <ContentWithCSSModules />
      
    </>
    
  );
}

export default App;
