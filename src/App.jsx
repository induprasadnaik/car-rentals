import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import Bookings from './pages/MyBookings';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { setCars } from './redux/carsSlice';
import SigninSignup from './components/SigninSignup';
import MyBookings from "./pages/MyBookings";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isOwnerPath = useLocation().pathname.startsWith('/owner');
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
const dummyCarData = [
      {
          "id": "1",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "2",
          "brand": "Maruthi",
          "model": "Eeco",
          "image": 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSF6-cN2vrGMkNyGUt0wA9bgih4dqr1zjvrKT6R5T9XsON8fQ7pEMTXx0-t6p102qWnvIQ2lUVAIoIe3ILaiypFFhEly0S9JCWVMQuBXpZ4SA',
          "category": "Van",
          "seating_capacity": 7,
          "pricePerDay": 2800,
          "location": "Kozhikode",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "3",
          "brand": "Maruthi",
          "model": "Swift",
          "image": 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsx4U2683WFrnWozERcOmz6T3h00sR2vWaGw&s',
          "category": "Sedan",
          "seating_capacity": 5,
          "pricePerDay": 2300,
          "location": "Idukki",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "4",
          "brand": "Maruthi",
          "model": "Ertiga",
          "image": 'https://www.varunmaruti.com/uploads/products/colors/ertiga-pearl-midnight-black.png',
          "category": "SUV",
          "seating_capacity": 7,
          "pricePerDay": 3100,
          "location": "Kollam",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "5",
          "brand": "Toyota ",
          "model": "Glansa",
          "image": 'https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/113027/glanza-facelift-front-view.jpeg?isig=0&q=80',
          "category": "Car",
          "seating_capacity": 5,
          "pricePerDay": 3500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "6",
          "brand": "Kia",
          "model": "Seltos",
          "image": 'https://imgd.aeplcdn.com/370x208/n/cw/ec/174323/seltos-exterior-right-front-three-quarter-3.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "7",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "8",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "9",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "10",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "11",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
      {
          "id": "12",
          "brand": "Ford",
          "model": "Figo",
          "image": 'https://imgd.aeplcdn.com/664x374/n/cw/ec/35463/figo-exterior-right-front-three-quarter-151687.jpeg',
          "category": "SUV",
          "seating_capacity": 5,
          "pricePerDay": 2500,
          "location": "Kochi",
          "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis itaque eaque, veritatis nemo quia neque voluptatem iure repellat numquam ad magnam quis ut accusamus enim dolores quod suscipit delectus ullam.",
          "isAvaliable": true,
          "createdAt": "2025-04-16T07:26:56.215Z",
      },
  ];
  useEffect(() => {
    dispatch(setCars(dummyCarData));
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/car-details/:id' element={<CarDetails />} />
        <Route path='/cars' element={<Cars />} />
        <Route path='/bookings' element={<Bookings />} />
        <Route path="/signin" element={<SigninSignup />} />
          <Route path="/mybookings" element={<MyBookings />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
