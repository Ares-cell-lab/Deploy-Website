import React from 'react'

const HeroPage = () => {
  return (
  
<div className="relative overflow-hidden bg-linear-to-br from-indigo-50/70 to-white">  
      <div className="relative overflow-hidden bg-linear-to-br from-indigo-50/70 to-white">
        <div className="absolute -right-24 -top-16 h-96 w-96 rounded-full bg-indigo-100/70" />
        <div className="absolute right-40 top-40 h-56 w-56 rounded-full bg-violet-100/60" />
        <div className="relative mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
              Professional Services for Your Growth
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
              We Build Solutions
              <span className="block bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                for a Better Tomorrow
              </span>
            </h1>
            <p className="mt-6 text-slate-600">
             Keerty is a full-service company helping businesses thrive with expert consulting,
              innovative development, creative design, strategic marketing and reliable support.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a href="#" className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700">
                Get a Quote
              </a>
              <a href="#" className="rounded-lg border border-indigo-300 px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                Watch Our Story
              </a>
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="font-bold">500+</p>
                <p className="text-xs text-slate-500">Happy Clients</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="font-bold">5.0</p>
                <p className="text-xs text-slate-500">Client Satisfaction</p>
              </div>
              <div className="h-10 w-px bg-slate-200" />
              <div>
                <p className="font-bold">100%</p>
                <p className="text-xs text-slate-500">Reliable Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Our Services</p>
          <h2 className="mt-2 text-3xl font-extrabold">What We Offer</h2>
          <p className="mt-3 text-slate-600">
            We provide end-to-end services to help your business grow, innovate and stay ahead in today's competitive market.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-bold">Consulting</h3>
            <p className="mt-2 text-sm text-slate-600">Get expert advice and strategic guidance to make better decisions and achieve your goals.</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more</a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-bold">Development</h3>
            <p className="mt-2 text-sm text-slate-600">Build powerful, scalable and custom web and mobile applications tailored to your needs.</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more</a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-bold">Design</h3>
            <p className="mt-2 text-sm text-slate-600">Create stunning visual identities and user-friendly designs that bring your brand to life.</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more</a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-3">
            <h3 className="text-lg font-bold">Marketing</h3>
            <p className="mt-2 max-w-xs text-sm text-slate-600">Reach more customers through social media, content, and data-driven marketing strategies.</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more</a>
          </div>

          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-3">
            <h3 className="text-lg font-bold">Support</h3>
            <p className="mt-2 max-w-xs text-sm text-slate-600">Get fast, friendly and reliable support whenever you need it. We're here to help, always.</p>
            <a href="#" className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-700">Learn more</a>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-5">
          <div className="md:border-r md:border-slate-200 md:pr-6">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Why choose us</p>
            <h2 className="mt-2 text-2xl font-extrabold leading-snug">Your Success<br />Is Our Business</h2>
            <p className="mt-3 text-sm text-slate-600">We combine expertise, creativity and technology to deliver real results for your business.</p>
          </div>

          <div>
            <h3 className="font-bold">Expert Team</h3>
            <p className="mt-1 text-sm text-slate-500">Skilled professionals with years of experience.</p>
          </div>
          <div>
            <h3 className="font-bold">On-Time Delivery</h3>
            <p className="mt-1 text-sm text-slate-500">We value your time and always deliver on schedule.</p>
          </div>
          <div>
            <h3 className="font-bold">Client Focused</h3>
            <p className="mt-1 text-sm text-slate-500">Your goals, satisfaction and growth are our priority.</p>
          </div>
          <div>
            <h3 className="font-bold">Proven Results</h3>
            <p className="mt-1 text-sm text-slate-500">A track record of success across various industries.</p>
          </div>
        </div>
      </div>
      </div>
      )
    }

export default HeroPage