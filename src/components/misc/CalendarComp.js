import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import rootStore from '../../mobx';
import moment from 'moment';

import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import momentPlugin from '@fullcalendar/moment';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

const CalendarComp = ({ newEvent }) => {
    const calRef = React.createRef();

    useEffect(() => {
        /* Add event to calendar and rootStore when the value of newEvent changes */
        let calendarApi = calRef.current.getApi();
        calendarApi.addEvent(newEvent);
        rootStore.eventStore.addEvent(newEvent);
    }, [newEvent, calRef]);

    const handleDateEvent = (event) => {
        let calendarApi = calRef.current.getApi();
        calendarApi.changeView('timeGridDay', event.date);
    };

    const handleEventHover = (info) => {
        tippy(info.el, {
            allowHTML: true,
            content: `
                <b>${info.event.title}</b> <br/>
                ${moment(info.event.start).format('HH:mm')} - 
                ${moment(info.event.end).format('HH:mm')} <br/>
                ${info.event.extendedProps.desc}
            `,
        });
    };

    return (
        <FullCalendar
            ref={calRef}
            plugins={[
                dayGridPlugin,
                timeGridPlugin,
                bootstrapPlugin,
                momentPlugin,
                listPlugin,
                interactionPlugin,
            ]}
            initialView="dayGridMonth"
            locale="en-GB" //
            initialEvents={rootStore.eventStore.events} // "https://fullcalendar.io/demo-events.json"
            themeSystem="bootstrap"
            stickyHeaderDates={true}
            headerToolbar={{
                start: 'prevYear,prev,today,next,nextYear',
                center: 'title',
                end: 'timeGridDay,timeGridWeek,dayGridMonth,listWeek',
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
            slotDuration={{ minute: 15 }}
            scrollTime={{ hour: moment().hour(), minute: 0 }}
            eventTimeFormat={{
                // like '14:30:00'
                hour: '2-digit',
                minute: '2-digit',
                meridiem: false,
                hour12: false,
            }}
            eventClick={(eventInfo) => console.log(eventInfo)}
            dateClick={(event) => handleDateEvent(event)}
            displayEventEnd={true}
            eventMouseEnter={(event) => handleEventHover(event)}
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

export default observer(CalendarComp);
