import React from 'react';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import { faBook } from "@fortawesome/fontawesome-svg-core"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"


import './Author.css'

const Author = (props) => {
    const {name, sales, language, nationality, totalBooks} = props.author
    return (
        <div className='author'>
            <img width='200px' style={{width:'200px', height: '200px', borderRadius:'100px'}} src={props.author.img} alt="" />
            <h2> <span>{name}</span></h2>
            <p>Estimated Sales: <span>{sales}illion</span></p>
            <p>Original language: <span>{language}</span></p>
            <p>Nationality: <span>{nationality}</span></p>
            <p>Total Books: <span>{totalBooks}</span></p>
            <button onClick={() => props.selected(props.author)}> <FontAwesomeIcon icon={faBookmark} /> Select Author</button>
        </div>
    );
};

export default Author;