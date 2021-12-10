import React, { useEffect, useState } from 'react';
import { addToDb, getDb, removeDb } from '../../utilities/LocalStorage';
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

    useEffect(()=>{ 
        setSelectedAuthor(initDb())
    },[loadAuthors])

    const initDb =() => {
        const localNames = JSON.parse(getDb())
        let initialDb = [];
        if(localNames !== null){
            localNames.map(nameAut => {
                for(const author of loadAuthors){
                    if(author.name === nameAut){
                        initialDb.push(author);
                    }
                }
                return initialDb
            });
        }
        return initialDb;
    }

    const selected = (author) => {
        // setSelectedAuthor(initDb()) 
        // setSelectedAuthor(initDb())
        if(!selectedAuthor.includes(author)){
            const newSelected = [...selectedAuthor, author]
            setSelectedAuthor(newSelected)
        }
        addToDb(author.name)
    }
    const remove = (author) => {
        console.log(selectedAuthor)
        const newSelectedAuthor = selectedAuthor.filter(ele => ele !== author);
        console.log(newSelectedAuthor)
        setSelectedAuthor(newSelectedAuthor)
        removeDb(author.name)
    }

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
                    <Selected selectedAuthor={selectedAuthor} remove ={remove}></Selected>
                </div>
            </div>


        </div>
    );
};

export default Authors;