import React, { useState, useContext } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrderItem from './OrderItem';
import { sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByCity, sortByMethod } from './sorters';
import { TableSortLabel, Button } from '@material-ui/core';
import OrderDetailsDialog from './OrderDetailsDialog';
import { OrderContext } from '../../context/order/order.context';

interface TableProps {
    orders:any
    searchtext: string
}

interface HeadProps {
    orderBy: number
    orderDir: "desc" | "asc"
    setOrderBy
    setOrderDir
}

const OrderHead: React.FC<HeadProps> = ({orderBy, orderDir, setOrderBy, setOrderDir}) => {
    const heads:string[]= ["N°", "Nom", "Total", "Status", "Date de commande", "Ville", "Expédition"];
    const createSortHandler = (id) => {
        console.log(id);
        if (orderBy == id)
            setOrderDir(orderDir == 'asc' ? 'desc' : 'asc');
        else {
            setOrderBy(id);
            setOrderDir('asc');
        }
    };
    return (
        <TableHead>
            <TableRow>
                {heads.map((name:string, id: number) => (
                <TableCell 
                    key={id}
                    align = {name=="Expédition" ? "center" : "left"}
                >
                    <TableSortLabel
                        active={orderBy === id}
                        direction={orderBy === id ? orderDir : 'asc'}
                        onClick={() => createSortHandler(id)}
                    >
                    {name}
                    </TableSortLabel>
                </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

const OrderTable: React.FC<TableProps> = (props) => {
    const { orders, searchtext } = props;
    const {open, setOpen} = useContext(OrderContext);
    const [orderBy, setOrderBy] = useState<number>(0);
    const [orderDir, setOrderDir] = useState<"desc" | "asc">('desc');
    const sorters = [sortById, sortByName, sortByTotal, sortByStatus, sortByDate, sortByCity, sortByMethod];
    const getSortHandler = (orderBy, orderDir) => { return (
        (elmt1: any, elmt2: any) =>  {

            const ret = sorters[orderBy](elmt1,elmt2); //elmt1.id <= elmt2.id ? -1 : 1;
            return (orderDir == 'asc' ? ret : -ret);
        }
    )}
    return (
        <div {...props}>
            <Table stickyHeader size="small">
                <OrderHead orderBy={orderBy} orderDir={orderDir} setOrderBy={setOrderBy} setOrderDir={setOrderDir}/>
                <TableBody>
                    {orders.filter((order) => {
                        const text = searchtext.toLowerCase();
                        const firstName = order.billing.first_name.toLowerCase();
                        const lastName = order.billing.last_name.toLowerCase();
                        const id = order.id.toString();
                        return (
                            id.includes(text) || lastName.includes(text) || firstName.includes(text)
                        );
                    }).sort(getSortHandler(orderBy, orderDir)).map((order) => {
                        return (
                        <OrderItem 
                            key = {order.id}
                            order={order}
                        />)}
                    )}
                </TableBody>
            </Table>
            <Button onClick={()=>setOpen(true)}>Test</Button>
            <OrderDetailsDialog/>                           
        </div>
)}
   
export default OrderTable;