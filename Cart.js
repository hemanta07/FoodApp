import React from 'react';
import Modal from './Modal';
import './Cart.css';

const Cart = props =>{
    return(
        <Modal onClose={props.onClose}>
            <div className="row">
                    <div className="col-md-2 text-center">
                        <h2 className= "madhu" data-dismiss="modal" style={{"cursor":"alias"}}
                        onClick={props.onClose}> &times;</h2>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-4">
                                <small> #OHM_31781588606526 </small>
                            </div>
                            <div className="col-md-8">
                                <small className="complete"> Read Special Instructions </small>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12">
                                <p> <i className="fa text-primary fa-table"></i> Order Date: Mon 10 Feb 2021 05:01 PM </p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-1">
                                <div ClassName= "madhuri"></div>
                            </div>
                            <div className="col-md-11">
                                <p> 4 Days ago </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p> <i className="fa text-primary fa-truck"></i> Delivery Date: Mon Mar 10 2021 07:00 PM</p>
                                <p> 3rd Floor, 120/A, Pattalamma Temple Rd, Jayanagar East,
                                    Jaya Nagar 1st Block, Jayanagar, Bengaluru, Karnataka 560041
                                </p>
                            </div>
                        </div>
                        <p>Items</p>
                        <div className="row para">
                            <div className="col-md-6">
                                <p> 
                                    <img src="https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519" 
                                    width="40px" height="30px" alt="food"/>
                                    Mealbox &times;15 
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <p> 190 </p>
                            </div>

                            <div className="col-md-6">
                                <p> 
                                    <img src="https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519" 
                                    width="40px" height="30px" alt="food"/>
                                    Mealbox &times;15 
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <p> 190 </p>
                            </div>

                            <div className="col-md-6">
                                <p> 
                                    <img src="https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519" 
                                    width="40px" height="30px" alt="food"/>
                                    Mealbox &times;15 
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <p> 190 </p>
                            </div>

                            <div className="col-md-6">
                                <p> 
                                    <img src="https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519" 
                                    width="40px" height="30px" alt="food"/>
                                    Mealbox &times;15 
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <p> 190 </p>
                            </div>

                            <div className="col-md-6">
                                <p> 
                                    <img src="https://media.istockphoto.com/photos/foods-high-in-zinc-picture-id1289940519" 
                                    width="40px" height="30px" alt="food"/>
                                    Mealbox &times;15 
                                </p>
                            </div>
                            <div className="col-md-6 text-center">
                                <p> 190 </p>
                            </div>
                        </div>
                        <p> Bill Details </p>
                        <div className="row">
                            <div class="col-md-6 para">
                                <p>Food Amonut</p>
                                <p>Dlivery Charges</p>
                                <p>Catering Charges</p>
                                <p>Wallet</p>
                                <p>Discount Paid</p>
                                <p>Taxes</p>
                            </div>
                            <div className="col-md-6 para">
                                <p className='text-center'>1405</p>
                                <p className='text-center text-success'> Free</p>
                                <p className='text-center'> 950</p>
                                <p className='text-center'></p>
                                <p className='text-center text-success'> -750</p>
                                <p className='text-center'>  950 </p>
                            </div>
                        </div>
                        <hr size="2" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 text-center">
                        <p className="hemu"> <i class="fa fa-download"></i> </p>
                    </div>
                    <div className="col-md-7">
                        <h5 className="text-center"> TOTAL BILL </h5>
                    </div>
                    <div className="col-md-3"> <p> 3175 </p> </div>
                </div>
        </Modal>
    )
}

export default Cart;