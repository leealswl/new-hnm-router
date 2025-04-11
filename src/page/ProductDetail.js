import React, { useEffect, useState } from 'react';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const ProductDetail = () => {
  const [dataList, setDataList] = useState(null);
  const [size, setSize] = useState('');
  const { id } = useParams();

  useEffect(() => {
    const getProductDetail = async () => {
      let url = `https://my-json-server.typicode.com/leealswl/new-hnm-router/products/${id}`;
      let res = await fetch(url);
      let data = await res.json();
      // console.log("디테일", data);
      setDataList(data);
    };

    getProductDetail()},[id])

  const handleChange = (event) => {
    setSize(event.target.value);
  };



  return (
    <div>
      <Container>
        <Grid container spacing={2} columns={16}>
          <Grid xs={16} sm={8} sx={{ py: 2 }}>
            <img className="product-detail-img" src={dataList?.img} alt="" />
          </Grid>
          <Grid xs={16} sm={8} sx={{ py: 2 }}>
            <div>
              <h1>{dataList?.title}</h1>
            </div>
            <div>
            <h2>₩ {dataList?.price}원</h2>
            </div>
            <div>
              {dataList?.choice === true && (
                <div className="conscious-choice">
                  <h3>Conscious Choice</h3>
                </div>
              )}
            </div>
            <FormControl sx={{ width: '30%' }}>
              <InputLabel id="size-select-label">Size</InputLabel>
              <Select
                labelId="size-select-label"
                id="size-select"
                value={size}
                label="Size"
                onChange={handleChange}
              >
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="contained"
              sx={{ 
                mt: 2,
                backgroundColor: 'black',
                color: 'white',
                width: { xs: '100%', sm: '500px' }, 
                height: '35px',
                '&:hover': { backgroundColor: 'black' }
              }}
            >
              장바구니 추가 
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductDetail;
