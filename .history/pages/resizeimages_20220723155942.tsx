import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    let linksArr:any
  return (
    <>
    {
      linksArr.map((link) => (
        <h1>link</h1>
      ))
    }
    <div>{linksArr[0]}</div>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {linksArr.push(text)})}>Paste Link</Button>
    </>
  )
}

export default resizeimages