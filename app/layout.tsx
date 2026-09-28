import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Rido — Go together. Go farther.', description: 'Find affordable city-to-city rides with people already heading your way.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
