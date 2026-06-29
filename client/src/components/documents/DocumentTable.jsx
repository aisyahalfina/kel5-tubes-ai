import { FaTrash } from "react-icons/fa";

function DocumentTable({

    documents,

    onDelete

}) {

    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

            <table className="w-full">

                <thead className="bg-slate-100">

                    <tr>

                        <th className="text-left p-4">Title</th>

                        <th className="text-left p-4">Category</th>

                        <th className="text-left p-4">Status</th>

                        <th className="text-center p-4">Action</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        documents.map(doc => (

                            <tr

                                key={doc.id}

                                className="border-t hover:bg-slate-50"

                            >

                                <td className="p-4">

                                    {doc.title}

                                </td>

                                <td className="p-4">

                                    {doc.category}

                                </td>

                                <td className="p-4">

                                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                                        {doc.processing_status}

                                    </span>

                                </td>

                                <td className="text-center">

                                    <button

                                        onClick={() =>

                                            onDelete(doc.id)

                                        }

                                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg"

                                    >

                                        <FaTrash />

                                    </button>

                                </td>

                            </tr>

                        ))

                    }

                </tbody>

            </table>

        </div>

    );

}

export default DocumentTable;