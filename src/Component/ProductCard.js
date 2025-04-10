import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductCard = ({item}) => {
  let navigate = useNavigate() 
  const goDetail =() =>{
      navigate(`/product/${item.id}`)
  }

  return (
    <div className='product-card'>
        <img alt='' onClick={goDetail} className='product-img' src= {item?.img}/>
        <div>{item?.choice ===true?"Conscious Choice":""}</div>
        <div>{item?.title}</div>
        <div>₩ {item?.price}원</div>
        {item?.choice === true && (
        <div className="new-product">
          <span>신</span>
          <span>제</span>
          <span>품</span>
          <span>✨</span>
        </div>
)}
    </div>
  )
}

export default ProductCard