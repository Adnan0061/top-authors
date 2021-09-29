import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SelectedDetails.css'

const SelectedDetails = (props) => {
    const {img, name, totalBooks} = props.author
    const remove = props.remove

    return (
        <div className='selected-author'>
            <img src={img} style={{width: '80px', height: '90px'}} alt="" />
            <div style={{marginRight: 'auto'}}>
                <h3>{name}</h3>
                <h4>Total Books:  {totalBooks}</h4>
            </div>      
            <button onClick={() => remove(props.author)} style={{padding: '10px', marginRight: '1rem'}}> <FontAwesomeIcon icon={faTimes} /></button>      
        </div>
    );
};

export default SelectedDetails;