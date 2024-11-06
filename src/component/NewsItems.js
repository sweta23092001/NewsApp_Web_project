// rce
import React from 'react'
import { Link } from "react-router-dom";

const NewsItems =(props)=> {
    
        let { title, description, imageurl, newsUrl, author, date,source } = props;
        return (
            // bootstrap se card lia hai
            <div className='my-3'>
                {/* <div className="card" style="width: 18rem;"> */}
                {/* {{}} ek javascript ke lia ek object ke lia */}
                <div className="card">
                    {/* badge */}
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"  style={{left:'90%',zIndex:'1'}}>
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <Link href={newsUrl} target="_blank" className="btn btn-sn btn-dark">Read More</Link>
                    </div>
                </div>
            </div>
        )
}

export default NewsItems
