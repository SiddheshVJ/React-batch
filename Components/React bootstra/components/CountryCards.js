import React from 'react'
import CountryCard from './CountryCard';
import img1 from '../assets/images/img1.png'
import img2 from '../assets/images/img2.png'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/img5.png'

class CountryCards extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='text-center d-flex flex-sm-column flex-lg-row flex-lg-wrap '>
                    <CountryCard cardImg={img1} />
                    <CountryCard cardImg={img2} />
                    <CountryCard cardImg={img3} />
                    <CountryCard cardImg={img4} />
                    <CountryCard cardImg={img5} />
                    <CountryCard cardImg={img5} />
                </div>
            </React.Fragment>
        )
    }
}

export default CountryCards;