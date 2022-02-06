import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import '../../App.css';
import './Opportunities.css';

export default function Opportunities(){

    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        let unmounted = false;

        Axios.get('http://localhost:3002/quotelist').then((response) => {
            console.log("Axios get request to backend suceeded");
            if(unmounted) return;
            setQuoteList(response.data);
        });
        return () => {unmounted=true};
    }, []);

    const deleteQuote = (id) => {
        Axios.delete(`http://localhost:3002/delete/${id}`).then((response) => {
            setQuoteList(quoteList.filter((val)=> {
                return val.id !== id;
            }));
        });
    };

    return (
        
        <div className='opportunities-container'>
            <h1 className='opportunities'>OPPORTUNITIES</h1>

            {quoteList.map((val,key) => {
                return (<div className="quote-item">
                            <div>
                                <h3>Name: {val.first_name} {val.last_name}</h3>
                                <h3>Username: {val.username}</h3>
                                <h3>Email: {val.email}</h3>
                                <h3>Phone Number: {val.phone_number}</h3>
                                <h3>Service Type: {val.service_type}</h3>
                                <h3>Comments: {val.comments}</h3>
                            </div>
                            <div>
                                <button onClick={() => {deleteQuote(val.id);}}>Delete</button>
                            </div>

                        </div>);
            })}

        </div>
    )
    
    

}