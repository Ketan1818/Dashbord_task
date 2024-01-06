import '../Style/Home.css'
import { CiCalendarDate, } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";

import { IoIosCreate } from "react-icons/io";


function Home(){

    return (
        <>
         <div className="main-container1">
            <div className='date'>
            
                <div className='nav1'>
                <sec className='sec'> <span className='span2'>Time</span> Date Monthly 
</sec>
       <sec className='sec'>  Date <CiCalendarDate /></sec> 
                   </div>  
            </div>
          <div className='container2'>
            <div className='c-left'>
                <div className='box-left'>
                    <span className='span-c'>
                    <h1>Number of Paid Invoices</h1>
                    <h1>324</h1>
                    </span>
                    <span className='span-c1'>
                        <h1>Value of Paid Invoices</h1>
                        <h1>2705.96</h1>
                    </span>
                  
                </div>
                <div className='left-div'>
                    <div className='lf'>Create Invoice <IoIosCreate /></div>
                    <div className='lf'>Add Customer <IoPeopleSharp /></div>
                </div>

                <div className='box3'>
                    <span className='footer-left'>
                    <p className='par'>Todays Invoice</p>
                    <div>
                        <ul className='ul'>
                            <li className='li'>Payment Ref</li>
                            <li className='li'>Invoice Value</li>
                            <li className='li'>Invoice Status</li>
                        </ul>
                        <ul className='ul1'>
                        <li className='li2'>No Data Found</li>
                    
                        </ul>
                    
                    </div>
                   
                    </span>
                  
                  
                </div>
            </div>
            <div className='c-right'>
            <div className='item-sec1'>
                <div className='items1'>
                    <span className='boxs'>
                    <h3>Invoices Created</h3>
                    <h1>342</h1>
                    </span>
                   
                </div>
                <div className='items1'>
                <span className='boxs'>
                    <h3>Number of Customers</h3>
                    <h1>971</h1>
                    </span>
                </div>
            
            </div>
             
            <div className='item-sec1'>
                <div className='items1'>
                <span className='boxs'>
                    <h3>Value of Transactions</h3>
                    <h1>873</h1>
                    </span>
                </div>
                <div className='items1'>
                <span className='boxs'>
                    <h3>Invoices Created</h3>
                    <h1>15</h1>
                    </span>
                </div>
            </div>
                <div className='right-footer'>
                <span className='footer-left'>
                    <p className='par'>Todays Invoice</p>
                    <div>
                        <ul className='ul'>
                            <li className='li'>Payment Ref</li>
                            <li className='li'>Invoice Value</li>
                            <li className='li'>Invoice Status</li>
                            <li className='li'>Invoice Status</li>
                        </ul>
                        <ul className='ul1'>
                        <li className='li3'>No Data Found</li>
                    
                        </ul>
                    
                    </div>
                   
                    </span>
                </div>
          </div>
            
         </div>

      

         </div>
         

       
     
        </>
    )
    
}
export default Home;