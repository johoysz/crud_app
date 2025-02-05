
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
    const navigate = useNavigate();

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

    const storeAndNavigate = () => {
        // Store user input (form data)
        Object.keys(formData).forEach((key) => {
            localStorage.setItem(key, formData[key]);
        });
    
        // Store hardcoded product details
        localStorage.setItem("randomId", Math.floor(Math.random() * 1000000));
        localStorage.setItem("itemName", "Iphone 15 Pro");
        localStorage.setItem("itemModel", "Iphone 15 Pro, 512 Gold");
        localStorage.setItem("qty", "1");
        localStorage.setItem("unitPrice", "29,999,000");
        localStorage.setItem("shipFee", "1,000");
        localStorage.setItem("disAmount", "1,000,000");
    
        navigate("/PayMethod"); // Redirect after storing values
    };
    

    // State for error messages
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form validation before navigation
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/PayMethod", { state: formData });
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
        <div className="w-auto h-screen mx-auto bg-gray-100 flex justify-center overflow-hidden">
            <div className="w-full h-fit max-w-2xl rounded-lg bg-white p-5 my-4 items-center overflow-auto"> {/* ADD VERTICAL MARGIN TO CENTER my-12 */}
                
                <form className="w-full max-w-3xl" onSubmit={handleSubmit}>

                    {/* Personal Details */}
                    <h2 className="mb-3 text-[22px] font-bold">Personal Details</h2>

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* First Name */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                    <h2 className="mb-3 text-[22px] font-bold">Billing Information</h2>

                    <div className="flex flex-col md:flex-row gap-2">

                        {/* Street */}
                        <div className="w-full md:w-1/2 px-3 mb-6">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Street</label>
                            <input
                                type="text"
                                name="street"
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                                className={`border rounded-xl p-2 w-full ${
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
                        onClick={() => {
                            navigate('/PayMethod');
                            storeAndNavigate();
                        }}
                        > Proceed to Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PersonalDetails;