import React from 'react'
import HeroContact from '../contactPageComponent/HeroContact'


const ContactContent = () => {
  return (

      <div className="pt-4">
           <HeroContact />
        <h2 className="mb-3 text-2xl font-bold">Get in Touch</h2>
        <p className="mb-8 max-w-sm text-slate-600">
          You can reach us through any of the channels below. We're always here to help!
        </p>

        <ul className="space-y-8">
          <li className="flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            </span>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-slate-600">hello@devspace.com</p>
            </div>
          </li>

          <li className="flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
     
            </span>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-slate-600">+234 812 345 6789</p>
            </div>
          </li>

          <li className="flex items-center gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-600">
          
            </span>
            <div>
              <p className="font-semibold">Our Location</p>
              <p className="text-slate-600">Lagos, Nigeria</p>
            </div>
          </li>

          <li className="flex items-start gap-5">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
   
            </span>
            <div>
              <p className="font-semibold">Follow Us</p>
              <p className="mb-2 text-slate-600">Stay connected with us on social media.</p>
              <div className="flex items-center gap-5 text-slate-900">
         
             
            
              </div>
            </div>
          </li>
        </ul>
      </div>

  )
}

export default ContactContent