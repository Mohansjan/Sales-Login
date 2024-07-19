//Basic Section
import HomeSection from "./home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";

// Features
import LoginSection from "./LoginSection/login";
import ShoppingSection from "./ShoppingSection/Shop";
import OrdersViewSection from "./OrdersViewSection/OrdersView";
import ContactSection from "./ContactSection/Contact.js";
import CartSection from "./CartSection/Cart.js";
import MapSection from "./mapSection/maps.js";
import CustomerAddedSection from "./CustomerAddedSection/CustomerAdded.js";
import CustomerSection from "./CustomerSection/Customer";
import ReturnSection from "./ReturnSection/Return.js";

//Product view Details
import IOrderSection from "./IOrderSection/IOrder.js";
import BOrderSection from "./BOrderSection/BOrder.js";
import WOrderSection from "./WOrderSection/WOrder.js";
import ROrderSection from "./ROrderSection/ROrder.js";
import VOrderSection from "./VOrderSection/VOrder.js";
import SOrderSection from "./SOrderSection/SOrder.js";
import OrderSection from "./OrderSection/Order";

//View Product and Customer details
import IkallCustomer from "./IkallCustomer/Ikall.js";
import IballCustomer from "./IballCustomer/Iball.js";
import ShowCustomerSection from "./ShowCustomerSection/ShowCustomer";

//Prouct Order Section
import CustomerOrderSection from "./CustomerOrderSection/CustomerOrder";
import CustomerIOrderSection from "./CustomerIOrderSection/CustomerIOrder.js";
import CustomerBOrderSection from "./CustomerBOrderSection/CustomerBOrder.js";
import CustomerWOrderSection from "./CustomerWOrderSection/CustomerWOrder.js";
import CustomerROrderSection from "./CustomerROrderSection/CustomerROrder.js";
import CustomerVOrderSection from "./CustomerVOrderSection/CustomerVOrder.js";
import CustomerSOrderSection from "./CustomerSOrderSection/CustomerSOrder.js";
import SignupSection from "./SignupSection/Signup.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home"
            element={<HomeSection />}
          />
           
          <Route path="/"
           element={<SignupSection/>}
           />

          <Route
            path="/login"
            element={<LoginSection />}
          />

          <Route
            path="/Customer"
            element={<CustomerSection />}
          />

          <Route
            path="/Shop"
            element={<ShoppingSection />}
          />

          <Route
            path="/Return"
            element={<ReturnSection />}
          />

          <Route
            path="/Contact"
            element={<ContactSection />}
          />

          <Route
            path="/CustomerAdded"
            element={<CustomerAddedSection />}
          />

          <Route
            path="/maps"
            element={<MapSection />}
          />

          <Route
            path="/ShowCustomer"
            element={<ShowCustomerSection />}
          />

          <Route
            path="/Ikall"
            element={<IkallCustomer />}
          />

          <Route
            path="/Iball"
            element={<IballCustomer />}
          />

          <Route
            path="/OrdersView"
            element={<OrdersViewSection />}
          />

          <Route
            path="/Order"
            element={<OrderSection />}
          />

          <Route
            path="/IOrder"
            element={<IOrderSection />}
          />

          <Route
            path="/BOrder"
            element={<BOrderSection />}
          />

          <Route
            path="/WOrder"
            element={<WOrderSection />}
          />

          <Route
            path="ROrder"
            element={<ROrderSection />}
          />

          <Route
            path="VOrder"
            element={<VOrderSection />}
          />

          <Route
            path="SOrder"
            element={<SOrderSection />}
          />

          <Route
            path="/CustomerOrder"
            element={<CustomerOrderSection />}
          />


          <Route
            path="/CustomerIOrder"
            element={<CustomerIOrderSection />}
          />

          <Route
            path="/CustomerBOrder"
            element={<CustomerBOrderSection />}
          />

          <Route
            path="CustomerWOrder"
            element={<CustomerWOrderSection />}
          />

          <Route
            path="/CustomerROrder"
            element={<CustomerROrderSection />}
          />

          <Route
            path="/CustomerVorder"
            element={<CustomerVOrderSection />}
          />

          <Route
            path="/CustomerSOrder"
            element={<CustomerSOrderSection />}
          />

          <Route
            path="/Cart"
            element={<CartSection />}
          />

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
