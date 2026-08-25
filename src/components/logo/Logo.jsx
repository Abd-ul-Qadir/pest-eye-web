import React , {useState} from 'react';

function Logo(props) {
    const [dataLogo] = useState([
        {
            id: 1,
            name: 'PESTEYE'
        },
        {
            id: 2,
            name: 'PESTEYE'
        },
        {
            id: 3,
            name: 'PESTEYE'
        },
        {
            id: 4,
            name: 'PESTEYE'
        },
        {
            id: 5,
            name: 'PESTEYE'
        },
        {
            id: 6,
            name: 'PESTEYE'
        },
        {
            id: 7,
            name: 'PESTEYE'
        },
        {
            id: 8,
            name: 'PESTEYE'
        },
        {
            id: 9,
            name: 'PESTEYE'
        },
        {
            id: 10,
            name: 'PESTEYE'
        },
    ])
    return (
        <section className="logo-slider">          
                <div className="logo-slider-wrap">
                    <div className="logo-slider-inner">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }

                    </div>
                    <div className="logo-slider-inner style-2">
                        {
                            dataLogo.map(idx => (
                                <h3 key={idx.id}>{idx.name}</h3>
                            ))
                        }
                    </div>
                </div>
            </section>
    );
}

export default Logo;