import React from 'react'
import { useParams } from 'react-router'

export const NotLawyerFond = () => {
    const {lucence} = useParams();

  return (
    <div>
        {lucence}
    </div>
  )
}
