import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const [pickupLocation, setPickupLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const navigate = useNavigate();



    const handleSearch = (e) => {
        e.preventDefault();
console.log({ pickupLocation, pickupDate, returnDate });
        if (!pickupLocation || !pickupDate || !returnDate) {
            alert("Please select all fields!");
            return;
        }

        // Navigate to /cars with query params
        navigate(
            `/cars?location=${encodeURIComponent(pickupLocation)}&pickup=${pickupDate}&return=${returnDate}`
        );
    };


    return (
        <div className='mt-3 flex flex-col items-center justify-center gap-1 text-center'>
            
            <form onSubmit={handleSearch} className='flex flex-col md:flex-row items-start md:items-center
      justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-3xl 
       shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'>

                <div className='flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8'>
                    <div className='flex flex-col items-start gap-2'>
                        <select required value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)}>
                            <option value="">Pickup Location</option>
                            {cityList.map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Select location'}</p>
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor="pickup-date">Pick-up Date</label>
                      <input
  type="date"
  id="pickup-date"
  min={new Date().toISOString().split('T')[0]}
  value={pickupDate}
  onChange={(e) => setPickupDate(e.target.value)}
  className="text-sm text-gray-500"
  required
/>
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <label htmlFor="return-date">Return Date</label>
                       <input
  type="date"
  id="return-date"
  min={pickupDate || new Date().toISOString().split('T')[0]}
  value={returnDate}
  onChange={(e) => setReturnDate(e.target.value)}
  className="text-sm text-gray-500"
  required
/>
                    </div>

                </div>
                <button type='submit' className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white rounded-full cursor-pointer'>
                    <img src={assets.search_icon} alt="search" className='brightness-320' />Search</button>
            </form>

            
        </div>
    )
}

export default Hero
