import "./App.css";
import HeaderSection from "./HeaderSection/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import SliderSection from "./SliderSection/slider";
import SpinnerSection from "./FlashSpinnerSection/spinner";
import CategorySection from "./CategorySection/category";
import BumberSection from "./BumberSection/bumber";
import TopSellerSection from "./TopSellerSection/topSeller";
import AllProSection from "./AllProSection/allPro";
import AddsSection from "./AddsSection/adds";
import FooterSection from "./FooterSection/footer";
import HomeSection from "./home";
import LoginSection from "./LoginSection/login";
import CustomerSection from "./CustomerSection/Customer";
import ShoppingSection from "./ShoppingSection/Shop";
import OrderSection from "./OrderSection/Order";
import CustomerOrderSection from "./CustomerOrderSection/CustomerOrder";
import ShowCustomerSection from "./ShowCustomerSection/ShowCustomer";




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeSection />} />
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

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
