import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    const [links, setLinks] = useState<string>()
  return (
    <>
    <div>resizeimages</div>
    <Button variant="primary">Primary</Button>{' '}
    </>
  )
}

export default resizeimages