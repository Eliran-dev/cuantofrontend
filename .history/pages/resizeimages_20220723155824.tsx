import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
const resizeimages = () => {
    let linksArr: Array<string>= []
  return (
    <>
    {
      linksArr.map((link) => (
        <h1>link</h1>
        <h1>{linksArr.length}</h1>
      ))
    }
    <div>{linksArr.join(" ")}</div>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {linksArr.push(text)})}>Paste Link</Button>
    </>
  )
}

export default resizeimages