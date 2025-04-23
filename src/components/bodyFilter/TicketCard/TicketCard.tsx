import React from 'react';
import styles from './TicketCard.module.css'
import {Ticket } from '../../../data/ticket'

interface TicketCardProps {
    ticket: Ticket;
}

export const TicketCard: React.FC<TicketCardProps> = ({ticket}) => {
    const cdnUrl = `//pics.avs.io/99/36/${ticket.carrier}.png`;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.price}>{ticket.price.toLocaleString('ru-RU')} Р</span>
                <img src={cdnUrl} alt='ticketLogo'></img>
            </div>
            {ticket.segments.map((segment, index) => (
                <div className={styles.segment}>
                    <div className={styles.route}>
                        <span className={styles.cardTitle}>{segment.origin} – {segment.destination}</span>
                        <span>{getDepartureTime(segment.date)} – {getArrivalTime(segment.date, segment.duration)}</span>
                    </div>
                    <div className={styles.duration}>
                        <span className={styles.cardTitle}>В ПУТИ</span>
                        <span>{formatDuration(segment.duration)}</span>
                    </div>
                    <div className={styles.stops}>
                        <span className={styles.cardTitle}>
                            {segment.stops.length === 0
                                ? 'БЕЗ ПЕРЕСАДОК'
                                : `${segment.stops.length} ПЕРЕСАД${
                                segment.stops.length === 1
                                    ? 'КА'
                                    : 'КИ'
                            }`}
                        </span>
                        <span>{segment.stops.join(', ')}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

function getDepartureTime (date: string) {
    const departureDate = new Date(date);
    const DepartureTime = departureDate.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });
    return DepartureTime;
}

function getArrivalTime  (date: string, duration: number) {
    const arrivalDate = new Date(date);
    arrivalDate.setMinutes(arrivalDate.getMinutes() + duration);
    const arrivalTime = arrivalDate.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })
    return arrivalTime;
}

function formatDuration (duration: number) {
    const hours = Math.floor(duration / 60);
    const mins = duration % 60;
    const parts = [];
    
    if (hours > 0) {
        parts.push(`${hours}ч`);
    }
    
    if (mins > 0) {
        parts.push(`${mins}м`);
    }

    return parts.join(' ');
}