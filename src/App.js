import "./App.css";
//import HeaderSection from "./HeaderSection/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import SliderSection from "./SliderSection/slider";
// import SpinnerSection from "./FlashSpinnerSection/spinner";
// import CategorySection from "./CategorySection/category";
// import BumberSection from "./BumberSection/bumber";
// import TopSellerSection from "./TopSellerSection/topSeller";
// import AllProSection from "./AllProSection/allPro";
// import AddsSection from "./AddsSection/adds";
// import FooterSection from "./FooterSection/footer";
import HomeSection from "./home";
import LoginSection from "./LoginSection/login";
import CustomerSection from "./CustomerSection/Customer";
import ShoppingSection from "./ShoppingSection/Shop";
import OrderSection from "./OrderSection/Order";
import CustomerOrderSection from "./CustomerOrderSection/CustomerOrder";
import ShowCustomerSection from "./ShowCustomerSection/ShowCustomer";
import OrdersViewSection from "./OrdersViewSection/OrdersView";
import IOrderSection from "./IOrderSection/IOrder.js";
import BOrderSection from "./BOrderSection/BOrder.js";
import ContactSection from "./ContactSection/Contact.js";
import CusIOrder from "./CustomerIOrder/CusIOrder.js";
import WOrderSection from "./WOrderSection/WOrder.js";
import CustomerBOrderSection from "./CustomerBOrderSection/CustomerBOrder.js";
import CategorySection from "./CategorySection/category.js";
import CartSection from "./CartSection/Cart.js"
import IkallCustomer from "./IkallCustomer/Ikall.js";
import ReturnSection from "./ReturnSection/Return.js";
import IballCustomer from "./IballCustomer/Iball.js";
import CustomerAddedSection from "./CustomerAddedSection/CustomerAdded.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeSection />} />
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
            path="/Order"
            element={<OrderSection />}
          />
          <Route
            path="/CustomerOrder"
            element={<CustomerOrderSection />}
          />

          <Route
            path="/ShowCustomer"
            element={<ShowCustomerSection />}
          />

          <Route
            path="/OrdersView"
            element={<OrdersViewSection />}
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
            path="/Contact"
            element={<ContactSection />}
          />

          <Route
            path="/CusIOrder"
            element={<CusIOrder />}
          />

          <Route
            path="/WOrder"
            element={<WOrderSection />}
          />

          <Route
            path="/CustomerBOrder"
            element={<CustomerBOrderSection />}
          />


          <Route
            path="/Cart"
            element={<CartSection />}
          />

          <Route
            path="/Ikall"
            element={<IkallCustomer />}
          />

          <Route
            path="/Return"
            element={<ReturnSection />}
          />

          <Route
            path="/Iball"
            element={<IballCustomer/>}
          />
           <Route
            path="/CustomerAdded"
            element={<CustomerAddedSection/>}
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
