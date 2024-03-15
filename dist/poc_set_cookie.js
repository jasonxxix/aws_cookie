export const handler = async (event) => {
    const requestHeaders = event.headers;
    const queryParams = event.queryStringParameters || {};


    const responseHeaders = {
        "Content-Type": "application/json",
        "Set-Cookie": "cookie221=value12; SameSite=Strict; Domain=.preempt.life;",
    };

    const responseBody = {
        message: "Cookies set successfully!",
    };

    const response = {
        statusCode: 200,
        headers: responseHeaders,
        body: JSON.stringify(responseBody),
    };

    return response;
};
