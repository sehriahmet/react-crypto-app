import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';
import './App.css';

const app = () => {
  return (
    <div className='app'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/react-crypto-app">
                  <Homepage />
                </Route>
                <Route exact path="/react-crypto-app/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/react-crypto-app/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/react-crypto-app/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/react-crypto-app/news">
                  <News />
                </Route>
              </Switch>
            </div>
          </Layout>
          <div className='footer'>
            <Typography.Title level={5} style={ {color: 'white', textAlign: 'center' }}>
              Crypto App <br />
              All right reserved
            </Typography.Title>
            <Space>
              <Link to="/react-crypto-app">Home</Link>
              <Link to="/react-crypto-app/exchanges">Exchanges</Link>
              <Link to="/react-crypto-app/news">News</Link>

            </Space>
          </div>
        </div>
    </div>
    
  )
}

export default app