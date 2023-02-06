import React from 'react';
import { createBoard } from '@wixc3/react-board';
import RootLayout from '../../../../app/(user)/layout';

export default createBoard({
    name: 'RootLayout',
    Board: () => <RootLayout />
});
