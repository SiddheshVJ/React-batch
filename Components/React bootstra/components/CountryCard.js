import React from 'react'

class CountryCard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-md-2 col-md-4 col-lg-4">
                    <div className="card m-3 row  ">
                        <img src={this.props.cardImg} alt='' className=" card-img-top" />
                        <div className="card-body">
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime pariatur ullam officia exercitationem id laudantium rerum, sequi fugiat quam ad commodi suscipit labore quidem? Esse consectetur cum quis illo a.</p>
                            <button className='btn btn-amber'>Read More</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CountryCard;