import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    let linksArr: Array<string>= []
  return (
    <>
    <div>{linksArr.join(" ")}</div>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {linksArr.push(text)})}>Paste Link</Button>
    </>
  )
}

export default resizeimages