import React from 'react';
import BlogPageComp_1 from '../../Components/BlogPageComponents/BlogPageComp_1';
import BlogPageComp_2 from '../../Components/BlogPageComponents/BlogPageComp_2';
import BlogPageComp_3 from '../../Components/BlogPageComponents/BlogPageComp_3';
import HomeCom_9 from '../../Components/HomePageComponents/HomeCom_9';

function Blog() {
  return (
    <div className="bg-[#030305] text-white ">
      <div >
        <BlogPageComp_1 />
      </div>

      <div >
        <BlogPageComp_2 />
      </div>

      <div >
        <BlogPageComp_3 />
      </div>

      <div>
        <HomeCom_9 />
      </div>
    </div>
  );
}

export default Blog;
