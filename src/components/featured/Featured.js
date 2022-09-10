import React from 'react'

import './Featured.css'

import House1 from '../../assets/house1.jpg'
import Bed1 from '../../assets/bed1.jpg'
import Bed2 from '../../assets/bed2.jpg'
import Kitchen from '../../assets/kitchen.jpg'
import Bathroom from '../../assets/bath1.jpg'

import House2 from '../../assets/house2.jpg'
import Bed3 from '../../assets/bed3.jpg'
import Bed4 from '../../assets/bed4.jpg'
import Bathroom2 from '../../assets/bath2.jpg'
import LivingRoom from '../../assets/living-room.jpg'

const Featured = () => {
    return (<div>
        <div className='featured'>
            <h1 className='featured-text'>List of top-Featured Localities to stay</h1>
            <p className='featured-text'>Selected details by City, State, & pin based on views.</p>
            <div className='container'>
                <img className='span-3 image-grid-row-2' src={House1} alt='' />
                <img src={Bed1} alt='' />
                <img src={Bed2} alt='' />
                <img src={Kitchen} alt='' />
                <img src={Bathroom} alt='' />
                <div className='span-3 img-details'>
                    <div className='top'>
                    <h2>22/4, New B.S. Road, New Delhi</h2>
                        <p>House for Sale</p>
                        <p className='price'>₹25,00,000</p>
                    </div>
                    <div className='info-grid'>
                        <div>
                            <div className='info'>
                                <p className='bold'>Bedrooms:</p><p>2</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Bathrooms:</p><p>3</p>
                            </div>
                        </div>
                        <div>
                            <div className='info'>
                                <p className='bold'>Square Feet:</p><p>5,000</p>
                            </div>
                            <div className='info'>
                                <p className='bold'>Est Payment:</p><p>₹20,000/mo</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='span-2 right-img-details'>
                    <p>A beautiful place with a mesmerising view at a prime location near Delhi Metro. </p>
                    <button className='btn'>View more details</button>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Featured
