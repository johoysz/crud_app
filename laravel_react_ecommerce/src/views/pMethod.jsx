import { useNavigate } from "react-router-dom";

const pMethod = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white">
            <h2 className="font-bold text-xl mb-4">Payment Methods</h2>
            <div className="flex flex-col gap-2">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    aria-label="Select e-Wallet payment"
                    onClick={() => navigate('/ewallet')}
                >
                    e-Wallet
                </button>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    aria-label="Select Credit/Debit Card payment"
                >
                    Credit/Debit Card
                </button>
            </div>
        </div>
    );
}
  
  export default pMethod