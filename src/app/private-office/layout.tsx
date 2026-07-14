import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Private Office Space in Central Delhi | 22Workspace',
  description: 'Rent fully furnished, managed private office spaces in Central Delhi. Perfect for growing teams and enterprises seeking premium workspace.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
