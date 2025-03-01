import React from 'react'
import clsx from 'clsx'
import './IconButton.scss'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactElement
}

export const IconButton = ({ icon, className, ...props }: IconButtonProps) => {
  return (
    <button className={clsx("icon-button", className)} {...props}>
      {icon}
    </button>
  )
}
