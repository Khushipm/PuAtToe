import React from 'react'
import {IoIosArrowForward} from 'react-icons/io'
const Services = () => {
    const service=[
        {
            img:'https://static.vecteezy.com/system/resources/previews/013/011/143/original/online-grocery-store-or-supermarket-to-order-daily-necessities-or-food-via-the-app-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg',
            title:'Daily Needs',
            sub:'Grocery, Dairy Products, Retail Water supply shop'
        },
        {
            img:'https://cdni.iconscout.com/illustration/premium/thumb/building-engineers-using-smart-materials-7912892-6348253.png',
            title:'Construction',
            sub:'Construction Material Shop, Modular Kitchen, Interior Designing'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTROkK-4YKRFB5BjSwRHT8d4uMA4xOt81-TiRY1zd6KJlwS1VLWrSp_zA0uK2CdsllHVp0&usqp=CAU',
            title:'Consultancy',
            sub:' CA,CS & Legal Services '
        }
    ]
  return (
    <div className='container mx-auto items-center py-10'>
        <p className='text-lg text-purple-500 text-center font-medium'>Our services</p>
        <p className='text-3xl font-semibold text-center py-3'>Streamlining business interactions with direct customer-service provider engagement</p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-16 pt-10">
{service.map((ser,i)=>{
    return(
        <div className='px-6 py-2 rounded-xl bg-gray-50 hover:bg-purple-600 group border border-gray-300' key={i}>
            <div className="flex gap-3 items-center">
            <img src={ser.img} alt="services" />
            </div>
            <p className='text-2xl group-hover:text-white  pr-6 py-3 font-semibold '>{ser.title}</p>
            <p className='text-base group-hover:text-white pr-6 py-2'>{ser.sub}</p>
            <button className='flex gap-2 items-center text-purple-600 group-hover:text-white'>Learn More <IoIosArrowForward/> </button>
        </div>
    )
})}
</div>
    </div>
  )
}

export default Services