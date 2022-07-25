import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import { styled } from '../styles/stitches.config';
import Product from '../components/product';
import getLink from '../functions/getLink';
const TitleDiv = styled('div', {

})
const Title = styled('h1', {

})


const HomeDiv = styled('div', {
    display: 'block',
    justifyContent: 'space-around'

})

const ProductDiv = styled('div', {
    textAlign: 'center',
    boxShadow: '0 0 4px aqua',
    margin: '5%'

})

const ProductTitle = styled('h1', {

})
const ProductPrice = styled('h2', {
    variants: {
        color: {
            red: {
                color: 'red'
            },
            green: {
                color: 'green'
            }
        }
    }
})
const Link = styled('a', {

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

const fetcher = (...args: any) => fetch(args).then(res => res.json())

const products = () => {

     const {data, error} = useSWR(`http://localhost:3001/api/compare/buyer`, fetcher)
     if (error) return <div>failed to load</div>
     if (!data) return <div>loading...</div>
  return (
    <HomeDiv>
                <TitleDiv>
            <Title>
                Total items: {data.length}
            </Title>
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

export default products