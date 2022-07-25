import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    const [links, setLinks] = useState<string>()
  return (
    <>
    <div>resizeimages</div>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {setLinks(text)})}>Primary</Button>{'sss'}
    </>
  )
}

export default resizeimages