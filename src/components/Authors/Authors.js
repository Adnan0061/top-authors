import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Selected from '../Selected/Selected';
import './Authors.css'

const Authors = () => {
    const [loadAuthors, setLoadAuthors] = useState([])
    const [selectedAuthor, setSelectedAuthor] = useState([])

    useEffect( () => {
        fetch('./authors.json')
        .then(res => res.json())
        .then(data => setLoadAuthors(data))
    },[])

    const selected = (author) => {
        if(!selectedAuthor.includes(author)){
            const newSelected = [...selectedAuthor, author]
            setSelectedAuthor(newSelected)
        }
    }

    console.log(selectedAuthor)
    return (
        <div style={{width:'95%', margin: '0 auto'}}>
            <div className='top-box'>
                <h2>Choose the writers you want to finish reading in next Year</h2>
                <h3>Minimum books to read: 52</h3>
            </div>
            <div className='result-container'>
                <div className='authors'>
                    {
                        loadAuthors.map(author => <Author author={author} selected={selected} key={author.id}></Author>)
                    }
                </div>
                <div>
                    <Selected selectedAuthor={selectedAuthor}></Selected>
                </div>
            </div>


        </div>
    );
};

export default Authors;