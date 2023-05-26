const handler = (address: string) => {
    let endpoint;
    if (process.env.NODE_ENV === "production") {
        endpoint = process.env.API_ENDPOINT_DEPLOYMENT;
    } else {
        endpoint = process.env.API_ENDPOINT_LOCAL;
    }
    return `${endpoint}/${address}`;
};

export default handler;
