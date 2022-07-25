import React from 'react'
import { styled } from '../styles/stitches.config'

const TitleDiv = styled('div', {

})
const Title = styled('h1', {

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
const StyledButton = styled('button', {
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
const Product = (product: any) => {
  return (
    <TitleDiv>
        <Title>
            {product.title}
        </Title>
    </TitleDiv>
  )
}

export default Product