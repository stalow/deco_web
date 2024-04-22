import React, { useState } from 'react';


const Page_agenda = () => {
    const [week, setWeek] = useState(1);
    const [startDate, setStartDate] = useState(new Date());

    const nextWeek = () => {
        setWeek(week + 1);
        setStartDate(prevStartDate => {
            const newStartDate = new Date(prevStartDate);
            newStartDate.setDate(newStartDate.getDate() + 7);
            return newStartDate;
        });
    };

    const prevWeek = () => {
        setWeek(week - 1);
        setStartDate(prevStartDate => {
            const newStartDate = new Date(prevStartDate);
            newStartDate.setDate(newStartDate.getDate() - 7);
            return newStartDate;
        });
    };

    const generateDays = () => {
        const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

        return days.map((day, index) => {
            const currentDate = new Date(startDate);
            currentDate.setDate(currentDate.getDate() + index);
            const formattedDate = currentDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

            return (
                <div>
                    <div key={day} className="day">
                        <div>{day}</div>
                        <div>{formattedDate}</div>
                    </div>
                    <div className='time-compt-container'></div>
                </div>
            );
        });
    };

    return (
        <div className='agenda-container'>
            <div className="agenda">
                <div className="header">
                    <div className="title">Agenda</div>
                    <div className="week">
                        {/* Semaine {week} */}
                        <button onClick={prevWeek}>&lt;</button>
                        <button onClick={nextWeek}>&gt;</button>
                    </div>
                </div>
                <div className="calendar">
                    {/* Affiche ici le calendrier et les flèches */}
                </div>
                <div className="days">{generateDays()}</div>
            </div>
        </div>
    );
};

export default Page_agenda;
