import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css'; // needs additional webpack config

const CalendarComp = () => {
    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, bootstrapPlugin]}
            initialView="dayGridMonth"
            events={[{ title: 'event 1', date: new Date() }]}
            themeSystem="bootstrap"
            stickyHeaderDates={true}
            headerToolbar={{
                start: 'title',
                center: '',
                end: 'prevYear,prev,today,next,nextYear',
            }}
            buttonText={{
                today: 'Today',
                day: 'Day',
                week: 'Week',
                month: 'Month',
                list: 'List',
            }}
        />
    );
};

export default CalendarComp;
