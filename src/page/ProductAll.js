import { Container, CircularProgress, Grid } from '@mui/material';
import React, { useEffect,useState } from 'react'
import ProductCard from '../Component/ProductCard'
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList,setProductList] =useState(null)
    // const [query,setQuery]=useSearchParams()
    const [searchParams] = useSearchParams();
    let searchQuery = searchParams.get('q') || ""
    
    
    const getProducts=async(query)=>{
        
        let url = `https://my-json-server.typicode.com/leealswl/new-hnm-router/products?q=${query}`;
        let res= await fetch(url)
        let data=await res.json()
        setProductList(data)
    }

    useEffect(()=>{
        getProducts(searchQuery)
    },[searchQuery])
  return (
    <div>
      <Container>
      {productList === null ? (
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '300px' }}>
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container spacing={2} justifyContent="center">
          {productList.map((menu) => (
            <Grid item xs={12} sm={6} lg={3} key={menu.id}>
              <ProductCard item={menu} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>

    </div>
  )
}

export default ProductAll