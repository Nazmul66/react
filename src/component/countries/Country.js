import React from 'react';
import "./Country.css";

const Country = (props) => {
    console.log(props.count)
    const {name ,flags, region, area} = props.count;
    return (
    <div className="separate">
        <img src={flags.png} alt="" />
        <h1>{name.common}</h1>
        <p>{region}</p>
        <p>{area}</p>
    </div>
    )
};

export default Country;