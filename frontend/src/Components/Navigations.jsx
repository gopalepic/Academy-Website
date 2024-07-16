import React from 'react'

const Navigations = () => {
  return (
    <div className="flex flex-wrap justify-around gap-4 ">
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <img src="" />
      <h2 className="text-center text-lg font-bold mt-2">Admission</h2>
    </div>
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <img src="" />
      <h2 className="text-center text-lg font-bold mt-2">Contact</h2>
    </div>
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <img src="" alt="School Building" className="w-full rounded-md" />
      <h2 className="text-center text-lg font-bold mt-2">About us</h2>
    </div>
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <h2 className="text-center text-lg font-bold mt-2">Disclosure</h2>
      <img src="" alt="Disclosure" className="w-full rounded-md" />
    </div>
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <img src="" alt="Gallery" className="w-full rounded-md" />
      <h2 className="text-center text-lg font-bold mt-2">Gallery</h2>
    </div>
    <div className="w-1/3 bg-gray-200 p-4 rounded-md shadow-md">
      <img src="" alt="Certificates" className="w-full rounded-md" />
      <h2 className="text-center text-lg font-bold mt-2">TC</h2>
    </div>
  </div>
  )
}

export default Navigations
