import { useCallback, useState } from "react";

function useHttp() {
    const [isLoading, setLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyData) => {
        try {
            setLoading(true);
            setIsError(null);
            const res = await fetch(requestConfig.url, {
                method: requestConfig.method ? requestConfig.method : "GET",
                headers: requestConfig.headers ? requestConfig.headers : {},
                body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
            });

            if (!res.ok) {
                throw new Error("Something went wrong!");
            }
            const data = await res.json();

            applyData(data);
            setLoading(false);
        } catch (error) {
            setIsError(error.message);
        }
    }, []);

    return {
        isLoading,
        isError,
        sendRequest,
    };
}

export default useHttp;
