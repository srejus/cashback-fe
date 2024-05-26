import './styles/home.css';
import './styles/view_shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar,faReceipt } from '@fortawesome/free-solid-svg-icons';


function ViewShop() {
    return(
        <div className='home-main' style={{marginTop:15}}>
            <div className='view-top'>
                <div>
                    <h2>Burger Palace</h2>
                    <h6>Kottayam</h6>
                </div>
                <div>
                <button className='card badge'>
                   <span style={{marginTop:2}}>4.3</span>
                    <FontAwesomeIcon icon={faStar} style={{paddingTop:0,marginLeft:3}}/>
                </button>
                </div>
            </div>
            <hr/>

            <div className='offer-section'>
                <div className='offer-card'>
                    <div style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faReceipt} style={{marginRight:10,fontSize:20}} />
                        <h4>Get 50Rs off on Orders above 500Rs</h4>
                    </div>
                    <hr/>
                </div>
                
                <div className='offer-card'>
                    <div style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faReceipt} style={{marginRight:10,fontSize:20}} />
                        <h4>Get 50Rs off on Orders above 500Rs</h4>
                    </div>
                    <hr/>
                </div>

                <div className='offer-card'>
                    <div style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faReceipt} style={{marginRight:10,fontSize:20}} />
                        <h4>Get 50Rs off on Orders above 500Rs</h4>
                    </div>
                    <hr/>
                </div>
                <div className='offer-card'>
                    <div style={{display:'flex'}}>
                        <FontAwesomeIcon icon={faReceipt} style={{marginRight:10,fontSize:20}} />
                        <h4>Get 50Rs off on Orders above 500Rs</h4>
                    </div>
                    <hr/>
                </div>
            </div>
            <button className='btn btn-primary w-100'>Pay Now</button>
        </div>
    )
}


export default ViewShop;