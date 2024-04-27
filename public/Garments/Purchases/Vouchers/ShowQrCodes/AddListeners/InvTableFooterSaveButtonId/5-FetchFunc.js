let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    let jVarLocalFetchUrl = `/bin/PurchaseItems/WithKeysCheck`;

    let jVarLocalFetchHeaderObject = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    return response;
};

export { StartFunc };