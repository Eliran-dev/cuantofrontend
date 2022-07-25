import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchFunction } from '../functions/fetch'
const resizeimages = () => {
    const [links, setLinks] = useState<string[]>([])
    const fetcher = (...args: any) => fetch(args).then(res => res.json())

  return (
    <>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {setLinks([...links,text])})}>Paste Link</Button>
    <Button
    variant='primary'
    onClick={() => fetchFunction('/compare/images',{links, "folderName": "sssss"})}>Resize</Button>
        <Button
    variant='primary'
    onClick={() => fetcher('/images/sssss/0')}>Download</Button>
    {
      links.map((link) => (
        <h1>{link}</h1>
      ))
    }
    </>
  )
}

export default resizeimages