import logo from "../assets/logo.png" // Updated to use logo.png
import FormComponent from "@/components/forms/FormComponent"
// import Footer from "@/components/common/Footer";

function HomePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            {/* Logo */}
            <img src={logo} alt="Code Sync Logo" className="w-40 mb-8" />

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center gap-8 bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-4">Welcome to Code Sync</h1>
                <p className="text-gray-300 text-center mb-4">
                    Collaborate on code in real-time with ease. Join a room or create a new one.
                </p>

                {/* Form Component */}
                <FormComponent />

                {/* Quick Access Buttons */}
                <div className="flex gap-4 mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Create Room
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Join Room
                    </button>
                </div>
            </div>

            {/* <Footer /> */}
        </div>
    )
}

export default HomePage
