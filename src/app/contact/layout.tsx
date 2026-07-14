import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact 22Workspace | Office Space & Coworking in Delhi',
  description: 'Get in touch with 22Workspace. Book a tour of our premium coworking spaces, private offices, and meeting rooms at Asaf Ali Road, Central Delhi.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
