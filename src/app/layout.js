import Navbar from "@/layouts/navbar/Navbar"
import './global.css'

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
