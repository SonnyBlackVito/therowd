import OnDemandEventsSection from './components/OnDemandEventsSection';
import UpcomingEventsSection from './components/UpcomingEventsSection';

export default function EventsPage() {
  return (
    <div className="bg-[#1e1e1e] text-white">
      <UpcomingEventsSection />
      <OnDemandEventsSection />
    </div>
  );
}