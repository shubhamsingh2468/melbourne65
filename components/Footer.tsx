
import 'tailwindcss/tailwind.css';
export default function Footer(){
  return(

    <footer className="bg-neutral-600  text-gray-800">
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center">
        <div>
          <a href="/">
            <img src="/logo.png" alt="Company Logo" className="w-16" />
          </a>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center">&copy; 2023 Company Name</p>
    </div>
  </footer>
  )
}