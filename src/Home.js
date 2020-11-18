import React from 'react'
import './Home.css'
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img  className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234911_1242143_DE_de_de_cop_launch_gw_mozart_pl_pl_pl_3202852_1500x600_pl_PL._CB409249165_.jpg" />
            
            <div className="home__row">
                <Product 
                id="144443"
                title="The lean startup" 
                price={421.99} 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={5}
                />
                <Product 
                id="1123123123"
                title="yś" 
                price={4.99} 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
            </div>
            <div className="home__row">
                <Product 
                id="1231545523123"
                title="yś" 
                price={4.99}  
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
                <Product 
                id="123123123"
                title="yś" 
                price={4.99} 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
                  <Product
                  id="151231123" 
                title="yś" 
                price={4.99} 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
            </div>
            <div className="home__row">
            <Product 
                id="12123"
                title="yś" 
                price={4.99}  
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
                
            </div>
            </div>
        </div>
    )
}

export default Home
