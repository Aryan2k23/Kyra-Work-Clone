import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Menu, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-5 rounded flex items-center justify-center">
                <span><img src="/logo.png"/></span>
              </div>
              <span className="text-xl font-bold text-gray-900">Kyra Works Pvt. Ltd.</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                Home
              </Link>
              <Link href="/why-kyra-works" className="text-gray-700 hover:text-blue-600">
                Why Kyra Works?
              </Link>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-blue-600">
                  Our Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    <Link
                      href="/services/growth-consulting"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Growth Consulting
                    </Link>
                    <Link
                      href="/services/media-planning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Media Planning
                    </Link>
                    <Link
                      href="/services/events-planning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Events Planning
                    </Link>
                    <Link
                      href="/services/information-management"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Information Management
                    </Link>
                    <Link
                      href="/services/designing-printing"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Designing and Printing
                    </Link>
                    <Link
                      href="/services/visual-production"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Visual Production
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                Contact Us
              </Link>
            </nav>

            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
<section className="relative h-screen flex items-center justify-center">
  <img src="/header.jpg" alt="Hero Image" className="absolute inset-0 object-cover w-full h-full" />
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 text-center text-white px-4">
    <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance">Welcome to Kyra Works</h1>
    <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
      Your trusted partner in business growth and marketing excellence
    </p>
  </div>
  <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <ChevronDown className="h-8 w-8" />
  </button>
