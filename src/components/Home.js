import './styles/home.css';
import Category from './sub_components/Category';
import HomeHeader from './sub_components/homeHeader';


function Home() {
    return(
        <div className='home-main'>
            <HomeHeader/>
            <Category/>
        </div>
    )
}

export default Home;