import React from 'react'
import { styled } from '../styles/stitches.config'
import getLink from '../functions/getLink'
import { FaPercentage, FaStore, FaTruck, FaRegCreditCard,FaTruckLoading} from 'react-icons/fa';
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
    display: 'flex',


})
const Icon = styled('div',{
    marginRight: '14px',

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
            {product.KspUid && 
            <IconsDiv color='red'>
                <Icon>
                    {product.kspPromo.onSale && <FaPercentage
                     size={48}
                     color={'red'}
                    title={'On Sale'}
                    />}
                </Icon>
                <Icon>
                    {product.kspPromo.isExtraDiscount && <FaStore
                     size={48}
                     color={'red'}
                    title={'Extra discount in store'}
                    />}
                </Icon>
                <Icon>
                    {product.kspPromo.freeShipping && <FaTruck
                     size={48}
                     color={'green'}
                    title={'Free delivery'}
                    />}
                </Icon>
                <Icon>
                    {product.kspPromo.isPayments && 
                    <FaRegCreditCard
                     size={48}
                     color={'black'}
                    title={'36 payments'}
                    />}
                </Icon>
                <Icon>
                    {product.kspPromo.isVirtual && 
                    <FaTruckLoading
                     size={48}
                     color={'gray'}
                    title={'Virtual product'}
                    />}
                </Icon>
                
            </IconsDiv>
}
    </ProductDiv>
    
  )
}

export default Product