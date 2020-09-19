import Head from 'next/head'
import Navigation from '../components/navigation'

export default function Layout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100" id="bootstrap-overrides">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Durham University Vegetarian and Vegan Society's Blog"
        />
        <meta property="og:title" content="Durham University Vegetarian and Vegan Society" key="title" />
        <meta property="og:description" content="Durham University Vegetarian and Vegan Society's Blog" key="description" />
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v8.0" nonce="k6WLd6DH"></script>
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer className="d-flex justify-content-center mt-auto">
        <a className="m-3" target="_blank" href="https://www.facebook.com/durhamvegsoc/">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"
            />
          </svg>
        </a>

        <a className="m-3" target="_blank" href="https://www.instagram.com/durhamvegsoc/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>

        <a className="m-3" target="_blank" href="https://www.strava.com/clubs/DUVVS">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M226.8,31L93.8,287.6h78.4l54.7-102l54.2,102h77.8L226.8,31z M358.8,287.6l-38.6,77.5L281,287.6h-59.4L320.2,481l98-193.4H358.8z"
            />
          </svg>
        </a>

      </footer>
    </div>
  )
}
