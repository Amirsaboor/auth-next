import BootstrapClient from '@/components/BootstrapClient';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToastContainer from '@/components/Toastify';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <ToastContainer />
        <BootstrapClient />
      </body>
    </html>
  )
}
