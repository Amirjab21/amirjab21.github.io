import React from "react";
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box } from '@mui/material';
import '../assets/styles/Blog.scss';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  url?: string;
  content: string;
}

function BlogList() {
  const navigate = useNavigate();

  const handleBlogClick = (post: BlogPost) => {
    if (post.url) {
      // Open external Medium link in new tab
      window.open(post.url, '_blank', 'noopener,noreferrer');
    } else {
      // Navigate to local blog post
      navigate(`/blog/${post.id}`);
    }
  };

  // Sample blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Alternative Guide To Iran",
      date: "December 28, 2023",
      excerpt: "Iran is a country full of surprises. It's a place that has pushed back against the tides of Americanisation that have devoured much of the world.",
      readTime: "8 min read",
      url: "https://amir-jabarivasal.medium.com/the-alternative-guide-to-iran-b9e20a528f40",
      content: ``
    },
    {
      id: "2",
      title: "AI Girlfriends — The Latest Chapter In The Loneliness Economy",
      date: "August 16, 2023",
      excerpt: "It's a typical rainy Summer Thursday evening in London, I've been single for nearly two years and haven't had much action on the dating apps...",
      readTime: "12 min read",
      url: "https://amir-jabarivasal.medium.com/ai-girlfriends-the-latest-chapter-in-the-loneliness-economy-931a5cf284d5",
      content: ``
    },
    {
      id: "3",
      title: "Morocco's Magic — Wisdom From an Ancient Civilisation",
      date: "April 25, 2023",
      excerpt: "Lessons from Morocco on Society, Community & inclusivity. A deep dive into the wisdom and insights from one of the world's most fascinating cultures.",
      readTime: "10 min read",
      url: "https://medium.com/globetrotters/what-morocco-can-teach-the-world-religion-alcohol-and-haggling-1977a8449078",
      content: ''
    },
    {
      id: "4",
      title: "The Solo Travellers Handbook",
      date: "March 27, 2023",
      excerpt: "Solo Travel Can Nourish The Soul — But There Are A few things You Should Know First. A comprehensive guide to making the most of your solo adventures.",
      readTime: "9 min read",
      url: "https://medium.com/digital-global-traveler/secrets-of-the-savvy-traveller-478d0106311b",
      content: ''
    },
    {
      id: "6",
      title: "How Housing Became A Key Tool In The Class War",
      date: "September 8, 2022",
      excerpt: "Housing has become a problem that is increasing inequality, encouraging exploitation and driving society apart. It's taking us back to a feudal system.",
      readTime: "11 min read",
      url: "https://medium.com/@amir-jabarivasal/how-the-rich-use-housing-to-exploit-the-poor-dc5da7b0d3a",
      content: ''
    },
    {
      id: "7",
      title: "How to talk to your grandma about blockchain",
      date: "February 16, 2021",
      excerpt: "A simple guide to explaining blockchain technology to anyone, regardless of their technical background. Making complex concepts accessible.",
      readTime: "6 min read",
      url: "https://medium.com/datadriveninvestor/how-to-talk-to-your-grandma-about-blockchain-db34e1541983",
      content: ``
    },
    {
      id: "8",
      title: "An algorithm to level them all — How universities have the power to eradicate elitism",
      date: "October 13, 2020",
      excerpt: "An algorithm that can make university admission much fairer. Exploring how technology can democratize higher education access.",
      readTime: "13 min read",
      url: "https://medium.com/@amir-jabarivasal/an-algorithm-to-level-them-all-how-universities-have-the-power-to-eradicate-elitism-6450ebdbfcef",
      content: ''
    },
    {
      id: "9",
      title: "I taught myself how to code, made an app and launched it, all in five months",
      date: "August 18, 2019",
      excerpt: "Bookey — Meet new people in your area through book swaps, available on iOS and Android. My journey from zero coding knowledge to launching a mobile app.",
      readTime: "5 min read",
      url: "https://medium.com/@amir-jabarivasal/i-taught-myself-how-to-code-made-an-app-and-launched-it-all-in-five-months-2064edb5574d",
      content: ''
    }
  ];

  return (
    <div className="blog-container" id="blog">
      <div className="items-container">
        <h1 className="text-3xl font-bold text-center mb-16">Blog</h1>
        <Box className="blog-posts-list">
          {blogPosts.map((post) => (
            <Card 
              key={post.id}
              className="blog-post-card"
              onClick={() => handleBlogClick(post)}
              sx={{ 
                cursor: 'pointer',
                marginBottom: 2,
                backgroundColor: 'transparent',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(128, 128, 128, 0.3)',
                '&:hover': {
                  backgroundColor: 'rgba(128, 128, 128, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" className="blog-post-title">
                  {post.title}
                </Typography>
                <Box className="blog-post-meta" sx={{ display: 'flex', gap: 1, flexDirection: 'row', }}>
                  <Typography variant="body2" className="blog-post-date mb-0">
                    {post.date}
                  </Typography>
                </Box>
                {/* <Typography variant="body1" className="blog-post-excerpt">
                  {post.excerpt}
                </Typography> */}
              </CardContent>
            </Card>
          ))}
        </Box>
      </div>
    </div>
  );
}

export default BlogList; 