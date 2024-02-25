import { Navbar, TextInput } from 'flowbite-react';
import { Link,useLocation} from 'react-router-dom';
import {AiOutlineSearch} from 'react-icons/ai'; 
import { HiMoon } from "react-icons/hi";

export default function Header() {
  const path = useLocation().pathname
  return (
    <Navbar className='border-b-2'> 
     <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog</span>
     </Link>
     <form >
     <TextInput 
        type='text' 
        placeholder='Search...' 
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
    />
     </form>
     <button className=' border-2 px-4 w-13 h-10 rounded-full lg:hidden'>
      <AiOutlineSearch/>
     </button>

    <div className=" flex gap-2 md: order-2">
      <button className=" border-2 px-4 py- w-13 h-10  rounded-full  " >
        <HiMoon />
      </button>
      <Link to='/sign-in'>
      <button className='px-4 py-1 w-15 h-9 text-sm bg-gradient-to-r from-purple-800 to-blue-500 rounded-lg text-white'>
        Sign In
      </button>
      </Link>
      <Navbar.Toggle/>
      </div> 
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={'div'}>
          <Link to ='/'>
            Home
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={'div'}>
          <Link to ='/about'>
            About
          </Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={'div'}>
          <Link to ='/projects'>
            Projects
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
