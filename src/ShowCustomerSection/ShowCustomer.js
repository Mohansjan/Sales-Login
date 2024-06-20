import React, { useEffect, useState } from 'react';
import './ShowCustomer.css';

const ShowCustomerSection = () => {
    const [customerOrders, setCustomerOrders] = useState([]);
    console.log(customerOrders);
    const fetchData = async () => {
        const apiUrl = ' https://dev-mohansjan.gateway.apiplatform.io/v1/YuvaStoreOrd';
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'pkey': '3fcc20cdc093c0403fc55b721aab6f3c',
                    'apikey': 'ZdzwOIDYW0AKYVD6BkZqyBbHcjb3pyGc',
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            //console.log(customerOrders);
            // alert('hi')
            setCustomerOrders(data); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []); 

    return (
          

        <section class="intro">
  <div class="gradient-custom-2 h-100">
    <div class="mask d-flex align-items-center h-100">
      <div class="container-12">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="table-responsive">
                <h2 className='sw-1'>Customer Details</h2>
              <table class="table table-dark table-bordered mb-0">
                <thead>
                  <tr>
                    <th scope="col">Product_Name</th>
                    <th scope="col">Product_Price</th>
                    <th scope="col">Product_category</th>
                    <th scope="col">Cus_Name</th>
                    <th scope="col">Cus_Address</th>
                    <th scope="col">Cus_PNumber</th>
                    <th scope='col'>Delivary_date</th>
                  </tr>
                </thead>
                <tbody>
                
                  {customerOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.Product_Name}</td>
                                <td>{order.Product_Price}</td>
                                <td>{order.Product_category}</td>
                                <td>{order.Cus_Name}</td>
                                <td>{order.Cus_Address}</td>
                                <td>{order.Cus_PNumber}</td> 
                                <td>{order.Delivary_date}</td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




           /* <div>
                <div className='container-2'>           
                <h2 className='CO-1'>Customer Orders</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Product_Name</th>
                            <th>Product_Price</th>
                            <th>Product_category</th>
                            <th>Cus_Name</th>                       
                            <th>Cus_Address</th>
                            <th>Cus_PNumber</th>

                        </tr>
                    </thead>
                    <tbody>
                        {customerOrders.map((order, index) => (
                            <tr key={index}>
                                <td>{order.Product_Name}</td>
                                <td>{order.Product_Price}</td>
                                <td>{order.Product_category}</td>
                                <td>{order.Cus_Name}</td>
                                <td>{order.Cus_Address}</td>
                                <td>{order.Cus_PNumber}</td> 
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>*/
    );
};

export default ShowCustomerSection;

