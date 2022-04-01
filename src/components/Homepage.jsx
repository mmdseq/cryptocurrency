import React, { useEffect } from 'react'
import millify from 'millify'
import {Typography,Row,Col,Statistic} from 'antd'
import {Link} from 'react-router-dom'
import { useGetCryptosQuery } from '../services/cryptoApi'
// import Cryptocurrencies from './Cryptocurrencies'
import {Cryptocurrencies,News} from '../components'


// import millify from 'millify'

const {Title} = Typography

const Homepage = () => {


//   useEffect(()=> {
//     const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     limit: '50',
//     offset: '0',
//     orderBy: '24hVolume',
//     orderDirection: 'desc'
//   },
//   headers: {
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c62dc2e715mshdfd06526c105514p1f6e59jsn7fe7230bff58'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
//   },[])

  const {data,isFetching} = useGetCryptosQuery(10)
  console.log(data);

  const globalStats = data?.data?.stats
  if(isFetching) return 'Loading...'
  return (
    
    <>
     <Title level={2} className='heading'>Global Crypto Stats</Title>
     <Row>
       <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic></Col>
       <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>
       <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
       <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
       <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>
      
     </Row>

     <div className="home-heading-container">
       <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
       <Title level={2} className='show-more'>
         <Link to='/cryptocurrencies'>Show More</Link>
       </Title>
     </div>
     <Cryptocurrencies simplified/>
     <div className="home-heading-container">
       <Title level={2} className='home-title'>Latest Crypto News</Title>
       <Title level={2} className='show-more'>
         <Link to='/news'>Show More</Link>
       </Title>
     </div>
     <News simplified/>
    </>
  )
}

export default Homepage