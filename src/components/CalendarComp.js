import React, { useEffect } from 'react';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import momentPlugin from '@fullcalendar/moment';
import interactionPlugin from '@fullcalendar/interaction';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const CalendarComp = ({ events }) => {
    useEffect(() => {}, [events]);
    return (
        <FullCalendar
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                bootstrapPlugin,
                momentPlugin,
                interactionPlugin,
            ]}
            initialView="dayGridMonth"
            locale="en-GB"
            events={events} //"https://fullcalendar.io/demo-events.json"
            themeSystem="bootstrap"
            stickyHeaderDates={true}
            headerToolbar={{
                start: 'prevYear,prev,today,next,nextYear',
                center: 'title',
                end: 'timeGridDay,timeGridWeek,dayGridMonth',
            }}
            buttonText={{
                today: 'Today',
                day: 'Day',
                week: 'Week',
                month: 'Month',
                list: 'List',
            }}
            firstDay={1}
            slotEventOverlap={false}
            scrollTime="12:00:00"
            eventTimeFormat={{
                // like '14:30:00'
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false,
                hour12: false,
            }}
            displayEventEnd={true}
            nowIndicator={true}
            views={{
                timeGrid: {
                    dayHeaderFormat: {
                        weekday: 'short',
                        day: 'numeric',
                        omitCommas: true,
                    },
                    slotLabelFormat: {
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: 'short',
                        hour12: false,
                    },
                },
                dayGrid: {
                    dayMaxEvents: 4,
                    moreLinkClick: 'popover',
                },
            }}
            allDaySlot={false}
        />
    );
};

export default CalendarComp;