</section>


      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-balance">
              Transforming Ideas Into Success Stories
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                At Kyra Works we would like to welcome you and your idea of generating something amazing. We know you
                have something in your mind that will turn out to be one of the success story for many more. Lets
                collaborate your dream and our insight to make something best possible.
              </p>
              <p>
                We see ourselves as renowned leader in Growth Consulting and customization of interactive marketing
                solutions exceeding our customer's expectations. We are preferred and acknowledged as long-run partner
                for our national and international clients while ensuring employee growth and satisfaction.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br  rounded-2xl p-8 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="w-[300px] h-[300px] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span ><img src="/Welcome.jpg" alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
      <div className="border-t-2 border-gray-500"></div>
      <h2 className="text-4xl font-bold text-black-600 py-4">Our Expertise</h2>
      <div className="border-b-2 border-gray-500"></div>
    </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Growth Consulting */}
            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full" src="/Growth.jpg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Growth Consulting</h3>
                <p className="text-gray-600 mb-4">
                  Whenever you need an extra boost for your company's growth, We are here.
                </p>
                <Link
                  href="/services/growth-consulting"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>

            {/* Media Planning */}
            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                 <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full" src="/Media.jpg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Media Planning</h3>
                <p className="text-gray-600 mb-4">
                  Whenever you need an extra boost for your company's growth, We are here.
                </p>
                <Link
                  href="/services/media-planning"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>

            {/* Events Planning */}
            <Card className="bg-white text-gray-900 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                 <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full" src="/Events.jpg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Events Planning</h3>
                <p className="text-gray-600 mb-4">
                  Whenever you need an extra boost for your company's growth, We are here.
                </p>
                <Link
                  href="/services/events-planning"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What is your Number Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">What is your Number?</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Future of our Business is being determined right from the day we start planning. Various factors,
                  social media and everyday changing technologies are transforming business models faster than our
                  ability to keep up. Even winners need extra hand most of the times.
                </p>
                <p>
                  Nearly all of the successful business have growth plans, and a two third of them can't figure out
                  where to start. Are you willing to fail, let your product speak for itself and, importantly, get
                  expert.
                </p>
                <p className="font-semibold">
                  What is your Growth Plan? What are the Market Trends? Are you your customers saying about Your
                  Products? How to reach new clients?
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center h-80">
              <div className="text-center">
                <div className="w-[37rem] h-[37rem] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span><img src="/Business Growth.jpg" alt="" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Know What We Are Doing Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">We Know What We Are Doing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Designing and Printing */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full rounded-xl" src="/designprint.jpg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Designing and Printing</h3>
                <p className="text-gray-600 mb-4">A complete Creative Designing and Printing Solution.</p>
                <Link
                  href="/services/designing-printing"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>

            {/* Information Management */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full rounded-xl" src="/it.jpeg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Information Management</h3>
                <p className="text-gray-600 mb-4">
                  Whenever you need an extra boost for your company's growth, We are here.
                </p>
                <Link
                  href="/services/information-management"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>

            {/* Visual Production */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
               <div className="w-full h-48  rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-[18rem] h-[13rem]  rounded-full flex items-center justify-center">
                    <img className="w-full h-full rounded-xl" src="/visual.jpg" alt="" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Visual Production</h3>
                <p className="text-gray-600 mb-4">Production of Video ads and various program production.</p>
                <Link
                  href="/services/visual-production"
                  className="text-blue-600 font-semibold underline hover:text-blue-800"
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    {/* Our Partners Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Title with top and bottom lines */}
    <div className="text-center mb-16">
      <div className="border-t-2 border-gray-200"></div>
      <h2 className="text-4xl font-bold text-black-600 py-4">Our Partners</h2>
      <div className="border-b-2 border-gray-200"></div>
    </div>

    {/* Partner Logos */}
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
      {[
        "/youtube.jpg",
        "/ntc.jpg",
        "/nepalidol.jpg",
        "/Coke.jpg",
        "/nmb.jpg",
        "/Dabur.jpg",
        "/Nepal Television.jpg",
        "/visit nepal2020.jpg",
        "/pulsar.jpg",
        "/ap1.jpg",
        "/ktv.jpg",
        "/can.jpg",
        "/qh.jpg",
      ].map((partner, index) => (
        <div
          key={index}
          className="rounded-lg p-6 flex items-center justify-center h-36 hover:shadow-md transition-shadow"
        >
          <img className="h-full" src={partner} alt={`Partner ${index + 1}`} />
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="w-[10rem] h-[5rem] bg-white rounded-lg flex items-center justify-center mx-auto md:mx-0 mb-4">
                <span ><img src="/logo.png" alt="" /></span>
              </div>
              <h3 className="text-xl font-bold mb-4">KYRA WORKS PVT. LTD.</h3>
              <div className="space-y-2 text-gray-300">
                <p className="font-semibold">RB Tower, 5th Floor,</p>
                <p className="font-semibold">Lazimpat Road, Kathmandu -2</p>
                <p className="font-semibold">Kathmandu, Bagamati Province</p>
                <p className="font-semibold">Nepal</p>
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-center md:justify-start">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="font-semibold">+977 1 4445999</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <span className="font-semibold underline hover:text-blue-400">www.kyraworks.com</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Mail className="h-4 w-4 mr-2" />
                    <Link href="mailto:info@kyraworks.com" className="font-semibold underline hover:text-blue-400">
                      Send Email
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-6">Our Services</h3>
              <div className="space-y-3">
                <Link
                  href="/services/growth-consulting"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Growth Consulting
                </Link>
                <Link
                  href="/services/media-planning"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Media Planning
                </Link>
                <Link
                  href="/services/events-planning"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Events Planning
                </Link>
                <Link
                  href="/services/designing-printing"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Designing and Printing
                </Link>
                <Link
                  href="/services/visual-production"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Visual Production
                </Link>
                <Link
                  href="/services/information-management"
                  className="block text-gray-300 underline hover:text-blue-400 font-semibold"
                >
                  Information Management
                </Link>
                <Link href="/contact" className="block text-gray-300 underline hover:text-blue-400 font-semibold">
                  Contact Us
                </Link>
                <Link href="/" className="block text-gray-300 underline hover:text-blue-400 font-semibold">
                  Home
                </Link>
              </div>
            </div>

            {/* Visit Us */}
            <div className="text-center md:text-left">
  <h3 className="text-xl font-bold mb-6">Visit Us</h3>
  <div className="bg-gray-800 rounded-lg  h-64 flex items-center justify-center">
    <div className="text-center w-full h-full">
      <iframe
        title="Google Map"
        src="https://maps-api-ssl.google.com/maps?hl=en-US&ll=27.722527,85.320751&output=embed&q=27.722526,85.32082+(Untitled+Location)&z=21"
        className="w-full h-full rounded-lg"
        allowFullScreen
        aria-hidden="false"
      ></iframe>
    </div>
  </div>
</div>

          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            <p>
              All Rights Reserved @ Kyra Works Pvt. Ltd. 2009-2021 |
              <Link href="/terms" className="underline hover:text-blue-400 ml-1">
                Terms of Use
              </Link>{" "}
              |
              <Link href="/privacy" className="underline hover:text-blue-400 ml-1">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
