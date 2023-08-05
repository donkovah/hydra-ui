import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import BodyLayout from '@/partials/BodyLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hydra UI',
  description: 'Logistics Team',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <StyledComponentsRegistry>
          <BodyLayout children={children} />
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;