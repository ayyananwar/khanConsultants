import { Link } from 'react-router-dom'
import { HiOutlineExclamationTriangle } from 'react-icons/hi2'

export default function NotFound() {
  return (
    <section className="min-h-[70svh] flex items-center justify-center px-4 sm:px-6 py-16 sm:py-20 bg-white">
      <div className="max-w-xl w-full text-center rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8 md:p-10">
        <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mb-4 sm:mb-5">
          <HiOutlineExclamationTriangle className="text-2xl sm:text-3xl" />
        </div>
        <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#3d6b56] mb-2 uppercase">Error 404</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">Page not found</h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-7">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-[#3d6b56] hover:bg-[#2c4d3f] text-white font-semibold px-6 py-3 min-h-[44px]"
          >
            Go to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 text-gray-800 font-semibold px-6 py-3 min-h-[44px] hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
