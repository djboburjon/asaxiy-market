import { useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  const [data, setData] = useState([
    {
      name:"Моноблок AIO FPB V24 CPU Intel Core i3…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/45da9c12f25f7136a9c3a82c95865dab2023121916263124856UFzWiNSjUu.jpg.webp", 
      id: 1,
      price:"6 959 000 сум" 
    },
    {
      name:"Смартфон iPhone 15 Pro max 256GB Синий Титан" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c8ed21db4f678f3b13b9d5ee164890882023092315103648645HUWqea3pTc.png.webp", 
      id: 2,
      price: "17 569 000 сум"
    },
    {
      name:"Моноблок AIO FPB K27 27 UHD 2K (2560x1440) CPU…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c74d97b01eae257e44aa9d5bade97baf20231219160511725782I0Ixx5w38.jpg.webp", 
      id: 3,
      price: "9 099 000 сум"
    },
    {
      name:"Стиральная машина IMMER IW100-14686..." ,
      img: "https://assets.asaxiy.uz/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2023091309004859884Swck8zY5jo.jpg.webp", 
      id: 4,
      price: "4 509 000 сум"
    },
    {
      name:"Моноблок AIO FPB K27 27 UHD 2K (2560x1440) CPU…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c74d97b01eae257e44aa9d5bade97baf20231219160511725782I0Ixx5w38.jpg.webp", 
      id: 5,
      price: "9 999 000 сум"
    },
    {
      name:"Моноблок AIO FPB V24 CPU Intel Core i3…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/45da9c12f25f7136a9c3a82c95865dab2023121916263124856UFzWiNSjUu.jpg.webp", 
      id: 6,
      price: "5 975 000 сум"
    },
    {
      name:"Душевая система Deante Neo Joko Round Хром NBJ" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c4ca4238a0b923820dcc509a6f75849b20231219162359915645J1jiq6w3D.jpg.webp", 
      id: 7,
      price:"1 509 000 сум" 
    },
    {
      name:"Смарт-часы Realme S100 черный. ХИТ ПРОДАЖ!" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/a5bfc9e07964f8dddeb95fc584cd965d2023100512105873439mhDYyq1jCO.jpg.webp", 
      id: 8,
      price: "499 000 сум"
    },
    {
      name:"Смартфон Xiaomi Redmi Note 12 Pro 6/128GB Серый" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/673271cc47c1a4e77f57e239ed4d28a72023053015431545369KWMQQXMm6I.png.webp", 
      id: 9,
      price:"2 979 000 сум" 
    },
    {
      name:"Стиральная машина IMMER IW100-14686BLS" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/6512bd43d9caa6e02c990b0a82652dca2023091309004859884Swck8zY5jo.jpg.webp", 
      id: 10,
      price: "4 509 000 сум"
    },
    {
      name:"Смартфон iPhone 15 Pro max 256GB Синий Титан" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c8ed21db4f678f3b13b9d5ee164890882023092315103648645HUWqea3pTc.png.webp", 
      id: 11,
      price: "17 569 000 сум"
    },
    {
      name:"Беспроводная клавиатура и мышка Wireless TJ-808" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/2838023a778dfaecdc212708f721b7882023092709383449911nEdE8XZEPX.jpg.webp", 
      id: 12,
      price: "139 000 сум"
    },
    {
      name:"Смартфон Honor X9b 8/256GB Полночный..." ,
      img: "https://assets.asaxiy.uz/product/items/desktop/a0a080f42e6f13b3a2df133f073095dd2023112016270964626XeS3Npartl.png.webp", 
      id: 13,
      price: "4 349 000 сум"
    },
    {
      name:"Эрнест Хемингуэй: Тўқчилик ва йўқчилик" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/7f227a0ba8b83923ad5c76043e957cff2023112910372068305iraarmcoyL.jpg", 
      id: 14,
      price: "49 000 сум"
    },
    {
      name:"ТВ приставка Xiaomi Mi Box 4K 2nd GEN HDR…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/5b764a33be67c4c3438e593b900c8c132020101718562583701XvywGkGiMe.png.webp", 
      id: 15,
      price: "679 000 сум"
    },
    {
      name:"«Asaxiy Books бестселлерлари», Ноябрь…" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/c524dcc424d187e580315047845088582023120115272899513Cn4cxxpXsf.jpg.webp", 
      id: 16,
      price: "799 000 сум"
    },
    {
      name:"Смартфон Honor X8A 6/128GB Чёрный" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/9cfb70b6057e66a5f5cd2b3c9f71d3ca2023021820153513401aLcUSTW2PF.png.webp", 
      id: 17,
      price: "2 879 000 сум"
    },
    {
      name:"Asaxiy Books йил бестселлерлари 2023..." ,
      img: "https://assets.asaxiy.uz/product/items/desktop/7f227a0ba8b83923ad5c76043e957cff2023112910372068305iraarmcoyL.jpg", 
      id: 18,
      price: "699 000 сум"
    },
    {
      name:"Беспроводная клавиатура и мышка Wireless TJ-808" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/2838023a778dfaecdc212708f721b7882023092709383449911nEdE8XZEPX.jpg.webp", 
      id: 19,
      price: "139 000 сум"
    },
    {
      name:"Смартфон Xiaomi Redmi Note 12 Pro 6/128GB Серый" ,
      img: "https://assets.asaxiy.uz/product/items/desktop/673271cc47c1a4e77f57e239ed4d28a72023053015431545369KWMQQXMm6I.png.webp", 
      id: 20,
      price:"2 979 000 сум" 
    }
   
  ])

  return (
    <div>
      <Navbar/>
      <Home data={data}/>
      <Footer/>
    </div>
  )
}

export default App
