import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <header className="sticky top-0 shadow-md bg-black/80 z-20">
      <div className="flex justify-between items-center h-[70px] container">
        <div>
        <Image src="/imgs/menu.svg" alt="menu bar" width={40} height={40} />
        </div>
        <div>
          <Image src="/imgs/logoRed.png" alt="logo" width={40} height={40} className="object-cover"/>
        </div>
        <Link href='#' 
          className="hidden lg:block px-5 py-2 bg-white text-black rounded-3xl font-semibold cursor-pointer transition hover:text-white hover:bg-myRed"
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}

export default Header