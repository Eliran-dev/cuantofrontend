import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Product from '../components/product';
import { styled } from '../styles/stitches.config';
import useSWR from 'swr';
import { useState } from 'react';
import axios from 'axios';
import { fetchFunction } from '../functions/fetch';
import Dropdown from 'react-bootstrap/Dropdown';

const fetcher = (...args: any) => fetch(args).then(res => res.json())

const TitleDiv = styled('div', {

})
const Title = styled('h1', {

})


const HomeDiv = styled('div', {
    display: 'block',
    justifyContent: 'space-around'

})

const ButtonsDiv = styled('div',
{
    display: 'flex',
    justifyContent: 'space-around'
})
const Button = styled('button', {
    marginTop: '10px',
    width: '30%',
    padding: '15px 0',
    fontSize: '18px',
    fontWeight: '600',
    borderRadius: '5px',
    cursor: 'pointer',
})

const Home: NextPage = () => {
  const [buyer, setBuyer] = useState("")
  const [brand, setBrand] = useState("Apple")
  const {data, error} = useSWR(`http://localhost:3001/api/compare?buyer=${buyer}&brand=${brand}`, fetcher)
  const buyers = ["Eliran","Haim","Moshe"]
  const brands = ["Apple","Xiaomi","Samsung"]
  const arrFilter = [{
    name: "Buyer",
    action: (xs:any) => setBuyer(buyer),
    array: buyers
  }, 
  {
    name:"Brand",
    array: [...new Set(data.map((x: { brand: any; }) => x.brand))]
  }
]
  console.log(typeof(data))
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

return (
 <HomeDiv>
        <Head>
        <title>Cuanto | Homepage</title>
        <meta name="description" content="Cuanto | Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
      arrFilter.map((x) => (
        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {x.name}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          {
            x.array.map(x => (
              <Dropdown.Item >{x}</Dropdown.Item>
  
            ))
          }
        </Dropdown.Menu>
      </Dropdown>
      ))
      }

             <TitleDiv>
         <Title>
             Total items pending: {data.filter((x: { approvalStatus: string, IvoryUid: number }) => x.IvoryUid != 0 && x.approvalStatus == "Pending").length}
         </Title>
         <Title>
             Total items approved: {data.filter((x: { approvalStatus: string; }) => x.approvalStatus == "Approved by the system").length}
         </Title>
     </TitleDiv>
 { data.map((product: any, i: number) => (
     <Product
     {...product}
     key={i}
     >

         <ButtonsDiv>
         <Button>Approve</Button>
         <Button>set product link</Button>
         </ButtonsDiv>

     </Product>
 )) }

</HomeDiv>
)
}

export default Home
