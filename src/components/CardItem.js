import React from 'react';

import { CardImg, CardText, CardBody,
    CardTitle, Button, Card
  } from 'reactstrap';


const CardItem = ({product,addInCart}) =>{
    return(
        <Card className='mt-2 mb-1'>
            <CardImg
                top
                height ='250'
                width='100%'
                src={product.smallImage}
            />
            <CardBody className="text-center">
                <CardTitle className='text-center'>{product.productName}</CardTitle>
                <CardText className='secondary'>Price: ${product.productPrice}</CardText>
                <Button
                color='success'
                onClick={()=>addInCart(product)}
                >Buy Now</Button>
            </CardBody>
            
        </Card>
    )
}

export default CardItem;