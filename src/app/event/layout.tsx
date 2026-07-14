import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Spaces & Venues in Central Delhi | 22Workspace',
  description: 'Host your next workshop, seminar, or corporate event at 22Workspace. Premium event spaces in Central Delhi with modern amenities and catering options.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
