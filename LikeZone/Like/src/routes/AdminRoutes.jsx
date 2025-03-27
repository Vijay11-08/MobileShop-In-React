import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Signin from '../pages/auth/Signin';
import Home from '../pages/Home';
import Events from '../pages/Events';
import Calendar from '../pages/Calender';
import Flashbacks from '../pages/Flashbacks';
import Feedback from '../pages/Feedback';
import Signup from '../pages/auth/Signup';
import ViewDetails from '../pages/ViewDetails';
import EventRegister from '../pages/EventRegister';
import Account from '../pages/Account';
import ForgotPassword from '../pages/auth/ForgotPassword';
import AdminEvents from '../pages/Admin/AdminEvents';
import Sidebar from '../components/AdminComponents/Sidebar';
import EventTable from '../components/AdminComponents/EventTable';
import EventForm from '../components/AdminComponents/EventForm';
import AdminRegistrations from '../pages/Admin/AdminRegistrations';
import AdminFlashbacks from '../pages/Admin/AdminFlashbacks';
import AdminPayments from '../pages/Admin/AdminPayments';
import AdminLogin from '../pages/Admin/AdminLogin';
import AdminCalendar from '../pages/Admin/AdminCalendar';
import AdminFeedbacks from '../pages/Admin/AdminFeedbacks';
import AdminRoute from '../routes/AdminRoute'; // Protect Admin Route
import ProtectedRoute from './ProtectedRoute'; // Protect User Routes

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {/* Public Routes */}
      <Route index element={<Home />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="home"
        element={
          
            <Home />
          
        }
      />
      <Route
        path="events"
        element={
          
            <Events />
          
        }
      />
      <Route
        path="calender"
        element={
          
            <Calendar />
          
        }
      />
      <Route path="flashbacks" element={<Flashbacks />} />
      <Route
        path="feedback"
        element={
          
            <Feedback />
          
        }
      />
      <Route
        path="viewdetails"
        element={
          
            <ViewDetails />
          
        }
      />
      <Route
        path="eventregister"
        element={
          
            <EventRegister />
          
        }
      />
      <Route
        path="account"
        element={
          
            <Account />
          
        }
      />

      <Route path="forgot" element={<ForgotPassword />} />
      <Route path="viewdetails" element={<ViewDetails />} />
      <Route path="eventregister" element={<EventRegister />} />
      <Route path="account" element={<Account />} />
      <Route path="sidebar" element={<Sidebar />} />
      <Route path="eventtable" element={<EventTable />} />
      <Route path="eventform" element={<EventForm />} />

      {/* Protected Admin Route */}

      <Route
        index
        element={
         
            <AdminEvents />
       
        }
      />
      <Route
        path="adminevents"
        element={
         
            <AdminEvents />
       
        }
      />
      <Route
        path="adminregistrations"
        element={
         
            <AdminRegistrations />     
        }
      />
      <Route
        path="adminflashbacks"
        element={
         
            <AdminFlashbacks />
       
        }
      />
      <Route
        path="adminpayments"
        element={
         
            <AdminPayments />
       
        }
      />
      <Route
        path="adminlogin"
        element={
         
            <AdminLogin />
       
        }
      />
      <Route
        path="admincalendar"
        element={
         
            <AdminCalendar />
       
        }
      />
      <Route
        path="adminfeedbacks"
        element={
         
            <AdminFeedbacks />
       
        }
      />
    </Route>,
  ),
);

const AppRouters = () => {
  return <RouterProvider router={router} />;
};

export default AppRouters;