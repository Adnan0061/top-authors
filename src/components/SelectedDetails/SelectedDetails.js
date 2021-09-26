import React from 'react';
import './SelectedDetails.css'

const SelectedDetails = (props) => {
    const {img, name, totalBooks} = props.author
    return (
        <div className='selected-author'>
            <img src={img} style={{width: '80px', height: '90px'}} alt="" />
            <div>
                <h3>{name}</h3>
                <h4>Total Books:  {totalBooks}</h4>
            </div>            
        </div>
    );
};

export default SelectedDetails;