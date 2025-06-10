import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/Blog.scss';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  url?: string; // Optional URL for external links
}

function Blog() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null);
  // Blog posts from Amir Jabari's Medium profile
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Alternative Guide To Iran",
      date: "December 28, 2023",
      excerpt: "Iran is a country full of surprises. It's a place that has pushed back against the tides of Americanisation that have devoured much of the world.",
      readTime: "8 min read",
      url: "https://amir-jabarivasal.medium.com/the-alternative-guide-to-iran-dc8f1a9b4b5e",
      content: ``
    },
    {
      id: "2",
      title: "AI Girlfriends — The Latest Chapter In The Loneliness Economy",
      date: "August 16, 2023",
      excerpt: "It's a typical rainy Summer Thursday evening in London, I've been single for nearly two years and haven't had much action on the dating apps...",
      readTime: "12 min read",
      url: "https://medium.com/predict/ai-girlfriends-the-latest-chapter-in-the-loneliness-economy-4f4c8e2b1a3d",
      content: ``
    },
    {
      id: "3",
      title: "Morocco's Magic — Wisdom From an Ancient Civilisation",
      date: "April 25, 2023",
      excerpt: "Lessons from Morocco on Society, Community & inclusivity. A deep dive into the wisdom and insights from one of the world's most fascinating cultures.",
      readTime: "10 min read",
      url: "https://medium.com/globetrotters/moroccos-magic-wisdom-from-an-ancient-civilisation-4c8f1a9b2e5d",
      content: ''
    },
    {
      id: "4",
      title: "The Solo Travellers Handbook",
      date: "March 27, 2023",
      excerpt: "Solo Travel Can Nourish The Soul — But There Are A few things You Should Know First. A comprehensive guide to making the most of your solo adventures.",
      readTime: "9 min read",
      url: "https://medium.com/digital-global-traveler/the-solo-travellers-handbook-3f7e2c1d4a8b",
      content: ''
    },
    {
      id: "6",
      title: "How Housing Became A Key Tool In The Class War",
      date: "September 8, 2022",
      excerpt: "Housing has become a problem that is increasing inequality, encouraging exploitation and driving society apart. It's taking us back to a feudal system.",
      readTime: "11 min read",
      url: "https://amir-jabarivasal.medium.com/how-housing-became-a-key-tool-in-the-class-war-7b9e3f2c8d1a",
      content: ''
    },
    {
      id: "7",
      title: "How to talk to your grandma about blockchain",
      date: "February 16, 2021",
      excerpt: "A simple guide to explaining blockchain technology to anyone, regardless of their technical background. Making complex concepts accessible.",
      readTime: "6 min read",
      url: "https://medium.com/datadriveninvestor/how-to-talk-to-your-grandma-about-blockchain-cbd70b2d6d9a",
      content: ``
    },
    {
      id: "8",
      title: "An algorithm to level them all — How universities have the power to eradicate elitism",
      date: "October 13, 2020",
      excerpt: "An algorithm that can make university admission much fairer. Exploring how technology can democratize higher education access.",
      readTime: "13 min read",
      url: "https://amir-jabarivasal.medium.com/an-algorithm-to-level-them-all-how-universities-have-the-power-to-eradicate-elitism-6450ebdbfcef",
      content: ''
    },
    {
      id: "9",
      title: "I taught myself how to code, made an app and launched it, all in five months",
      date: "August 18, 2019",
      excerpt: "Bookey — Meet new people in your area through book swaps, available on iOS and Android. My journey from zero coding knowledge to launching a mobile app.",
      readTime: "5 min read",
      url: "https://amir-jabarivasal.medium.com/i-taught-myself-how-to-code-made-an-app-and-launched-it-all-in-five-months-2064edb5574d",
      content: ''
    }
  ];

  const handleBlogClick = (id: string) => {
    const post = blogPosts.find(p => p.id === id);
    if (post?.url) {
      // Open external Medium link in new tab
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      // Show content on this website
      setSelectedPost(id);
    }
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  const formatContent = (content: string) => {
    return content
      .replace(/\n\n/g, '</p><p>')
      .replace(/### (.*?)\n/g, '<h3>$1</h3>')
      .replace(/## (.*?)\n/g, '<h2>$1</h2>')
      .replace(/# (.*?)\n/g, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/- (.*?)\n/g, '<li>$1</li>')
      .replace(/(\d+)\. (.*?)\n/g, '<li>$2</li>');
  };

  // Show individual blog post if one is selected
  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost);
    if (!post) {
      return (
        <div className="blog-container" id="blog">
          <div className="items-container">
            <Typography variant="h4">Blog post not found</Typography>
            <Button 
              startIcon={<ArrowBackIcon />} 
              onClick={handleBackToList}
              className="back-button"
            >
              Back to Blog
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="blog-container" id="blog">
        <Container className="blog-post-container">
          <Button 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBackToList}
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
                __html: `<p>${formatContent(post.content)}</p>`
              }} 
            />
          </article>
        </Container>
      </div>
    );
  }

  // Show blog list
  return (
    <div className="blog-container" id="blog">
      <div className="items-container">
        <h1 className="blog-title">Blog</h1>
        <Box className="blog-posts-list">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="blog-post-card"
              onClick={() => handleBlogClick(post.id)}
              sx={{ 
                cursor: 'pointer',
                marginBottom: 2,
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" className="blog-post-title">
                  {post.title}
                </Typography>
                <Typography variant="body2" className="blog-post-date">
                  {post.date}
                </Typography>
                <Typography variant="body1" className="blog-post-excerpt">
                  {post.excerpt}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default Blog; 