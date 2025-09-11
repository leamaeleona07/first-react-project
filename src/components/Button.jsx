import React from 'react'

const Button = ({ className,children, ...props}) => {
  return (
    <Button { ...props} >  {children}
    </Button>
  )
}
export default Button