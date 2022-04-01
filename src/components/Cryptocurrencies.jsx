import React, { useEffect, useState } from 'react'

import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'




import {useGetCryptosQuery} from '../services/cryptoApi'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {
    const count = simplified? 10 : 100;
   
    const {data: cryptosList,isFetching} = useGetCryptosQuery(count)
   

    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos,setCryptos]=useState([])
    // console.log(cryptos);

    cryptos.map((currency)=> console.log(currency))


    useEffect(()=> {
         
         const filteredData = cryptosList?.data?.coins.filter((coin=> coin.name.toLowerCase().includes(searchTerm.toLowerCase())))

         setCryptos(filteredData)
    },[cryptosList,searchTerm])

    if(isFetching) return <Loader/>
  return (
    <>

    {!simplified && <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}></Input>
    </div>}
    <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos?.map((currency)=> (
            
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid} >
                <Link to={`/crypto/${currency.uuid}`}>
                    <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' style={{width: '35px'}} src={currency.iconUrl}/>} hoverable>
                        <p>Price: {millify(currency.price)}</p>
                        <p>Market Cap: {millify(currency.marketCap)}</p>
                        <p>Daily Change: {millify(currency.change)}%</p>
                    </Card>
                </Link>
            </Col>
        ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies

