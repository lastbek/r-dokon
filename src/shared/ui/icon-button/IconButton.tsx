import React from 'react'
import './IconButton.scss'

export interface IconButtonProps {
  icon: React.ReactElement
  onClick: () => void
}

export const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return (
    <button className="IconButton" onClick={onClick}>
      {icon}
    </button>
  )
}
