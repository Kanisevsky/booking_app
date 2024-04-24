import { getEventById } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  return <div>Event Details</div>;
};

export default EventDetails;
