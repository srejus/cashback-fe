import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faBurger,faCartShopping,faHeadphones,faShirt } from '@fortawesome/free-solid-svg-icons';

import '../styles/home.css';

function Category() {
    return(
        <div className='category-div'>
            <div className='category-div'>

                <div className='category-card'>
                    <FontAwesomeIcon icon={faCartShopping} style={{margin:10}}/>
                    <p style={{paddingTop:12}}>Groceries</p>
                </div>

                <div className='category-card'>
                    <FontAwesomeIcon icon={faBurger} style={{margin:10}}/>
                    <p style={{paddingTop:12}}>Restaurants</p>
                </div>
                <div className='category-card'>
                    <FontAwesomeIcon icon={faHeadphones} style={{margin:10}}/>
                    <p style={{paddingTop:12}}>Electornics</p>
                </div>
                <div className='category-card'>
                    <FontAwesomeIcon icon={faShirt} style={{margin:10}}/>
                    <p style={{paddingTop:12}}>Fashion</p>
                </div>

            </div>
        </div>
    )
}

export default Category;