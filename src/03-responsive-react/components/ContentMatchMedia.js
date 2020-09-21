import React from 'react';
import './Content.css';
import {useBreakpoint} from './hooks/MatchMediaHook';

function Content() {

  // mobile: '(max-width: 520px)',
  // tablet: '(max-width: 920px)',
  // desktop: '(max-width: 1024px)',
  // bigDesktop: '(min-width: 1025px)',

  const breakpoints = useBreakpoint();

  const [mobile, tablet, desktop, bigDesktop] = Object.keys(breakpoints);

  // const matchingList = Object.keys(breakpoints).map(media => (
  //   <li key={media}>{media} ---- {breakpoints[media] ? 'Yes' : 'No'}</li>
  // ))

  console.log(breakpoints);
  console.log(Object.keys(breakpoints));
  console.log(mobile);
  return (
    <div className="content">
      <h2>
        {breakpoints[mobile] && <div className="content-mobile">MOBILE VIEW!</div> }
        {breakpoints[tablet] && <div className="content-tablet">TABLET VIEW!</div> }
        {breakpoints[desktop] && <div className="content-desktop">DESKTOP VIEW!</div> }
      </h2>
      
    </div> 
  )
}

export default Content; 