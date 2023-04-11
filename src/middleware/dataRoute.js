function getDataFromRoute(route) {

    // const resData = {"status": false, "data": {}};
    // const err = {"status": false, "msg": ""};

    fetch(route, {mode: "cors"})
        .then(response => response.json())
        .then(data => handleFetch(data))
        .catch(error => handleFetch(error)
    )

    function handleFetch(req) {
        // if(req.error) {
        //     err.status = true;
        //     err.msg = req.error;
        // } 

        // if(req.data) {
        //     resData.status = true;
        //     resData.data = req.data;
        // }

        return req;
    };
}

export default getDataFromRoute;