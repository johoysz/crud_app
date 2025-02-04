import IphoneImage from '../assets/images/iphone.png';

const payMethod = () => {
  return (
    <div className='w-auto h-auto mx-auto p-6 bg-gray-100 gap-4 grid grid-cols-[60%_40%] w-full'>
        <div className='rounded-lg bg-white p-5'>
            <h2 className='text-[22px] font-bold'>Payment Method</h2>
            <div className="mx-auto">
                <p className="mt-3 font-bold text-[17px]">Customer Information</p>
            </div>
            <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="relative">
                        <p>Holder</p>
                        <input className="border rounded-xl p-2 w-full" type="text" placeholder="Jane Doe" />
                    </div>
                    <div>
                        <p>Email</p>
                        <input className="border rounded-xl p-2 w-full" type="text" placeholder="janedoe@gmail.com" />
                    </div>
                    <div>
                        <p>Phone number</p>
                        <input className="border rounded-xl p-2 w-full" type="text" placeholder="+639123456790" />
                    </div>
            </div>
            <div className='mt-3'>
                <div className="mx-auto">
                    <p className="mt-3 font-bold text-[17px]">Payment</p>
                </div>
                <div className='mt-3 rounded-lg bg-gray-50 p-5 w-full h-32 text-center'>
                    <div className='grid justify-center items-center'>
                        <p>Your total payment</p>
                        <p className='font-bold text-[30px]'>$28,999,000</p>
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
                        <input checked id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                <div>unique id here...</div>
                <div className='p-5 flex justify-center border border-gray-300 rounded-lg bg-gray-50'>
                    <img src={IphoneImage} width="80" height="100" />
                </div>
                <div className='p-2'>
                    <p className='font-bold text-[20px]'>
                        Iphone 15 Pro
                    </p>
                    <p className='text-[12px]'>
                        Iphone 15 PRO, 512 Gold
                    </p>
                </div>
            </div>
            <p className='font-bold mt-3 mb-3'>Payment Summary</p>
            <div className='p-2 border border-gray-300 rounded-lg'>
                <div className='p-2'>
                    <p className='font-bold text-[15px]'>
                        Iphone 15 Pro
                    </p>
                    <p className='text-[12px] mb-2'>
                        1 x $29,999,000
                    </p>
                    <p className='font-bold text-[15px]'>
                        Discount
                    </p>
                    <p className='text-[12px] mb-2'>
                        $1,000,000
                    </p>
                    <hr className="h-px mb-3 bg-gray-100 border-0 dark:bg-gray-300" />
                    <div className="max-w-4xl mx-auto flex justify-between">
                        <p className="font-bold">TOTAL</p>
                        <p className="font-bold">$28,999,000</p>
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