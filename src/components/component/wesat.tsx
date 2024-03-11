import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function wesat() {
  return (
    <div key="1" className="min-h-screen bg-gray-100">
      <head>
        <title>WashU SAT</title>
      </head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <img alt="WashU SAT logo" className="h-10" src="/globey.png" />
            </div>
            <nav className="flex space-x-4">
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                LinkedIn
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#">
                Email
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <section className="relative">
          <img
            alt="Earth Horizon from Space"
            className="w-full h-[500px] object-cover"
            height="500"
            src="/globey.png"
            style={{
              aspectRatio: "1920/500",
              objectFit: "cover",
            }}
            width="1920"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-6xl font-bold">WashU CubeSat</h1>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage alt="Ben Cook" src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Ben Cook</h3>
                <p className="text-sm">President</p>
                <Link className="text-blue-600" href="#">
                  b.j.cook@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage alt="Owen Nieuwenhuizen" src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Owen Nieuwenhuizen</h3>
                <p className="text-sm">Chief Electrical Engineer</p>
                <Link className="text-blue-600" href="#">
                  n.owen@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage alt="Jack Galloway" src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Jack Galloway</h3>
                <p className="text-sm">Chief Mechanical Engineer</p>
                <Link className="text-blue-600" href="#">
                  galloway.j@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar>
                  <AvatarImage alt="Jared Mantell" src="/placeholder.svg?height=128&width=128" />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Jared Mantell</h3>
                <p className="text-sm">Software Engineer; Webmaster</p>
                <Link className="text-blue-600" href="#">
                  J.mantell@wustl.edu
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-center">
              WashU Satellite is the small satellite team of Washington University in St. Louis. We strive to prepare
              engineers for the interdisciplinary challenges of the future through innovative satellite design.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-white py-4 text-center">
        <Link className="text-gray-500 hover:text-gray-900" href="#">
          Visit WashU
        </Link>
      </footer>
    </div>
  )
}
export default wesat;
