function StatCard({

    title,

    value,

    icon

}) {

    return (

        <div className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl mb-6">

                {icon}

            </div>

            <p className="text-gray-500">

                {title}

            </p>

            <h1 className="text-5xl font-bold mt-2">

                {value}

            </h1>

        </div>

    );

}

export default StatCard;