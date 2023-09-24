import { CalculatorPage } from "./pages/CalculatorPage"
import { LoansPage } from "./pages/LoansPage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom";
import { BusinessLoansPage } from "./pages/BusinessLoansPage";
import { SuccessLoanPage } from "./pages/SuccessLoanPage";

function App() {
    return <Routes>
        <Route exact path="/" element={<CalculatorPage />} />
        <Route path="/loan" element={<LoansPage />} />
        <Route path="/loan/business-loan" element={<BusinessLoansPage />} />
        <Route path="/success-loan" element={<SuccessLoanPage />} />
    </Routes>

}

export default App
