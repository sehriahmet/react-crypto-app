import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';

const { Text, Title } = Typography;
const{ Option } = Select;

const demoImage = "https://www.greathorn.com/wp-content/uploads/2021/07/crypto-extortion-trends-social-share-1200x900.jpg"

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState('CRYPTOCURRENCY')
    const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count: simplified ? 6 : 12 });
    const { data } = useGetCryptosQuery(100);
    
    // console.log(cryptoNews?.data);

    if(!cryptoNews?.data) return 'Loading...';

    return (
        <Row gutter={[ 24, 24 ]}>
            { !simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                    >
                        <Option value="Cryptocurrency">Cryptocurrency</Option>
                        {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}
                    </Select>
                </Col>
            )}
            {cryptoNews?.data?.map((news,i) => (
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className='news-card'>
                        <a href={news.link} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className='news-title' level={4}>{news.title}</Title>
                                <img src={ news.photo_url || demoImage } alt="news" className='img'></img>
                            </div>
                            <p>
                                {news.snippet}
                            </p>
                            <div className='provider-container'>
                                <div>
                                    <Avatar src={news.source_favicon_url || demoImage } alt="" />
                                    <Text className='provider-name'>{ news.source_url.length > 20 ? `${news.source_url.substring(8,40)}...` : news.source_url }</Text>
                                </div>
                                    <Text>{moment(news.published_datetime_utc).startOf('ss').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News