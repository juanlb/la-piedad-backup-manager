// in src/users.js
import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {   List, Datagrid, SimpleList, TextField, BooleanField, Show, SimpleShowLayout } from 'react-admin';
import UserIcon from '@material-ui/icons/Group';


export const BackupList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    return (
        <List {...props} sort={{ field: 'id', order: 'DESC' }} bulkActionButtons={false} >
            {isSmall ? (
                <SimpleList
                 linkType="show"
                    primaryText={record => record.id}
                    secondaryText={record => record.size }
                    tertiaryText={record => record.on_muleto ? 'On Muleto' : 'NO' }
                />
            ) : (
                    <Datagrid rowClick="show">
                        <TextField source="id" />
                        <TextField source="path" />
                        <TextField source="size" />
                        <BooleanField source="on_muleto" />
                    </Datagrid>
                )}
        </List>
    );
}

export const BackupShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="path" />
            <TextField source="size" />
            <BooleanField source="on_muleto" />
            <TextField source="bucket" />
            <TextField source="store" />
        </SimpleShowLayout>
    </Show>
);
