import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import { lazy, Suspense } from "react";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";


// import Product from "./pages/Product";
// import Pricing from "./pages/Pricing";
// import Homepage from "./pages/Homepage";
// import AppLayout from "./pages/AppLayout";
// import PageNotFound from "./pages/PageNotFound";
// import Login from "./pages/Login";

// dist/assets/index-hhcpLjOE.css   29.95 kB │ gzip:   5.05 kB
// dist/assets/index-BVXjkqvt.js   508.58 kB │ gzip: 148.64 kB

const Homepage = lazy(()=> import("./pages/Homepage"));
const Pricing = lazy(()=> import("./pages/Pricing"));
const Product = lazy(()=> import("./pages/Product"));
const AppLayout = lazy(()=> import("./pages/AppLayout"));
const PageNotFound = lazy(()=> import("./pages/PageNotFound"));
const Login = lazy(()=> import("./pages/Login"));






function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
        <Suspense fallback={<SpinnerFullPage />}>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="product" element={<Product />}/>
            <Route path="pricing" element={<Pricing />}/>
            <Route path="/login" element={<Login />}/>
            <Route 
            path="app" 
            element=
            {<ProtectedRoute>
              <AppLayout />
              </ProtectedRoute>}>
              <Route index element={<Navigate replace to="cities" /> } />
              <Route path="cities/:id" element={<City />} />
              <Route path="cities" element={<CityList />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />}/>
          </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  )
}

export default App
