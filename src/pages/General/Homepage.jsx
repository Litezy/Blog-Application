import React from 'react'
import PageLayout from '../../components/PageLayout'
import SingleBlog from '../../components/SingleBlog'

const Homepage = () => {
  return (
    <PageLayout>
      <div className="py-10">
        {new Array(10).fill(0).map((item, i) => (
          <SingleBlog key={i} />
        ))}
      </div>
    </PageLayout>
  )
}

export default Homepage