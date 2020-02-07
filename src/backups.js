// in src/users.js
import React from 'react';
import { List, Datagrid, TextField, BooleanField, Show, SimpleShowLayout } from 'react-admin';

export const BackupList = props => (
    <List {...props} sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="path" />
            <TextField source="size" />
            <BooleanField source="on_muleto" />
        </Datagrid>
    </List>
);

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
