export function getEventName(eventId: string) {
  return eventId.split('_').slice(0, -1).join(' ');
}
