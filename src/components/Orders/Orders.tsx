import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import OrderTable from './OrderTable';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import Fade from '@material-ui/core/Fade';
import { useStylesOrders } from './Orders.style';
import { Toolbar, IconButton, Tooltip } from '@material-ui/core';

const Orders: React.FC = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const classes = useStylesOrders();

    useEffect(() => {
        async function loadOrders() {
            const newOrders = await axios.get("http://localhost:3000/api/orders");
            setOrders(newOrders.data);
            setIsLoading(false);
        }
        loadOrders();
    }, []);

    return (
        <div className = {classes.root}>
            <Toolbar className = {classes.toolbar}>
                <Typography className = {classes.title} variant="h4" noWrap>Commandes</Typography>
                <Tooltip title = "Rechercher">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            </Toolbar>
            {isLoading == true && <CircularProgress />}
            <Fade in={!isLoading} timeout={500}>
                <OrderTable orders={orders}/>
            </Fade>
        </div>
    )
}
export default Orders;