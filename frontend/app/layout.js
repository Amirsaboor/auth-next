import BootstrapClient from '@/components/BootstrapClient';
import Header from '@/components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToastContainer from '@/components/Toastify';
import { AuthProvider } from '@/context/AuthContext';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Header />
          {children}
          <ToastContainer />
          <BootstrapClient />
        </AuthProvider>
      </body>
    </html>
  )
}
