import React from 'react'
import ContactContent from '../component/contactPageComponent/ContactContent'


const ContactPage = () => {
  return (
       <section className="mx-auto grid max-w-5xl gap-12 px-6 py-12 md:grid-cols-2">
        {/* Left */}
     <ContactContent />

        {/* Form card */}
        <div className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/70 ring-1 ring-slate-100">
          <h2 className="mb-2 text-2xl font-bold">Send Us a Message</h2>
          <p className="mb-6 max-w-xs text-slate-600">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold">Subject</label>
              <div className="relative">
                <select
                  id="subject"
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Select a subject</option>
                  <option>General enquiry</option>
                  <option>Project request</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
            
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Type your message here..."
                className="w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Send Message
     
            </button>
          </form>
        </div>
      </section>
  )
}

export default ContactPage