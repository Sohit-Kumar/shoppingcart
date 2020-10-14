import React ,{useState,useEffect} from 'react';
import Axios from 'axios';

import {random,commerce} from 'faker';

import {Container,Col,Row} from 'reactstrap'
import CardItem from './CardItem';

const apikey ='563492ad6f9170000100000145164de9337549849a3bc191caae0e92'

const url = 'https://api.pexels.com/v1/search?query=earrings&per_page=6&page=1'

const localurl = 'https://jsonware.com/json/7f26bf2c0233a09ad8426b4e6ad9ccbd.json'

    const BuyPage = ({ addInCart })=>{
        const [product , setProduct] = useState([]);

    // const fetchPhotos = async() =>{
    //     const {data} = await Axios.get(url,{
    //         header:{
    //             Authorization: apikey
    //         }
    //     })
    // const {photos}=data;
    // const allProduct = photos.map(photo =>({
    // smallImage : photo.src.medium,
    // tinyImage : photo.src.tiny,
    // productName: random.words(),
    // productPrice : commerce.price(),
    // id : random.uuid(),
    // }))

    // setProduct(allProduct);
        
    // };

    const fetchPhotos = async() =>{
        const {data} = await Axios.get(localurl)
   

    const {photos}=data;

    const allProduct = photos.map(photo =>({
        smallImage : photo.src.medium,
        tinyImage : photo.src.tiny,
        productName: random.words(),
        productPrice : commerce.price(),
        id : random.uuid(),
    }))


     setProduct(allProduct);

};

    useEffect(() => {
        fetchPhotos()
    }, [])


    

    return(
        <Container fluid>
            <h1 className='text-success text-center'>Buy Page</h1>
            <Row>
                {product.map(product => (
                    <Col md={4} key={product.id}>
                        <CardItem product={product} addInCart={addInCart}  />
                    </Col>
                    
                ))}
            </Row>
        </Container>
    )
};
export default BuyPage;