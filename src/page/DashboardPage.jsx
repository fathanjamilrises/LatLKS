import React, { useEffect, useState } from 'react';

function DashboardPage() {
    const apiKeyURL = "http://192.168.137.63:3000/";

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(apiKeyURL);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(data);
    }, []);

    return (
        <div>
            <h1>Dashboard Data</h1>
            {data.length > 0 ? (
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{item.message}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
}

export default DashboardPage;
