import './globals.css'

export const metadata = {
  title: 'Frame it!',
  authors: [{ name: 'Rafael Planas', url: 'https://github.com/mybess00' }],
  description: 'Frame it is a web application that allows you to customize and frame your favorite Twitter tweets with different layouts to make them unique. Download your custom tweets as PNG and share them on other social networks. Make your tweets stand out with Frame it! Try it now.',
  keywords: ['twitter', 'frame it', 'tweet', 'image'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}
