import { useLocation } from 'react-router-dom';

export default function useExtractEventId(): string | null {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  return params.get('eventId');
}
