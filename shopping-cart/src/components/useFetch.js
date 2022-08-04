import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isPending, setIsPending] = useState(true);
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res)
                    if (!res.ok) {
                        throw Error('// Could not fetch the data for the server')
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    setData(data);
                    // setCartItems(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
    }, [url])
    return { data, isPending, error }
}

export default useFetch