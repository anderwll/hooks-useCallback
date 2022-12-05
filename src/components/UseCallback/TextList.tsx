import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography'

interface TableListProps {
    list: Array<string>,
    listModifier: any
};

const TableList: React.FC<TableListProps> = ({list, listModifier}) => {
    const modificaList = listModifier(list)

    useEffect(() => {
        console.log('CRIOU A FUNÇADO DO 0!')
    }, [listModifier])

    return (
        <>
            {modificaList.map((valor: any) => 
                <Typography variant="body1" color="initial" key={valor}>➨ {valor}</Typography>
            )}
        </>
    );
};

export default TableList;