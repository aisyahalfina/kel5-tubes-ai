import { storage } from "../../utils/storage";

function Navbar() {

    const user = storage.getUser();

    return (

        <div className="bg-white h-20 shadow-sm flex justify-between items-center px-10">

            <div>

                <h2 className="text-3xl font-bold">

                    SSC AI Chatbot

                </h2>

                <p className="text-gray-500">

                    Administrator Dashboard

                </p>

            </div>

            <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">

                    {user?.name?.charAt(0)}

                </div>

                <div>

                    <p className="font-semibold">

                        {user?.name}

                    </p>

                    <p className="text-sm text-gray-500">

                        {user?.role}

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Navbar;