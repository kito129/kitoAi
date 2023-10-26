/* eslint-disable */
import { DateTime } from 'luxon';

/* Get the current instant */
const now = DateTime.now();

export const messages = [
    {
        id         : '832276cc-c5e9-4fcc-8e23-d38e2e267bc9',
        image      : 'assets/images/avatars/male-01.jpg',
        title      : 'Gary Peters',
        description: 'We should talk about that at lunch!',
        time       : now.minus({minutes: 25}).toISO(), // 25 minutes ago
        read       : false,
    }
];
