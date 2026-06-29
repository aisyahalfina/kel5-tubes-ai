import {

    useEffect,

    useState

} from "react";

import {

    FaFileAlt,

    FaFilePdf,

    FaComments

} from "react-icons/fa";

import dashboardService from "../services/dashboardService";

import StatCard from "../components/dashboard/StatCard";

import RecentUpload from "../components/dashboard/RecentUpload";

function AdminDashboard() {

    const [dashboard, setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        const data = await dashboardService.getDashboard();

        setDashboard(data);

    };

    if (!dashboard) {

        return (

            <div>

                Loading...

            </div>

        );

    }

    return (

        <div>

            <h1 className="text-3xl font-bold mb-8">

                Dashboard

            </h1>

            <div className="grid grid-cols-3 gap-6 mb-8">

                <StatCard

                    title="Documents"

                    value={dashboard.totalDocuments}

                    icon={<FaFileAlt />}

                />

                <StatCard

                    title="CSV"

                    value={dashboard.totalCSV}

                    icon={<FaFileAlt />}

                />

                <StatCard

                    title="PDF"

                    value={dashboard.totalPDF}

                    icon={<FaFilePdf />}

                />

                <StatCard

                    title="Chat"

                    value={dashboard.totalChats}

                    icon={<FaComments />}

                />

            </div>

            <RecentUpload

                documents={dashboard.recentUploads}

            />

        </div>

    );

}

export default AdminDashboard;