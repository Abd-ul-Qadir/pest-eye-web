import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button.propTypes = {
    title : PropTypes.string,
};

function Button(props) {
    const {title , path, onClick} = props;
    return (
        <Link to={path} className="tf-button " onClick={onClick}>{title}</Link>
    );
}

export default Button;