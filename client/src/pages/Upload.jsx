import { useState } from "react";
import { useNavigate } from "react-router-dom";

import documentService from "../services/documentService";

function Upload() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");

    const [category, setCategory] = useState("");

    const [description, setDescription] = useState("");

    const [file, setFile] = useState(null);

    const [loading, setLoading] = useState(false);

    const categories = [

        "Pedoman Akademik",

        "Magang",

        "MBKM",

        "Kurikulum",

        "Beasiswa",

        "Administrasi",

        "Panduan",

        "Lainnya"

    ];

    const submit = async (e) => {

        e.preventDefault();

        if (!title || !category || !file) {

            alert("Lengkapi data terlebih dahulu.");

            return;

        }

        try {

            setLoading(true);

            const formData = new FormData();

            formData.append("title", title);

            formData.append("category", category);

            formData.append("description", description);

            formData.append("document", file);

            await documentService.upload(formData);

            alert("Dokumen berhasil diupload.");

            navigate("/admin/documents");

        } catch (err) {

            console.log(err);

            console.log(err.response);

            console.log(err.response?.data);

            alert(err.response?.data?.message || err.message);

        } finally {

            setLoading(false);

        }

    };

    return (

        <div className="max-w-4xl mx-auto">

            <h1 className="text-3xl font-bold mb-8">

                Upload Dokumen

            </h1>

            <form

                onSubmit={submit}

                className="bg-white rounded-3xl shadow-xl p-8"

            >

                <div className="space-y-6">

                    <div>

                        <label className="block mb-2 font-semibold">

                            Judul Dokumen

                        </label>

                        <input

                            type="text"

                            value={title}

                            onChange={(e) =>

                                setTitle(e.target.value)

                            }

                            placeholder="Masukkan judul dokumen"

                            className="w-full border rounded-xl p-4"

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">

                            Kategori

                        </label>

                        <select

                            value={category}

                            onChange={(e) =>

                                setCategory(e.target.value)

                            }

                            className="w-full border rounded-xl p-4"

                        >

                            <option value="">

                                -- Pilih Kategori --

                            </option>

                            {

                                categories.map((cat) => (

                                    <option

                                        key={cat}

                                        value={cat}

                                    >

                                        {cat}

                                    </option>

                                ))

                            }

                        </select>

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">

                            Deskripsi

                        </label>

                        <textarea

                            rows="4"

                            value={description}

                            onChange={(e) =>

                                setDescription(e.target.value)

                            }

                            placeholder="Masukkan deskripsi"

                            className="w-full border rounded-xl p-4"

                        />

                    </div>

                    <div>

                        <label className="block mb-2 font-semibold">

                            File PDF

                        </label>

                        {/* <input

                            type="file"

                            accept=".pdf"

                            onChange={(e) =>

                                setFile(e.target.files[0])

                            }

                            className="w-full border rounded-xl p-3"

                        /> */}

                        <label className="border-2 border-dashed border-blue-400 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition">

                            <span className="text-5xl">

                                📄

                            </span>

                            <p className="mt-3 font-semibold">

                                Klik untuk memilih PDF

                            </p>

                            <p className="text-gray-500 text-sm">

                                Maksimal 10 MB

                            </p>

                            <input

                                type="file"

                                accept=".pdf"

                                onChange={(e) => setFile(e.target.files[0])}

                                className="hidden"

                            />

                        </label>

                        {

                            file && (

                                <p className="mt-3 text-green-600">

                                    ✅ {file.name}

                                </p>

                            )
                        }

                    </div>

                    <button

                        disabled={loading}

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition"

                    >

                        {

                            loading

                                ? "Uploading..."

                                : "Upload Dokumen"

                        }

                    </button>

                </div>

            </form>

        </div>

    );

}

export default Upload;