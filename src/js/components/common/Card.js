import React from "react";
import classes from './../../../styles/components/card.module.scss'

const Card = ({className, children}) => {
  return (
    <div className={`${classes['card-container']} ${classes[className]}`}>
      {children ?? children}
    </div>
  )
}

export default Card