import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

Button03.propTypes = {
    title : PropTypes.string,
};

function Button03(props) {
    const {title , path} = props;
    return (
        <Link to={path} className="tf-button discord"><i className="fa fa-camera"></i><span>{title}</span></Link>
    );
}

export default Button03;