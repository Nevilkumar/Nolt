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
        const results = jsonData.filter(card => {
            let isPresent = false;
            for (let i = 0; i < card?.blogs?.length; i++) {
                let blogTitle = card?.blogs[i].title;
                if (blogTitle.toLowerCase().includes(searchInput.toLowerCase())) {
                    isPresent = true;
                    break;
                }
            }
            return isPresent;
        });
        setData(results);
    }, [searchInput]);


    return (
        <>
            <div className='content-heading-container'>
                <h1 className='content-heading'>Hello! How can we help?</h1>
            </div>
            <div className='search-input-container'>
                <input className='search-input' type='text' placeholder='Search' value={searchInput} onChange={handleSearchInput} />
            </div>
            {
                data.length === 0 ?
                    <div className='no-results__container'>
                        <img src='/noresults.svg' className='no-results__img' alt='No Results Found' />
                        <h2 className='no-results__content'>
                            No Results Found
                        </h2>
                    </div>
                    :
                    <div className='cards-container'>
                        {
                            data && data.map((card, i) => (
                                <div key={card?.id} className='card'>
                                    {
                                        card?.logoUrl &&
                                        <div className='card__logo' style={{ backgroundImage: `url(${card?.logoUrl})` }}></div>
                                    }
                                    {
                                        card?.heading &&
                                        <h3 className='card__heading'>{card?.heading}</h3>
                                    }
                                    {
                                        card?.description &&
                                        <p className='card__description'>{card?.description}</p>
                                    }
                                    {
                                        card?.blogs &&
                                        <ul className='card__blogs'>
                                            {
                                                card?.blogs.map((blog, i) => (
                                                    <li key={i}>
                                                        <a href={blog?.url} className='card__blog'>{blog?.title}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    }
                                </div>
                            ))
                        }
                    </div>
            }

        </>
    )
}

export default Content