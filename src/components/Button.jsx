import React from 'react'

const Button = ({children, className, ...props }) => {
  return (
    <Button {...props} className={className}>
      {children}
    </Button>
  )
}
// ...props {className, onClick, otherProps}
export default Button