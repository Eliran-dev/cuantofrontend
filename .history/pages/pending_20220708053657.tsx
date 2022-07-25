import React, { useState, useEffect } from 'react'
import useSWR from 'swr';

import { putFetchFunction } from '../functions/fetch';
import { styled } from '../styles/stitches.config';
import getLink from '../functions/getLink';
import Input from '../components/Input';
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
const KspLink = styled('div', {
    variants: {
        display: {
            show: {
            },
            hide: {
                display: "none"
            }
        }
    }
    
})

const fetcher = (...args: any) => fetch(args).then(res => res.json())

const pending = () => {
    const [changeLink, setChangeLink] = useState<Number>(0)
    const [link, setLink] = useState<String>()

     const {data, error} = useSWR(`http://localhost:3001/api/compare/pending`, fetcher)
     if (error) return <div>failed to load</div>
     if (!data) return <div>loading...</div>

  return (
    <HomeDiv>
    { data.map((product: any, i: number) => (
        <ProductDiv
        key={i}
        >

            <ProductTitle>
                {product.title}
            </ProductTitle>
            <ProductPrice color={'red'}>
                <Link
                    href={getLink('Ivory', product.IvoryUid)}
                    target="_blank"
                >
                    Ivory: {product.priceIvory}
                </Link>
            </ProductPrice>
            <ProductPrice>
                <Link
                    href={getLink('Ksp', product.KspUid)}
                    target="_blank"
                >
                    Ksp: {product.priceKsp}
                </Link>
            </ProductPrice>
            <ButtonsDiv>
            <Button
            
            onClick={() => putFetchFunction(product._id, {"approvalStatus": "Approved by the system"})}
            >Approve</Button>
            <Button
            onClick={()=> setChangeLink(i)}
            >set product link</Button>
            </ButtonsDiv>
            <KspLink
            display={changeLink == i ? "show" : "hide"}
            >
                <Input
                onChange={setLink}
                value={getLink('Ksp', product.KspUid)}
                />
            </KspLink>

        </ProductDiv>
    )) }

</HomeDiv>
  )
}

export default pending