'use client';

import { useSyncExternalStore } from 'react';

const timeFormat = new Intl.DateTimeFormat('en-GB', {
   timeZone: 'Asia/Dhaka',
   hour: '2-digit',
   minute: '2-digit',
   hourCycle: 'h12',
});

const subscribe = (onChange: () => void) => {
   const interval = setInterval(onChange, 5000);
   return () => clearInterval(interval);
};
const getTime = () => timeFormat.format(new Date());
const getServerTime = () => '--:--';

const LocalTime = () => {
   const time = useSyncExternalStore(subscribe, getTime, getServerTime);

   return <span className="text-strong tabular-nums">{time}</span>;
};

export { LocalTime };
