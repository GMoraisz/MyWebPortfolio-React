import React from 'react';
import styles from './styles/SeeMore.module.css';

import { MdOutlineExpandMore, MdOutlineExpandLess } from 'react-icons/md';

const SeeMore = ({ onClick, showMore }) => {
  return (
    <button onClick={onClick} className={styles.seeMoreButton}>
      {showMore ? (
       
          <MdOutlineExpandLess /> 
         
        
      ) : (
    
          <MdOutlineExpandMore /> 

       
      )}
    </button>
  );
}

export default SeeMore;
