import React from 'react'
import { styled } from '../styles/stitches.config'
import getLink from '../functions/getLink'
import { FaPercentage } from 'react-icons/fa';
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

const IconsDiv = styled('div', {

})
const Icon = styled('div',{
    variants: {
        iconStyle: {

        
        sale: {
            color: 'red',
            outlineStyle: 'solid',
            outlineColor: 'red'

        },
        freeDelivery: {
            outlineColor: 'green'
        }
    }
}

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
    <ProductDiv>
    <TitleDiv>
        <Title>
            {product.title}
                    </Title>
    </TitleDiv>
    <ProductPrice color={'red'}>
                <Link
                    href={getLink('Ivory', product.IvoryUid)}
                    target="_blank"
                >
                    Ivory: {product.priceIvory}
                </Link>
            </ProductPrice>
            <ProductPrice>
                {product.KspUid && 
                <Link
                    href={getLink('Ksp', product.KspUid)}
                    target="_blank"
                >
                    Ksp: {product.priceKsp}
                </Link>

                }
            </ProductPrice>
            <IconsDiv color='red'>
                <Icon iconStyle={'sale'}>
                    {<FaPercentage size={28}/>}
                </Icon>
            </IconsDiv>
    </ProductDiv>
    
  )
}

export default Product