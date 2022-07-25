import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { fetchFunction, getFunctionDownload,getFunction } from '../functions/fetch'
import useSWR from 'swr'
import Input from '../components/Input'
import { FaFacebook } from 'react-icons/fa'
const resizeimages = () => {
    const [links, setLinks] = useState<string[]>([])
    const [link, setLink] = useState<string>('')

    const [sku, setSku] = useState<string>('')
    const [isSocial, setIsSocial] = useState<boolean>(false)
const downloadImages = async (sku: string) => {
  const numOfimages =  await getFunction(`/compare/images/${sku}`);
  for(let i=0; i < numOfimages.data; i++)
  {
     getFunctionDownload(`/compare/images/${sku}/${i}`,`${sku}${i}`)
  }
}
  return (
    <>
    <Input label="Sku" value={sku} onChange={setSku}></Input>
    <Button variant="primary"
    onClick={() =>  navigator.clipboard.readText().then(text => {setLinks([...links,text]), setLink(text)})}>Paste Link</Button>
    <Button
    variant='primary'
    onClick={() => fetchFunction('/compare/images',{links, "folderName": sku})}>Resize</Button>
        <Button
    variant='primary'
    onClick={() => fetchFunction('/compare/images/social',{link, "folderName": sku})}>
      <FaFacebook />
      Social
      </Button>
        <Button
    variant='primary'
    onClick={() =>downloadImages(sku)}>Download</Button>
    <h1>{sku}</h1>
    {
      links.map((link,i) => (
        <div key={i}>
        <h1>{link}</h1>
        </div>
      ))
    }
    </>
  )
}

export default resizeimages