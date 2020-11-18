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
                title="The lean startup" 
                price="29.99" 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={5}
                />
                <Product 
                title="yś" 
                price="4.99" 
                image="https://m.media-amazon.com/images/I/31KfaQeEEHL._AC_SY200_.jpg" 
                rating={2}
                />
            </div>
            <div className="home__row">
                 <Product />
                 <Product />
                 <Product />
            </div>
            <div className="home__row">
                 <Product />
                
            </div>
            </div>
        </div>
    )
}

export default Home
