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
  const [filters, setFilters] = useState([{brand:"Apple"}])
  const {data, error} = useSWR(`http://localhost:3001/api/compare?brand=Apple`, fetcher)
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
