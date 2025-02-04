import React, { memo, useState } from 'react'
import Button from '../Button/Button'
import { MinusSvg, PlusSvg } from '../../assets/svgs';

const Counter:React.FC=()=> {
    const [countProduct, setCountProduct] = useState<number>(1);
    // const [totalPrice, setTotalPrice] = useState<number>(singleProduct?.price || 0);
  return (
   <>  <div className="flex space-x-3 font-Montserrat font-medium items-center">
   <Button
     text={<PlusSvg />}
     type="button"
     customStyle="w-[31px] h-[31px] bg-[#28A745] rounded flex justify-center items-center"
     onClick={() =>{ 
       setCountProduct(countProduct + 1)
      
     }}
   />

   <p className="">{countProduct}</p>
   <Button
     text={<MinusSvg />}
     type="button"
     customStyle="w-[31px] h-[31px] bg-lightslate rounded flex justify-center items-center"
     onClick={() => {
       setCountProduct(countProduct - 1);
     }}
   />
 </div>
   </>
  )
}

export default memo(Counter)