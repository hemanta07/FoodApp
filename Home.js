import React from "react";
import "./App.css";
const Home = props =>{
  return (
    <div className="container-fluid mt-2">
    <div className="row bg-warning p-3">
        <div className="col-md-6 ">
            <div className="row">
                <div className="col-md-5 text-right">
                    <h1 className="text-white"> Hello, Prasad </h1>
                </div>
                <div className="col-md-7">
                    <h5 className="pt-3"> Logout </h5>
                </div>
            </div> 
            <div className="row">
                <div className="col-md-12">
                    <h5 className="pl-5"> 9945099450, support@ohieo.com </h5>
                </div>
            </div>              
        </div>
        <div className="col-md-6">
            <div className="row">
                <div className="col-md-6 text-right mt-3">
                    <h5> Need help? </h5>
                </div>
                <div className="col-md-4 mt-2 p-2 text-center">
                    <h4 className="text-white edit"> EDIT PROFILE </h4>
                </div>
                <div className="col-md-2">

                
            </div>
        </div>
    </div>
</div>


<div className="container-fluid mt-2">
    <div className="row">
        <div className="col-md-3">
            <ul type="none" className="leftbg pl-5" >
                <li className="border-none pt-5 pb-5 pl-5"> <h3> <i class="fa fa-shopping-bag icons"></i> Orders </h3> </li>
                <li className="border-none pt-5 pb-5 pl-5"> <h3> <i class="fa fa-history icons"></i> History </h3>  </li>
                <li className="border-none pt-5 pb-5 pl-5"> <h3> <i class="fa fa-briefcase icons"></i> Wallet </h3> </li>
                <li className="border-none pt-5 pb-5 pl-5"> <h3> <i class="fa fa-sticky-note icons"></i> Feedback </h3> </li>
                <li className="border-none pt-5 pb-5 pl-5"> <h3> <i class="fa fa-star icons"></i> Favourite </h3> </li>
            </ul>
        </div>
        <div className="col-md-9 px-5 py-3">
            <div className="border p-3 mb-4" id="card">  
                <div className="border p-1" id="item">
                    <div className="rounded">
                        menu
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <h5> Order Reference No. OHM_31781588606526 </h5>
                        <h5> Delivery Date: 16/03/2021 </h5>
                        <h5> Delivery Time: Afternoon 2 PM 
                            <span class="catering ml-5"> 
                                <i class="fa fa-check-circle text-primary"></i> Catering Service
                            </span> 
                        </h5>
                    </div>
                    <div className="col-md-4">
                        <h4 className="complete"> Completed </h4>
                        <h5 className="mt-4"> <i class="fa text-primary fa-table"></i> Order Date: 12/3/2021 </h5>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="hr"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3"> 
                    <button className="complete" onClick={props.onShowCartHandler}> View menu </button> 
                    </div>
                    <div className="col-md-5"> <p class="download">
                        <i className="fa fa-file"></i> Download payment Receipt </p> 
                    </div>
                    <div className="col-md-3"> <h5 class="text-center"> Total Paid </h5> </div>
                </div>
            </div>

            <div className="border p-3" id="card">  
                <div className="border p-1 mb-4" id="item">
                    <div className="rounded">
                        menu
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <h5> Order Reference No. OHM_31781588606526 </h5>
                    </div>
                    <div className="col-md-4">
                        <h4 className="complete"> Completed </h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-7">
                        <h5 className="mt-4"> <i class="fa text-primary fa-truck"></i> Delivered </h5>
                    </div>
                    <div className="col-md-4">
                        <h5 className="mt-4"> <i class="fa text-primary fa-table"></i> Order Date: 12/3/2021 </h5>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="hr"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-3"> <button className="complete" onClick={props.onShowCartHandler}> View menu </button> </div>
                    <div className="col-md-5"> <p className="download">
                        <i className="fa fa-file"></i> Download payment Receipt </p> 
                    </div>
                    <div className="col-md-3"> <h5 class="text-center"> Total Paid </h5> </div>
                </div>
            </div>          
        </div>
    </div>
</div>

</div>
  );
}
export default Home;
