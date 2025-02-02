import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useStateContext } from "../../contexts/contextProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function GuestLayout() {
    const {token} = useStateContext();
    const location = useLocation();

    if (token) { 
        return <Navigate to='/' />
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-full max-w-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname} // Animate based on the route change
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        exit={{ rotateY: -90, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ transformStyle: "preserve-3d" }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <Outlet /> {/* Will render either Login or Register */}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}