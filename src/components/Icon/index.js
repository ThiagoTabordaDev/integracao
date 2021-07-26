import React from 'react';
import PropTypes from 'prop-types';
import {
    AiOutlineAppstoreAdd,
    AiOutlineShoppingCart,
    AiOutlineBarChart,
    AiOutlineSend,
    AiFillDollarCircle,
    AiOutlineArrowsAlt,
} from 'react-icons/ai';
import { FcParallelTasks, FcDataConfiguration } from 'react-icons/fc';
import { FaCogs } from 'react-icons/fa';

export default function Icon({ symbol }) {
    const icon = {
        AiOutlineAppstoreAdd: <AiOutlineAppstoreAdd />,
        AiOutlineShoppingCart: <AiOutlineShoppingCart />,
        AiOutlineBarChart: <AiOutlineBarChart />,
        AiOutlineSend: <AiOutlineSend />,
        FcParallelTasks: <FcParallelTasks />,
        AiFillDollarCircle: <AiFillDollarCircle />,
        FcDataConfiguration: <FcDataConfiguration />,
        FaCogs: <FaCogs />,
        AiOutlineArrowsAlt: <AiOutlineArrowsAlt />,
    };

    return <span id={symbol}>{icon[symbol]}</span>;
}

Icon.propTypes = {
    symbol: PropTypes.string,
};

Icon.defaultProps = {
    symbol: 'AiOutlineAppstoreAdd',
};
