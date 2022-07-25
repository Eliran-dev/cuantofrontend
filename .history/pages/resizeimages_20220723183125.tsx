import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchFunction, getFunctionDownload,getFunction } from '../functions/fetch'
import useSWR from 'swr'
const resizeimages = () => {
    const [links, setLinks] = useState<string[]>([])
const downloadImages = (sku: string) => {
  const numOfimages = getFunction(`/compare/images/${sku}`);
  console.log(numOfimages)
}
  return (
    <>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {setLinks([...links,text])})}>Paste Link</Button>
    <Button
    variant='primary'
    onClick={() => fetchFunction('/compare/images',{links, "folderName": "sssss"})}>Resize</Button>
        <Button
    variant='primary'
    onClick={() =>downloadImages('sssss')}>Download</Button>
    {
      links.map((link) => (
        <h1>{link}</h1>
      ))
    }
    </>
  )
}

export default resizeimages