import IphoneImage from '../assets/images/iphone.png';
import { useLocation } from "react-router-dom";

const payMethod = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
    const {
        firstName,
        middleName,
        lastName,
        email,
        mobile,
        street,
        barangay,
        city,
        region,
        zip,
        randomId,
        itemName,
        qty,
        unitPrice,
        itemModel,
        shipFee,
        disAmount,
    } = location.state || {};

  return (
    <div className='w-auto h-auto mx-auto p-6 bg-gray-100 gap-4 grid grid-cols-[60%_40%] w-full'>
        <div className='rounded-lg bg-white p-5'>
            <h2 className='text-[22px] font-bold'>Payment Method</h2>
            
            <div className='mt-3'>
                <div className="mx-auto">
                    <p className="mt-3 font-bold text-[17px]">Customer Information</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="relative">
                        <p>Fullname</p>
                        <input readOnly className="border rounded-xl p-2 w-full" type="text" value={firstName + middleName + lastName || "N/A"} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input readOnly className="border rounded-xl p-2 w-full" type="text" value={email || "N/A"} />
                    </div>
                    <div>
                        <p>Phone number</p>
                        <input readOnly className="border rounded-xl p-2 w-full" value={mobile || "N/A"} />
                    </div>
                </div>
            </div>

            <div className='mt-3'>
                <div className="mx-auto">
                    <p className="mt-3 font-bold text-[17px]">Billing Information</p>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="relative">
                        <p>Street</p>
                        <input readOnly className="border rounded-xl p-2 w-full" type="text" value={street || "N/A"} />
                    </div>
                    <div>
                        <p>Barangay</p>
                        <input readOnly className="border rounded-xl p-2 w-full" type="text" value={barangay || "N/A"} />
                    </div>
                    <div>
                        <p>City</p>
                        <input readOnly className="border rounded-xl p-2 w-full" value={city || "N/A"} />
                    </div>
                    <div>
                        <p>Region</p>
                        <input readOnly className="border rounded-xl p-2 w-full" value={region || "N/A"} />
                    </div>
                    <div>
                        <p>Zip</p>
                        <input readOnly className="border rounded-xl p-2 w-full" value={zip || "N/A"} />
                    </div>
                </div>

            </div>
            
            
            <div className='mt-3'>
                <div className="mx-auto">
                    <p className="mt-3 font-bold text-[17px]">Payment</p>
                </div>

                <div className='mt-3 rounded-lg bg-gray-50 p-5 w-full h-32 text-center'>
                    <div className='grid justify-center items-center'>
                        <p>Your total payment</p>
                        <p className='font-bold text-[30px]'>$ {((unitPrice*qty) + shipFee) - disAmount || "N/A"} </p>
                        <p className='text-[11px] text-gray-400'>Pay before March 13</p>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <div className="mx-auto">
                    <p className="mt-3 font-bold text-[17px]">Select Method</p>
                </div>
                <div className='mt-3 rounded-lg bg-gray-50 p-3 w-full h-auto'>
                    <div className="flex items-center ">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium">E-Wallet</label>
                    </div>
                    <div className='flex p-5 justify-evenly'>
                        <button className='text-blue-700 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm p-5 text-center me-2 mb-2'>
                            <img alt="File:GCash logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/GCash_logo.svg/610px-GCash_logo.svg.png?20230830061433" decoding="async" width="80" height="80" srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/GCash_logo.svg/915px-GCash_logo.svg.png?20230830061433 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/GCash_logo.svg/1220px-GCash_logo.svg.png?20230830061433 2x" data-file-width="610" data-file-height="145" /> 
                        </button>
                        <button className='text-green-700 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-6 py-6 text-center me-2 mb-2'>
                            <img alt="File:Maya logo.svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maya_logo.svg/148px-Maya_logo.svg.png?20220502032254" decoding="async" width="80" height="70" srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maya_logo.svg/222px-Maya_logo.svg.png?20220502032254 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Maya_logo.svg/296px-Maya_logo.svg.png?20220502032254 2x" data-file-width="148" data-file-height="43" />
                        </button>
                        <button className='text-orange-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-6 py-6 text-center me-2 mb-2'>
                            <img width="80" height="70" src="https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf-512x512.png" alt="ShopeePay logo" title="Free download ShopeePay logo" data-no-lazy="1" decoding="async" srcSet="https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf-512x512.png 512w, https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf-300x300.png 300w, https://brandlogos.net/wp-content/uploads/2022/08/shopeepay-logo_brandlogos.net_yl7nf.png 768w" sizes="(max-width: 512px) 100vw, 512px" />
                        </button>
                    </div>
                    <hr className="h-px mb-3 bg-gray-100 border-0 dark:bg-gray-300" />
                    <div className="flex items-center mb-4">
                        <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium">Card</label>
                    </div>
                    <div className='flex p-5 justify-evenly'>
                        <button className='text-blue-700 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm p-5 text-center me-2 mb-2'>
                            <img alt="File:BDO Unibank (logo).svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/415px-BDO_Unibank_%28logo%29.svg.png?20110323130330" decoding="async" width="80" height="70" srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/623px-BDO_Unibank_%28logo%29.svg.png?20110323130330 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/BDO_Unibank_%28logo%29.svg/830px-BDO_Unibank_%28logo%29.svg.png?20110323130330 2x" data-file-width="415" data-file-height="145" />
                        </button>
                        <button className='text-green-700 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-6 py-6 text-center me-2 mb-2'>
                            <img width="80" height="70" src="https://seeklogo.com/images/B/bpi-bank-of-the-philippine-islands-logo-CDA78743BD-seeklogo.com.png" alt="BPI - Bank of the Philippine Islands Logo PNG Vector" title="BPI - Bank of the Philippine Islands Logo PNG Vector" />
                        </button>
                        <button className='text-orange-500 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-6 py-6 text-center me-2 mb-2'>
                            <img alt="File:Landbank.svg" src="//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Landbank.svg/200px-Landbank.svg.png" decoding="async" width="80" height="70" srcSet="//upload.wikimedia.org/wikipedia/commons/thumb/8/83/Landbank.svg/300px-Landbank.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/8/83/Landbank.svg/400px-Landbank.svg.png 2x" data-file-width="200" data-file-height="95" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='rounded-lg bg-white p-5'>
            <div className='border border-gray-300 p-5 rounded-lg mx-auto'>
                <p className='font-bold'>Order ID</p>
                <div> {randomId || "N/A"} </div>
                <div className='p-5 flex justify-center border border-gray-300 rounded-lg bg-gray-50'>
                    <img src={IphoneImage} width="80" height="100" />
                </div>
                <div className='p-2'>
                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold" > {itemName || "N/A"} </p>
                        <p className="font-bold">$ {unitPrice || "N/A"} </p>
                    </div>
                    <p className='text-[12px]'> {itemModel || "N/A"} </p>
                </div>
            </div>
            <p className='font-bold mt-3 mb-3'>Payment Summary</p>
            <div className='p-2 border border-gray-300 rounded-lg'>
                <div className='p-2'>

                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold">Quantity</p>
                        <p className="font-bold"> {qty || "N/A"} </p>
                    </div>

                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold">Shipping Fee</p>
                        <p className="font-bold">$ {shipFee || "N/A"} </p>
                    </div>

                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold">Discount</p>
                        <p className="font-bold">$ {disAmount || "N/A"} </p>
                    </div>

                    <hr className="h-px mb-3 bg-gray-100 border-0 dark:bg-gray-300" />

                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold">TOTAL</p>
                        <p className="font-bold">$ {((unitPrice*qty) + shipFee) - disAmount || "N/A"} </p>
                    </div>

                </div>
            </div>
            <div className='mt-10 rounded-full'>
                <button type="button" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Pay Now</button>
            </div>
        </div>
    </div>
  )
}

export default payMethod