import React from 'react'
import ServiceHero from '../component/servicePageComponent/serviceHero'

const ServicePages = () => {
  return (

    <div className="bg-white text-gray-800 py-16">
      <div className=" mx-auto ">

        <ServiceHero />

        <div className="grid gap-8 mx-20 mt-14 sm:grid-cols-2 lg:grid-cols-3">

          <div className="border rounded-xl p-6 bg-red-400 flex flex-col">
            <i className="fa-solid fa-lightbulb text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Consulting</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Clear advice to help you plan and make the right decisions.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-amber-200 flex flex-col">
            <i className="fa-solid fa-code text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Development</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Websites and apps built to be fast, reliable and easy to use.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>

          <div className="border rounded-xl p-6 flex bg-green-400 flex-col">
            <i className="fa-solid fa-pen-ruler text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Design</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Clean, modern designs that match your brand.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>

          <div className="border rounded-xl p-6 flex bg-blue-400 flex-col">
            <i className="fa-solid fa-bullhorn text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Marketing</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Reach more customers through social media, ads and content.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-purple-500 flex flex-col">
            <i className="fa-solid fa-headset text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Support</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Fast help whenever you run into issues.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>

          <div className="border rounded-xl p-6 bg-amber-600 flex flex-col">
            <i className="fa-solid fa-headset text-2xl text-blue-600"></i>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">Creativity</h3>
            <p className="mt-2 text-sm text-gray-600 grow">
              Innovative solutions to help your business stand out.
            </p>
            <button className="mt-5 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm">
              Click to enroll
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ServicePages