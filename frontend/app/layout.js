import BootstrapClient from '@/components/BootstrapClient';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}

        <BootstrapClient />
      </body>
    </html>
  )
}
