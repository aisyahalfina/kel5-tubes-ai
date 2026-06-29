import {

    useEffect,

    useState

} from "react";

import documentService

    from "../services/documentService";

import DocumentTable

    from "../components/documents/DocumentTable";

function Documents() {

    const [documents, setDocuments] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        load();

    }, []);

    const load = async () => {

        const data =

            await documentService.getAll();

        setDocuments(data);

    };

    const hapus = async (id) => {

        if (!window.confirm(

            "Hapus dokumen?"

        )) return;

        await documentService.remove(id);

        load();

    };

    const filtered =

        documents.filter(doc =>

            doc.title

                .toLowerCase()

                .includes(

                    search.toLowerCase()

                )

        );

    return (

        <div>

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">

                    Documents

                </h1>

                <input

                    placeholder="Search..."

                    value={search}

                    onChange={(e) =>

                        setSearch(

                            e.target.value

                        )

                    }

                    className="border rounded-xl px-5 py-3 w-80"

                />

            </div>

            <DocumentTable

                documents={filtered}

                onDelete={hapus}

            />

        </div>

    );

}

export default Documents;