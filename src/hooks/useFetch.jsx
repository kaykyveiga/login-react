import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if (method === 'POST') {
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method);
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await fetch(url);
                const json = await res.json();

                setData(json)
            } catch (error) {
                console.log(error.message)
                setError("Houve um error ao carregar os dados!")
            }
            setLoading(false)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            let json;
            if (method === "POST") {
                setLoading(true)
                let fetchOpitions = [url, config]
                let res = await fetch(...fetchOpitions)
                json = await res.json();
                setLoading(false)
                setCallFetch(json);
            }
        }

        httpRequest()
    }, [config, method, url])
    return { data, httpConfig, loading, error }
}

export default useFetch