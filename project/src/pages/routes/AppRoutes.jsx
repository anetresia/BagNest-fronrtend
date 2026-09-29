// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LandingPage from "../pages/public/LandingPage";
// import Login from "../pages/public/Login";
// import Register from "../pages/public/Register";

// import TravellerDashboard from "../pages/traveller/TravellerDashboard";
// import ExploreStorage from "../pages/traveller/ExploreStorage";
// import StorageDetails from "../pages/traveller/StorageDetails";
// import Booking from "../pages/traveller/Booking";
// import MyBookings from "../pages/traveller/MyBookings";
// import BookingDetails from "../pages/traveller/BookingDetails";
// import Profile from "../pages/traveller/Profile";

// import PartnerDashboard from "../pages/partner/PartnerDashboard";
// import ManageStorage from "../pages/partner/ManageStorage";
// import StorageForm from "../pages/partner/StorageForm";
// import PartnerBookings from "../pages/partner/PartnerBookings";
// import CheckInOut from "../pages/partner/CheckInOut";
// import CSVImport from "../pages/partner/CSVImport";
// import Reports from "../pages/partner/Reports";

// function AppRoutes() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Public Routes */}

//         <Route path="/" element={<LandingPage />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/register" element={<Register />} />


//         {/* Traveller Routes */}

//         <Route
//           path="/traveller-dashboard"
//           element={<TravellerDashboard />}
//         />

//         <Route
//           path="/explore-storage"
//           element={<ExploreStorage />}
//         />

//         <Route
//           path="/storage/:id"
//           element={<StorageDetails />}
//         />

//         <Route
//           path="/booking/:id"
//           element={<Booking />}
//         />

//         <Route
//           path="/my-bookings"
//           element={<MyBookings />}
//         />

//         <Route
//           path="/booking-details/:id"
//           element={<BookingDetails />}
//         />

//         <Route
//           path="/profile"
//           element={<Profile />}
//         />


//         {/* Partner Routes */}

//         <Route
//           path="/partner-dashboard"
//           element={<PartnerDashboard />}
//         />

//         <Route
//           path="/manage-storage"
//           element={<ManageStorage />}
//         />

//         <Route
//           path="/storage-form"
//           element={<StorageForm />}
//         />

//         <Route
//           path="/partner-bookings"
//           element={<PartnerBookings />}
//         />

//         <Route
//           path="/check-in-out"
//           element={<CheckInOut />}
//         />

//         <Route
//           path="/csv-import"
//           element={<CSVImport />}
//         />

//         <Route
//           path="/reports"
//           element={<Reports />}
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default AppRoutes;