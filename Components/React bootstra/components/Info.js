import React from 'react'

class Info extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className='p-3 bg-dark text-white mt-3'>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <h5 className="display-4">
                                    Ultimate destination
                                </h5>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Info;