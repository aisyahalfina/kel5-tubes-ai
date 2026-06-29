require("dotenv").config();

const retrieval = require("../services/retrievalService");

(async () => {

    const result =
        await retrieval.retrieveContext(
            "Bagaimana prosedur magang?"
        );

    console.log(result.documents);

})();