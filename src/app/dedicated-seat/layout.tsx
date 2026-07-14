import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dedicated Desk Coworking in Central Delhi | 22Workspace',
  description: 'Reserve your dedicated desk in our premium coworking space. Enjoy 24/7 access, high-speed internet, and networking opportunities in Central Delhi.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
