'use client';

import EventCard from '../EventCard';

const upcomingEvents = [
  {
    image: '/dashboard/building.png',
    date: 'September 11, 2025',
    title: 'Big title',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book... Read more",
    buttonText: 'Fund Webinar',
  },
  {
    image: '/dashboard/building.png',
    date: 'October 08, 2025',
    title: 'Big title',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book... Read",
    buttonText: 'Company Webinar',
  },
  {
    image: '/dashboard/building.png',
    date: 'July 27, 2025',
    title: 'Big title',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book... Read more",
    buttonText: 'Virtual Event',
  },
];

export default function UpcomingEventsSection() {
  return (
    <section className="w-full bg-[#1e1e1e] py-12">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="mb-8 text-3xl font-bold text-white">Upcoming Events</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event, index) => (
            <EventCard
              key={index}
              image={event.image}
              date={event.date}
              title={event.title}
              description={event.description}
              buttonText={event.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

