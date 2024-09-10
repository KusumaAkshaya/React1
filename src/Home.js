import { useState } from 'react'
import BlogList from './bloglist'

const Home = () => {
    // eslint-disable-next-line
    const [blogs, setBlogs] = useState( [
        {title: 'My new WEB', Body: 'lorem epsum wefwef ewe3e3edd', author: 'mario', id: 1},
        {title: 'Welcome freshers', Body: 'lorem epsum wefwef ewe3e3edd', author: 'marioWeltem', id: 2},
        {title: 'Web dev top tips', Body: 'lorem epsum wefwef ewe3e3edd', author: 'mario', id: 3}
    ])

    return ( 
        <div className="home">
         <BlogList blogs={blogs} title="All Blogs!" />
         <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario Blogs" />
        </div>
     );
}
 
export default Home;