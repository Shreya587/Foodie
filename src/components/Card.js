import React from 'react'

export default function Card() {
    return (
        <div><div>
            <div className="card mt-3" style={{ "maxWidth": "18rem", "maxHeight": "360px" }}>
                <img className="card-img-top" src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100 bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='fs-5 d-inline'>Total Price</div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}
