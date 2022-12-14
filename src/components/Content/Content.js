import React, { useEffect, useState } from 'react'

import jsonData from './data.json';
import './Content.css'

const Content = () => {

    const [data, setData] = useState(jsonData);
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
    };

    useEffect(() => {
        setData(jsonData);
    }, [searchInput]);


    return (
        <>
            <div className='content-heading-container'>
                <h1 className='content-heading'>Hello! How can we help?</h1>
            </div>
            <div className='search-input-container'>
                <input className='search-input' type='text' placeholder='Search' value={searchInput} onChange={handleSearchInput} />
            </div>
            <div className='cards-container'>
                {
                    data && data.map((card, i) => (   
                        <div key={card?.id} className='card'>
                            <div className='card__logo' style={{backgroundImage: `url(${card?.logoUrl})`}}></div>
                            <h3 className='card__heading'>{card?.heading}</h3>
                            <p className='card__description'>{card?.description}</p>
                            <ul className='card__blogs'>
                                {
                                    card?.blogs.map((blog, i) => (
                                        <li key={i}>
                                            <a href={blog?.url} className='card__blog'>{blog?.title}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }

                <div className='card'>
                    <ul className='card__blogs'>
                        <li>
                            <a href="https://nolt.io/legal" className='card__blog'>Terms of Service</a>
                        </li>
                        <li>
                            <a href="https://nolt.io/legal#privacy" className='card__blog'>Privacy Policy</a>
                        </li>
                        <li>
                            <a href="https://status.nolt.io/" className='card__blog'>Status Page</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Content