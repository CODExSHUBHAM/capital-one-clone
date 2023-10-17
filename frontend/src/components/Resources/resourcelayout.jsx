import { useRef } from "react"
import { Link, Outlet } from "react-router-dom"

const Resourcelayout = () => {

    const expandSections = () => {
        if (ref.current.classList.contains('hidden')) {
            ref.current.classList.remove('hidden')
            ref.current.classList.add('flex')
        }
        else if (ref.current.classList.contains('flex')) {
            ref.current.classList.remove('flex')
            ref.current.classList.add('hidden')
        }
    }

    const ref = useRef()

    return (
        <>
            {/* Desktop Nav  */}
            <div className="hidden  w-full py-4 px-40 bg-white border-b md:flex justify-between">
                <Link to='' className="font-semibold">Resources</Link>
                <div className="flex space-x-8">
                    <Link to='procurementoverview' className="text-sm hover:underline hover:text-blue-600 font-medium">Procurement Overview</Link>
                    <Link to='negosiation' className="text-sm hover:underline hover:text-blue-600 font-medium">Negosiation</Link>
                    <Link to='suppliermanagement' className="text-sm hover:underline hover:text-blue-600 font-medium">Supplier Management</Link>
                    <Link to='contracts' className="text-sm hover:underline hover:text-blue-600 font-medium">Contracts</Link>
                    <Link to='spendcategories' className="text-sm hover:underline hover:text-blue-600 font-medium">Spend Catedories</Link>
                </div>
            </div>

            {/* Mobile Nav  */}

            <div className="w-full p-6 bg-white border-b flex  justify-between md:hidden">
                <Link to='' className="font-semibold">Resources</Link>
                <h1 onClick={expandSections} className="text-blue-600">Sections</h1>
            </div>
            <div ref={ref} className="space-x-8 min-h-screen hidden flex-col item p-4 bg-white ">
                <Link to='procurementoverview' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Procurement Overview</Link>
                <Link to='negosiation' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Negosiation</Link>
                <Link to='suppliermanagement' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Supplier Management</Link>
                <Link to='contracts' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Contracts</Link>
                <Link to='spendcategories' className='hover:text-blue-600 flex justify-between items-center px-2 py-6 text-left border-b '>Spend Catedories</Link>
            </div>


            <Outlet />
        </>
    )
}

export default Resourcelayout