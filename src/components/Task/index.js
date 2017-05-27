import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ data }) => (
  <li>
    <h6>{data.name}</h6>
  </li>
);

Task.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Task;
