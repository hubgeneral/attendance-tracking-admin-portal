import { Link } from "react-router-dom"
import HMlogo from  "../assets/HM.logo.png"
const Footer = () => {
  return (
    <footer className="w-full border-t bg-white py-4 px-6 dark:border-t-0 dark:bg-[#14201C] flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
    <div className="flex items-center space-x-2">
      <img src={HMlogo} alt="Heidelberg Materials" className="h-6" />
    </div>

    <div className="flex flex-wrap items-center justify-center space-x-2 text-gray-400 mt-2 md:mt-0">
      <span>© Copyright 2025 Heidelberg Materials</span>
      <span>|</span>
      {/* <a href="/imprint" className="hover:text-gray-600">Imprint</a> */}
      <Link to="/imprint" className="hover:text-gray-600">
        Imprint
      </Link>
      <span>|</span>
      <Link to="/disclaimer" className="hover:text-gray-600">
        Disclaimer
      </Link>
      <span>|</span>
      <Link to="/copyright" className="hover:text-gray-600">
        Copyright
      </Link>
      <span>|</span>
      <Link to="/dataprotection" className="hover:text-gray-600">
        Data Protection
      </Link>
    </div>

    <div className="flex items-center space-x-2 mt-2 md:mt-0">
      <span className="text-gray-400">Powered by</span>
      <img src={HMlogo} alt="Heidelberg Materials" className="h-6" />
    </div>
  </footer>
  )
}

export default Footer
