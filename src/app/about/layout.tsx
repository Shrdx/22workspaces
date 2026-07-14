import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About 22Workspace | Premium Coworking in Central Delhi',
  description: 'Learn about 22Workspace, our mission, and why businesses choose our coworking spaces, virtual offices, and meeting rooms in Central Delhi.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
