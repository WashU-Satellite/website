import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import styles from '../styles/GlitchEffect.module.css'

export function wesat() {
  return (
    <div key="1" className="min-h-screen bg-gray-100" style={{ backgroundColor: '#1D1B30', color: '#C5C6D0' }}>
      <head>
        <title>WashU SAT</title>
      </head>
      <header className="bg-white shadow border-b border-black" style={{ backgroundColor: '#1D1B30', borderBottomColor: '#C5C6D0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <img alt="WashU SAT logo" className="h-10" src="/placeholder.svg" />
            </div>
            <nav className="flex space-x-4">
              <Link className="text-gray-500 hover:text-gray-900" href="https://www.linkedin.com/company/washu-satellite/about/" style={{ color: '#FFFFFF' }}>
                LinkedIn
              </Link>
              <Link className="text-gray-500 hover:text-gray-900" href="#" style={{ color: '#FFFFFF' }}>
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
          <h2 className={`text-8xl font-bold italic text-center mb-7 ${styles.glitchText}`}>WashU Cubesat</h2>          
          </div>        </section>
          
        <section className="border-t border-white">
          </section>
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: '3rem' }}>Founding Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Avatar style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <AvatarImage alt="Ben Cook" src="/ben.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  <AvatarFallback>BC</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Ben Cook</h3>
                <p className="text-sm">President</p>
                <Link className="text-blue-600" href="#">
                  b.j.cook@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <AvatarImage alt="Owen Nieuwenhuizen" src="/owen.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  <AvatarFallback>ON</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Owen Nieuwenhuizen</h3>
                <p className="text-sm">Chief Electrical Engineer</p>
                <Link className="text-blue-600" href="#">
                  n.owen@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                  <AvatarImage alt="Jack Galloway" src="/jack.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  <AvatarFallback>JG</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Jack Galloway</h3>
                <p className="text-sm">Chief Mechanical Engineer</p>
                <Link className="text-blue-600" href="#">
                  galloway.j@wustl.edu
                </Link>
              </div>
              <div className="flex flex-col items-center text-center">
                <Avatar style={{ width: '120px', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
                <AvatarImage alt="Jared M." src="/jaredm.png" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                  <AvatarFallback>JM</AvatarFallback>
                </Avatar>
                <h3 className="mt-4 font-bold">Jared Mantell</h3>
                <p className="text-sm">Web & Software Engineer</p>
                <Link className="text-blue-600" href="#">
                  j.mantell@wustl.edu
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="py border-t border-white">
          </section>
        <section className="bg-black py-12" style={{ backgroundColor: '#1D1B30', color: '#C5C6D0' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: '3rem' }}>Our Mission</h2>
            <p className="text-lg text-center">
              WashU Satellite is the small satellite team of Washington University in St. Louis. We strive to prepare
              engineers for the interdisciplinary challenges of the future through innovative satellite design.
            </p>
          </div>
        </section>
        
      </main>
        <section className=" border-t border-white">
          </section>
      <footer className="bg-black py-4 text-center">
        <Link className="text-white-500 hover:text-gray-900" href="#">
          Visit WashU
        </Link>
      </footer>
    </div>
  )
}

export default wesat;