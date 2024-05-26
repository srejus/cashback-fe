import '../styles/home.css';

import { Link } from 'react-router-dom';


function TopShops() {

    const id = 1;
    return(
        <div>
            <h2>Shops with Best Cashbacks Near You</h2><br/>
            <div className='shop-card'>
                <div className='card' style={{border:'none'}}>
                    <img className='shop-cover' src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D'/>
                    <h4>Burger Palace</h4>
                </div>

                    <div className='card' style={{border:'none'}}>
                        <Link className='txt' to={`/view-shop/${id}`}>
                                <img className='shop-cover' src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D'/>
                                    <h4  className='txt'>Burger Palace</h4>
                        </Link>
                    </div>
            </div>
        </div>
    )
}

export default TopShops;