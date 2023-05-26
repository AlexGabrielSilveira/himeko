import Navbar from '@/layouts/Navbar'
import './global.css'


export default function RootLayout({ children }) {
 return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
