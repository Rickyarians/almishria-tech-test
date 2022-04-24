

import { ChatIcon, UserIcon, SearchIcon, ShoppingCartIcon, } from '@heroicons/react/outline'

const StickyOption = (props) => {
    return (
      <>
     <div className="hidden md:flex fixed right-0 items-center top-1/2 ">
        <div className="flex flex-col items-center justify-around bg-white w-12 h-48">
        <a href="/">
            <ChatIcon className="h-6 w-6 text-gray-500"/>
        </a>
        
        <a href="/">
            <UserIcon className="h-6 w-6 text-gray-500"/>
        </a>
        <a href="/">
            <SearchIcon className="h-6 w-6 text-gray-500"/>
        </a>
        <a href="/">
            <ShoppingCartIcon className="h-6 w-6 text-gray-500"/>
        </a>
        </div>
    </div>
     </>
    )
} 

export default StickyOption


