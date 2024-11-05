import BlogCard from "../components/BlogCard";
import Footer from '../components/Footer';

const Blog = () => {
    return (
      <div className="blog-page">
        <body>
            <BlogCard/>
        </body>
        <footer><Footer/></footer>
      </div>
    );
  };
  
  export default Blog;