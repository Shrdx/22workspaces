import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open Space & Flexible Coworking in Delhi | 22Workspace',
  description: 'Join our vibrant open space coworking community. Flexible seating, premium amenities, and a collaborative environment at 22Workspace.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
