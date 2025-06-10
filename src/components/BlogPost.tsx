import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/BlogPost.scss';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  content: string;
  readTime: string;
}

function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // Sample blog post data - in a real app, this would come from an API or CMS
  const blogPostsData: { [key: string]: BlogPostData } = {
    "1": {
      id: "1",
      title: "Getting Started with Machine Learning in 2024",
      date: "March 15, 2024",
      readTime: "8 min read",
      content: `
        Machine learning has evolved significantly over the past few years, and 2024 presents new opportunities and challenges for developers entering this field.
        
        ## What's New in 2024
        
        The landscape of machine learning has shifted dramatically with the rise of large language models, improved accessibility of ML tools, and the democratization of AI development.
        
        ### Key Trends to Watch
        
        1. **Generative AI Integration**: The integration of generative AI into everyday applications has become mainstream.
        2. **MLOps Evolution**: Better tools for managing the machine learning lifecycle.
        3. **Edge Computing**: Running ML models directly on devices for better privacy and performance.
        
        ## Getting Started
        
        If you're new to machine learning, here's a structured approach to begin your journey:
        
        ### 1. Foundation Knowledge
        Start with understanding the basics of statistics, linear algebra, and programming (preferably Python).
        
        ### 2. Choose Your Learning Path
        - **Supervised Learning**: Start with classification and regression problems
        - **Unsupervised Learning**: Explore clustering and dimensionality reduction
        - **Deep Learning**: Dive into neural networks and their applications
        
        ### 3. Practical Tools
        - **Python Libraries**: scikit-learn, pandas, numpy
        - **Deep Learning**: TensorFlow, PyTorch
        - **Visualization**: matplotlib, seaborn, plotly
        
        ## Conclusion
        
        The field of machine learning continues to evolve rapidly. The key to success is continuous learning and practical application of concepts through real projects.
      `
    },
    "2": {
      id: "2",
      title: "Building Scalable React Applications",
      date: "February 28, 2024",
      readTime: "12 min read",
      content: `
        Building scalable React applications requires careful planning, proper architecture, and adherence to best practices.
        
        ## Architecture Patterns
        
        When building large-scale React applications, choosing the right architecture pattern is crucial.
        
        ### Component Structure
        
        A well-organized component structure is the foundation of a scalable React application:
        
        - **Atomic Design**: Break down components into atoms, molecules, and organisms
        - **Feature-based Organization**: Group components by features rather than by type
        - **Shared Components**: Create a library of reusable components
        
        ### State Management
        
        For complex applications, proper state management is essential:
        
        1. **Local State**: Use useState for component-specific state
        2. **Context API**: For sharing state across component trees
        3. **External Libraries**: Redux, Zustand, or Jotai for complex state logic
        
        ## Performance Optimization
        
        ### Code Splitting
        Implement code splitting to reduce initial bundle size:
        
        \`\`\`javascript
        const LazyComponent = React.lazy(() => import('./LazyComponent'));
        \`\`\`
        
        ### Memoization
        Use React.memo, useMemo, and useCallback strategically to prevent unnecessary re-renders.
        
        ## Testing Strategy
        
        A robust testing strategy is vital for scalability:
        
        - **Unit Tests**: Test individual components and functions
        - **Integration Tests**: Test component interactions
        - **E2E Tests**: Test complete user workflows
        
        ## Conclusion
        
        Building scalable React applications is an iterative process that requires continuous refinement of architecture, performance optimization, and maintaining code quality.
      `
    },
    "3": {
      id: "3",
      title: "The Future of Web Development",
      date: "February 10, 2024",
      readTime: "10 min read",
      content: `
        The web development landscape is constantly evolving, and 2024 brings exciting new technologies and methodologies that will shape the future of how we build web applications.
        
        ## Emerging Technologies
        
        ### WebAssembly (WASM)
        WebAssembly is revolutionizing web performance by allowing near-native speed execution in browsers.
        
        ### Progressive Web Apps (PWAs)
        PWAs continue to bridge the gap between web and native applications, offering offline functionality and app-like experiences.
        
        ## Framework Evolution
        
        ### Meta-Frameworks
        The rise of meta-frameworks like Next.js, Nuxt.js, and SvelteKit shows the industry's move toward full-stack solutions.
        
        ### Server Components
        React Server Components are changing how we think about client-server boundaries.
        
        ## Development Practices
        
        ### Edge Computing
        Moving computation closer to users for better performance and reduced latency.
        
        ### Micro-frontends
        Breaking down large frontend applications into smaller, manageable pieces.
        
        ## Conclusion
        
        The future of web development is bright, with new technologies enabling better performance, developer experience, and user satisfaction.
      `
    }
  };

  const post = blogPostsData[id || ''];

    const handleBackToBlog = () => {
    navigate('/');
    // Wait a bit for navigation to complete, then scroll to blog section
    setTimeout(() => {
      const blogElement = document.getElementById('blog');
      if (blogElement) {
        blogElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!post) {
    return (
      <Container className="blog-post-container">
        <Typography variant="h4">Blog post not found</Typography>
        <Button 
          startIcon={<ArrowBackIcon />} 
          onClick={handleBackToBlog}
          className="back-button"
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Container className="blog-post-container">
      <Button 
        startIcon={<ArrowBackIcon />} 
        onClick={handleBackToBlog}
        className="back-button"
        sx={{ mb: 3 }}
      >
        Back to Blog
      </Button>
      
      <article className="blog-post-content">
        <header className="blog-post-header">
          <Typography variant="h3" component="h1" className="blog-post-title">
            {post.title}
          </Typography>
          <Box className="blog-post-meta">
            <Typography variant="body2" className="blog-post-date">
              {post.date}
            </Typography>
            <Typography variant="body2" className="blog-post-read-time">
              {post.readTime}
            </Typography>
          </Box>
        </header>
        
        <div 
          className="blog-post-body"
          dangerouslySetInnerHTML={{ 
            __html: post.content.replace(/\n/g, '<br/>').replace(/### /g, '<h3>').replace(/## /g, '<h2>').replace(/# /g, '<h1>') 
          }} 
        />
      </article>
    </Container>
  );
}

export default BlogPost; 