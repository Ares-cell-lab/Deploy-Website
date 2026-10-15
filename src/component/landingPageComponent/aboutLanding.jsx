import React from 'react'

const AboutLanding = () => {
 return (
    <div className="bg-white font-sans text-slate-900">
      {/* Hero */}
      <div className="relative overflow-hidden bg-linear-to-r from-indigo-50/70 to-white py-20 text-center">
        <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-indigo-100/70" />
        <div className="absolute -right-24 top-6 h-72 w-72 rounded-full bg-violet-100/60" />
        <div className="relative mx-auto max-w-2xl px-6">
          <span className="inline-block rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
            About KeertySolutions
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
            We Help Businesses
            <span className="block bg-linear-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Grow With Confidence
            </span>
          </h1>
          <p className="mt-6 text-slate-600">
            We're a team of consultants, developers, designers and marketers who turn
            business goals into real, measurable results.
          </p>
        </div>
      </div>

      {/* Our story */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Our Story</p>
          <h2 className="mt-2 text-3xl font-extrabold">Built on Trust and Results</h2>
          <p className="mt-4 text-slate-600">
            KeertySolutions started in Lagos with a simple idea: businesses shouldn't need
            five different agencies to get one project done. We brought strategy,
            technology, design and support under one roof.
          </p>
          <p className="mt-4 text-slate-600">
            Today we work with startups, growing companies and established brands across
            Nigeria and beyond. Every project begins with listening and ends with
            support that continues after launch.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-indigo-50 p-6">
            <p className="text-3xl font-extrabold text-indigo-600">500+</p>
            <p className="mt-1 text-sm text-slate-600">Happy clients</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-6">
            <p className="text-3xl font-extrabold text-violet-600">5.0</p>
            <p className="mt-1 text-sm text-slate-600">Client satisfaction</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-6">
            <p className="text-3xl font-extrabold text-blue-600">100%</p>
            <p className="mt-1 text-sm text-slate-600">Reliable support</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-6">
            <p className="text-3xl font-extrabold text-pink-600">5</p>
            <p className="mt-1 text-sm text-slate-600">Core services</p>
          </div>
        </div>
      </div>

      {/* Mission and vision */}
      <div className="bg-indigo-50/50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-2">
          <div className="rounded-xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-3 text-slate-600">
              To give every business access to expert advice, quality technology and
              creative work that helps it grow.
            </p>
          </div>
          <div className="rounded-xl bg-white p-8 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="mt-3 text-slate-600">
              To be the most trusted partner for businesses building a better tomorrow
              across Africa and the world.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Our Values</p>
          <h2 className="mt-2 text-3xl font-extrabold">What Guides Our Work</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-xl p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="font-bold">Integrity</h3>
            <p className="mt-2 text-sm text-slate-600">We're honest about timelines, costs and what's possible.</p>
          </div>
          <div className="rounded-xl p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="font-bold">Quality</h3>
            <p className="mt-2 text-sm text-slate-600">We ship work we'd be proud to put our own name on.</p>
          </div>
          <div className="rounded-xl p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="font-bold">Partnership</h3>
            <p className="mt-2 text-sm text-slate-600">Your goals come first. We work as part of your team.</p>
          </div>
          <div className="rounded-xl p-6 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
            <h3 className="font-bold">Growth</h3>
            <p className="mt-2 text-sm text-slate-600">We keep learning so your business keeps moving forward.</p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="bg-indigo-50/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">Our Team</p>
            <h2 className="mt-2 text-3xl font-extrabold">The People Behind KeertySolutions</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl bg-white p-6 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-100 text-xl font-bold text-indigo-600">AO</div>
              <h3 className="mt-4 font-bold">Adaeze Okafor</h3>
              <p className="text-sm text-slate-500">Founder & CEO</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-600">TA</div>
              <h3 className="mt-4 font-bold">Tunde Adeyemi</h3>
              <p className="text-sm text-slate-500">Head of Development</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-pink-100 text-xl font-bold text-pink-600">CE</div>
              <h3 className="mt-4 font-bold">Chioma Eze</h3>
              <p className="text-sm text-slate-500">Creative Director</p>
            </div>
            <div className="rounded-xl bg-white p-6 text-center shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-xl font-bold text-emerald-600">IB</div>
              <h3 className="mt-4 font-bold">Ibrahim Bello</h3>
              <p className="text-sm text-slate-500">Marketing Lead</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-linear-to-r from-indigo-600 to-violet-600 px-8 py-12 text-center text-white">
          <h2 className="text-3xl font-extrabold">Ready to Work Together?</h2>
          <p className="mx-auto mt-3 max-w-md text-indigo-100">
            Tell us about your project and we'll get back to you within one business day.
          </p>
          <a href="#" className="mt-6 inline-block rounded-lg bg-white px-6 py-3 text-sm font-semibold text-indigo-600 hover:bg-indigo-50">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );

}

export default AboutLanding