import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Office Registration in Delhi | 22Workspace',
  description: 'Get a premium business address and virtual office registration for GST and ROC compliance in Central Delhi. Mail handling and professional services included.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
