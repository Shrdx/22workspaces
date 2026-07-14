import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meeting & Conference Rooms in Central Delhi | 22Workspace',
  description: 'Book premium meeting rooms, boardrooms, and conference spaces in Central Delhi. Equipped with high-speed Wi-Fi, displays, and professional amenities.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
