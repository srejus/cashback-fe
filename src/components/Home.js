import './styles/home.css';
import Category from './sub_components/Category';
import TopShops from './sub_components/TopShops';
import HomeHeader from './sub_components/homeHeader';

import { Link } from 'react-router-dom';


function Home() {
    return(
        <div className='home-main'>
            <HomeHeader/>
            <Category/>
            <TopShops/>
        </div>
    )
}

export default Home;