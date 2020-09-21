import React from 'react';
import './Content.css';
import { useWindowDimensions } from './hooks/WindowDimensionsProvider';


function Content() {

  const { width } = useWindowDimensions();

  // const breakpointMobile = 500;
  const breakpointTablet = 600; // bigger thatn 500 --> tablet
  const breakpointDesktop = 900; // bigger than 1200 --> desktop


  const getDeviceConfig = (width) => {
    if(width < 520) {
      return 'xs';
    } else if(width >= 520 && width < 720 ) {
      return 'sm';
    } else if(width >= 720 && width < 1024) {
      return 'md';
    } else if(width >= 1024) {
      return 'lg';
    }
  };

  const getDeviceBreakpoints = (width) => {
    if(width < 520) {
      return 'mobile';
    } else if(width >= 520 && width < 720 ) {
      return 'tablet';
    } else if(width >= 720 && width < 1024) {
      return 'desktop';
    } else if(width >= 1024) {
      return 'big-desktop';
    }
  }

  return (
    <div className="content">
      The width of this page is {width}px
      <h1>The layout width is {getDeviceBreakpoints(width)}</h1>

      <h2>
        {
          getDeviceBreakpoints(width) === 'mobile' &&
            <div className="content-mobile">MOBILE VIEW</div>
        }
      </h2>
      <h2>
        {
          getDeviceBreakpoints(width) === 'tablet' &&
            <div className="content-tablet">TABLET VIEW</div>
        }
      </h2>
      <h2>
        {
          getDeviceBreakpoints(width) === 'desktop' 
          &&
            <div className="content-desktop">DESKTOP VIEW</div>
        }
      </h2>
      {/* content MOBILE */}
      {/* {width < breakpointDesktop ? 
        "content TABLET" 
      : 
        "content DESKTOP"   
      } */}
      {/* {width < breakpointTablet && 
        <div className="content-mobile">MOBILE VIEW</div>
      } */}
      {/* {width > breakpointDesktop || 
        <div className="content-tablet">TABLET VIEW</div>
      } */}


      {/* {width > breakpointDesktop && (
        <div className="content-desktop">DESKTOP VIEW</div>)
      } */}
    </div>

  
  )
}

export default Content; 