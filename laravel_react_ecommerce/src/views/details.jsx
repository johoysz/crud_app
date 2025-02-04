import { useState } from "react";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import orderImage from "../assets/images/black-tshirt.jpg";

const Details = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Prevent scrolling on the page
        document.body.style.overflow = 'hidden'; // Disable scrolling
        document.documentElement.style.overflow = 'hidden'; // Prevent scrolling on html as well
    
        // Cleanup the effect on component unmount
        return () => {
          document.body.style.overflow = ''; // Reset overflow behavior
          document.documentElement.style.overflow = ''; // Reset overflow behavior
        };
      },  []);

      const addedValues = {
        itemName: "Black T-shirt",
        qty: 2,
        unitPrice: 100,
        totalPrice: 200,
        subTotPrice: 100,
        shippingFee: 50,
        discountAmt: 0,
        totalOrderAmt: 100
    };

    // State to track form values
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        mobile: "",
        email: "",
        street: "",
        barangay: "",
        city: "",
        region: "",
        zip: "",
    });

    const getValue = (key) => addedValues[key];

    // State for error messages
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation before navigation
    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        // Check if required fields are empty
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = "Please fill out this field.";
            }
        });

        // If errors exist, update state & prevent navigation
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            navigate("/ewallet"); // Navigate to payment // ERROR NO CHANGE
        }
    };

    return (
        <div className="w-screen h-screen mx-auto bg-gray-100 flex justify-center overflow-hidden">
            <div className="w-full h-full max-w-2xl rounded-lg bg-white p-5 items-center overflow-auto"> {/* ADD VERTICAL MARGIN TO CENTER my-12 */}
                
                <form className="w-full max-w-3xl" onSubmit={handleSubmit}>

                    {/* Order Summary 
                        itemname, quantity, unit price, total price
                        subtotal price, shipping price, discount amount, totalorderamount
                    */}

                    <div className="flex flex-col md:flex-col gap-2 rounded-xl border-2 border-black-600">

                        <h2 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2 ml-4 my-4">Order Summary</h2>

                        <img className="h-48 w-full object-contain" src={orderImage} alt="Black T-shirt" />

                        <div className="flex flex-col md:flex-row gap-2 my-4 mx-4">
                            <label className="flex-1 block tracking-wide text-gray-700 text-xl font-bold mb-2 ml-4 grid justify-items-end">{getValue("itemName")}</label>
                            <label className="flex-1 block tracking-wide text-red-500 text-xl font-bold mb-2 ml-4">Php {getValue("unitPrice")}.00</label>
                        </div>

                        <hr className="border-t-2 border-gray-300 mx-3" />

                        <h2 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2 ml-4 my-4">Payment Summary</h2>

                        <div className="flex flex-col md:flex-row gap-2 my-4 mx-4">
                            <label className="flex-1 block tracking-wide text-gray-700 text-xl font-bold mb-2 ml-4 grid justify-items-end">Qty: {getValue("qty")}</label>
                            <label className="flex-1 block tracking-wide text-red-500 text-xl font-bold mb-2 ml-4">Total: {getValue("totalPrice")}</label>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 my-4 mx-4">
                            <label className="flex-1 block tracking-wide text-gray-700 text-xl font-bold mb-2 ml-4 grid justify-items-end">Discount:</label>
                            <label className="flex-1 block tracking-wide text-red-500 text-xl font-bold mb-2 ml-4">Php {getValue("discountAmt")}.00</label>
                        </div>

                    </div>

                    {/* Personal Details */}
                    <h2 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Personal Details</h2>

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* First Name */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.firstName ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="Jane"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
                        </div>

                        {/* Last Name */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.lastName ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="Doe"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row gap-2">

                        {/* Mobile Number */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Mobile Number</label>
                            <input
                                type="text"
                                name="mobile"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.mobile ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="+63 9XXXXXXXXX"
                                value={formData.mobile}
                                onChange={handleChange}
                            />
                            {errors.mobile && <p className="text-red-500 text-xs italic">{errors.mobile}</p>}
                        </div>

                        {/* Email Address */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="janedoe@gmail.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>
                    </div>

                    {/* Billing Information */}
                    <h2 className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">Billing Information</h2>

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* Street */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Street</label>
                            <input
                                type="text"
                                name="street"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.street ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="123 Talamban Road"
                                value={formData.street}
                                onChange={handleChange}
                            />
                            {errors.street && <p className="text-red-500 text-xs italic">{errors.street}</p>}
                        </div>

                        {/* Barangay */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Barangay</label>
                            <input
                                type="text"
                                name="barangay"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.barangay ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="Apas Lahug"
                                value={formData.barangay}
                                onChange={handleChange}
                            />
                            {errors.barangay && <p className="text-red-500 text-xs italic">{errors.barangay}</p>}
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* City */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">City</label>
                            <input
                                type="text"
                                name="city"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.city ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="Cebu City"
                                value={formData.city}
                                onChange={handleChange}
                            />
                            {errors.city && <p className="text-red-500 text-xs italic">{errors.city}</p>}
                        </div>

                        {/* Region */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Region</label>
                            <input
                                type="text"
                                name="region"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.region ? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="Region VII"
                                value={formData.region}
                                onChange={handleChange}
                            />
                            {errors.region && <p className="text-red-500 text-xs italic">{errors.region}</p>}
                        </div>

                        {/* Zip */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Zip</label>
                            <input
                                type="text"
                                name="zip"
                                className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                                    errors.zip? "border-red-500" : "border-gray-300"
                                } rounded py-3 px-4 mb-3 focus:outline-none focus:bg-white`}
                                placeholder="6000"
                                value={formData.zip}
                                onChange={handleChange}
                            />
                            {errors.zip && <p className="text-red-500 text-xs italic">{errors.zip}</p>}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex flex-col gap-2">
                        <button
                            type="submit"
                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            /* onClick={() => navigate('/ewallet')} /* Remove for input field tests */
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Details;
