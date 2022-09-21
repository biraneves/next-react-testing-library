import { useEffect, useState } from 'react';

const CoinsList = () => {
    const [data, setData] = useState([]);
    // const [filteredData, setFilteredData] = useState([]);
    // const [filterText, setFilterText] = useState('');

    useEffect(() => {
        fetch(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=id_asc&per_page=10&page=1&sparkline=false',
        )
            .then((resp) => resp.json())
            .then(setData);
    }, []);

    // useEffect(() => {
    //     if (data) {
    //         setFilteredData(
    //             data.filter((item: any) =>
    //                 item.id.toLowerCase().includes(filterText.toLowerCase()),
    //             ),
    //         );
    //     } else {
    //         setFilteredData([]);
    //     }
    // }, [data, filteredData]);

    return (
        <div>
            <div>
                <label>
                    Filter
                    <input
                        type="text"
                        onChange={(event: any) =>
                            setFilterText(event.target.value)
                        }
                    />
                </label>
            </div>
            {data.map((item: any) => (
                <div key={item.id}>{item.id}</div>
            ))}
        </div>
    );
};

export default CoinsList;
