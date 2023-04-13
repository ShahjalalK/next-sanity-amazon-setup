import Link from 'next/link'
import React from 'react'

const AdminNavbar = (Props : any) => {
  return (
    <div>
        <div className="py-5">
            <Link href="/" className="border text-gray-600 rounded-md px-7 py-1 inline-flex">Go to website</Link>
        </div>

        <>{Props.renderDefault()}</>
    </div>
  )
}

export default AdminNavbar