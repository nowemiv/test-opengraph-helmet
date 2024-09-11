import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HelmetProvider>
      <Helmet>
        <meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
        <meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
      </Helmet>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </HelmetProvider>
  )
}

export default App
