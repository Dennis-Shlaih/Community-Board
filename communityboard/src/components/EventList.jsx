import React from 'react';
import EventCard from './EventCard';

const EventList = () => {
    return (
        <div className="event-list">
            <EventCard
                name="Epic Web Conf 2025"
                date="March 25-26, 2025"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.Z8gur06KDewZvoVsNbRVdAHaHa&pid=Api"
                link="https://www.epicweb.dev/conf"
            />
            <EventCard
                name="NVIDIA GTC 2025"
                date="March 17-21, 2025"
                imageUrl="https://tse3.mm.bing.net/th?id=OIF.u%2b%2f%2bT6MFuLwDpUSjBAyHzg&pid=Api"
                link="https://www.nvidia.com/gtc/"
            />
            <EventCard
                name="Esri Developer & Technology Summit 2025"
                date="March 11-14, 2025"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.rQl_s6Ju04w81bxCWsr7ugHaBq&pid=Api"
                link="https://www.esri.com/en-us/about/events/devtech/overview"
            />
            <EventCard
                name="JavaOne 2025"
                date="March 2025"
                imageUrl="https://tse2.mm.bing.net/th?id=OIP.UDcwXRfafXKWmDffLHXW2wHaBA&pid=Api"
                link="https://en.wikipedia.org/wiki/JavaOne"
            />
            <EventCard
                name="THAT Conference 2025"
                date="TBA"
                imageUrl="https://tse4.mm.bing.net/th?id=OIP.8ZYEahNw0zwV0Z7D3rApGQHaE3&pid=Api"
                link="https://thatconference.com"
            />
            <EventCard
                name="SXSW 2025"
                date="March 7-15, 2025"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.Z8gur06KDewZvoVsNbRVdAHaHa&pid=Api"
                link="https://www.sxsw.com/"
            />
            <EventCard
                name="PyCon US 2025"
                date="April 16-24, 2025"
                imageUrl="https://tse3.mm.bing.net/th?id=OIP.rQl_s6Ju04w81bxCWsr7ugHaBq&pid=Api"
                link="https://us.pycon.org/2025/"
            />
            <EventCard
                name="Google Cloud Next 2025"
                date="March 18-20, 2025"
                imageUrl="https://th.bing.com/th/id/OIP.VRDhG43T69S8U0K45G0gagHaEK?rs=1&pid=ImgDetMain"
                link="https://cloud.withgoogle.com/next"
            />
            <EventCard
                name="Game Developers Conference (GDC) 2025"
                date="March 17-21, 2025"
                imageUrl="https://tse2.mm.bing.net/th?id=OIP.UDcwXRfafXKWmDffLHXW2wHaBA&pid=Api"
                link="https://gdconf.com/"
            />
            <EventCard
                name="Microsoft Build 2025"
                date="May 19-22, 2025"
                imageUrl="https://tse4.mm.bing.net/th?id=OIP.8ZYEahNw0zwV0Z7D3rApGQHaE3&pid=Api"
                link="https://build.microsoft.com/"
            />
        </div>
    );
};

export default EventList;