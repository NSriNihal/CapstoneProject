import React from 'react'

function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <p className="text-sm font-medium text-gray-600">Welcome to Capstone Blog</p>
      <h1 className="mt-2 text-3xl font-bold text-gray-900">
        Share your ideas with the world, one article at a time.
      </h1>
      <p className="mt-4 text-base leading-7 text-gray-700">
        Discover stories from passionate writers, connect with your community,
        and publish your own voice. This platform is built to make writing,
        reading, and collaboration simple and enjoyable.
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-md border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900">Read</h3>
          <p className="mt-1 text-gray-700">
            Explore fresh articles across topics from technology to lifestyle.
          </p>
        </div>

        <div className="rounded-md border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900">Write</h3>
          <p className="mt-1 text-gray-700">
            Create rich posts with ease and share insights that matter.
          </p>
        </div>

        <div className="rounded-md border border-gray-200 p-4">
          <h3 className="text-lg font-semibold text-gray-900">Grow</h3>
          <p className="mt-1 text-gray-700">
            Build your audience and engage with readers through meaningful content.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
