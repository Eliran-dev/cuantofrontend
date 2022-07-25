import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    const [links, setLinks] = useState<string[]>([])
  return (
    <>
    <div>{links}</div>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {setLinks([...links,text])})}>Paste Link</Button>
    </>
  )
}

export default resizeimages