function RecentUpload({ documents = [] }) {
    const loadDashboard = async () => {

        const data = await dashboardService.getDashboard();

        console.log(data);

        setDashboard(data);

    };
    return (

        <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-xl font-semibold mb-5">

                Recent Upload

            </h2>

            {

                documents.length === 0 ? (

                    <p className="text-gray-500">

                        Belum ada dokumen.

                    </p>

                ) : (

                    <div className="space-y-4">

                        {

                            documents.map(doc => (

                                <div

                                    key={doc.id}

                                    className="border rounded-xl p-4 flex justify-between items-center"

                                >

                                    <div>

                                        <h3 className="font-semibold">

                                            {doc.title}

                                        </h3>

                                        <p className="text-gray-500 text-sm">

                                            {doc.category}

                                        </p>

                                    </div>

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                        {doc.processing_status}

                                    </span>

                                </div>

                            ))

                        }

                    </div>

                )

            }

        </div>

    );

}

export default RecentUpload;