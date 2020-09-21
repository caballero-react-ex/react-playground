import React from 'react';
import styles2 from './Navigation.module.css';

function ContentWithCSSModules() {

  return (
    <div className="content">
      <h2>
        css modules! hey!
      </h2>  
      <h4 className={styles2.Navigation}>Another try</h4>
      <h4 className={styles2.NavigationComp}>Composes CSS MODULES</h4> 
    </div> 
  )
}

export default ContentWithCSSModules;