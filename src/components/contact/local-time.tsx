'use client';

import { useSyncExternalStore } from 'react';

const timeFormat = new Intl.DateTimeFormat('en-GB', {
   timeZone: 'Asia/Dhaka',
   hour: '2-digit',
   minute: '2-digit',
   hourCycle: 'h23',
});

// Check every few seconds; React re-renders only when the minute changes
const subscribe = (onChange: () => void) => {
   const interval = setInterval(onChange, 5000);
   return () => clearInterval(interval);
};
const getTime = () => timeFormat.format(new Date());
// The server can't know when the page is read: hold the cell until hydration
const getServerTime = () => '--:--';

/** The current time in Bangladesh, in a fixed-width cell that never reflows */
const LocalTime = () => {
   const time = useSyncExternalStore(subscribe, getTime, getServerTime);

   return <span className="text-strong tabular-nums">{time}</span>;
};

export { LocalTime };
