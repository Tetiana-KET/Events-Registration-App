import UserInterface from '../models/UserInterface';

export default function useFilterRegistrations(registrations: UserInterface[], searchQuery: string) {
  return registrations.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );
}
