import React from 'react'

const HeroContact = () => {
  return (
      <div className="relative overflow-hidden bg-blue-50/60 py-16 text-center">
        <div className="absolute -left-20 -top-24 h-48 w-48 rounded-full bg-blue-200/60" />
        <div className="absolute -right-24 top-4 h-72 w-72 rounded-full bg-blue-100/70" />
        <div className="relative mx-auto max-w-xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-600">Get in touch</p>
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Contact Us</h1>
          <p className="text-slate-600">
            We'd love to hear from you! Whether you have a question, a project in mind, or just want to say hello, feel free to reach out.
          </p>
        </div>
      </div>
  )
}

export default HeroContact