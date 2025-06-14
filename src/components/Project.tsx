import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import thesis from "../assets/images/dissertation.png"
import mock10 from '../assets/images/accent-game.png';
import Crowdmuse from "../assets/images/Crowdmuse.png"
import mentalmap from "../assets/images/mental-map.png"
import phonemes from "../assets/images/phonemes.png"
import bookey from "../assets/images/bookey.png"
import threeJS from "../assets/images/threejs-playground.png"
import ImageCaptioner from "../assets/images/image-captioner.png"
import '../assets/styles/Project.scss';

interface ProjectData {
  title: string;
  description: string;
  image: string;
  link: string;
  backgroundColor: string;
}

function Project() {
    const projects: ProjectData[] = [
        {
            title: "Accent Game",
            description: "Designed my own neural network architecture combining CNNs, attention and fourier transforms to create a classifier for accents. Built a fun game where you learn to imitate other accents. Played by over 500 people. Looking for collaborators",
            image: mock10,
            link: "https://accentgame.xyz",
            backgroundColor: "bg-pink-100"
        },
        {
            title: "AI Language learning app",
            description: "Built an app using Machine Learning to help people improve their pronunciation of multiple languages. Adapted existing phoneme-based transcription models from Meta with forced alignment to give users fine-grained feedback on their pronunciation",
            image: phonemes,
            link: "https://accentgame.xyz/phoneme",
            backgroundColor: "bg-blue-100"
        },
        {
            title: "Crowdmuse",
            description: "Co-founder/CTO of a startup that uses blockchain to enable transparency of fashion supply chains. Raised VC money, built partnerships with Base, Polygon, Optimism and generated $50,000+ in sales using my own hand-written smart contracts",
            image: Crowdmuse,
            link: "http://www.crowdmuse.xyz",
            backgroundColor: "bg-pink-100"
        },
        {
            title: "Bookey",
            description: "Book swapping app that connects neighbours using book swaps",
            image: bookey,
            link: "https://www.bookey.xyz",
            backgroundColor: "bg-yellow-100"
        },
        {
            title: "ML-powered Image Captioner",
            description: "I built an encoder-decoder transformer based model that is able to do generate plausible captions for unseen images. I used a pre-trained vision transformer to obtain embeddings for images and then trained my own text encoder/decoder on a tiny image/caption dataset from Flickr. Image processing, adapting existing open source models and building multi-modal models were big take-aways. ",
            image: ImageCaptioner,
            link: "https://caption-generator-flickr.streamlit.app",
            backgroundColor: "bg-yellow-100"
        },
        {
            title: "Mental health dashboard",
            description: "Analysed NHS data and built an interactive dashboard that explores how mental health treatment is changing in the UK",
            image: mentalmap,
            link: "https://mental-map-new.vercel.app/",
            backgroundColor: "bg-green-100"
        },
        {
            title: "ThreeJS experiment personal website",
            description: "Built a 3D website using ThreeJS and Blender",
            image: threeJS,
            link: "https://amir-jabarivasal.vercel.app",
            backgroundColor: "bg-blue-100"
        },
        {
            title: "Public Health/Econometrics Research ",
            description: "What are the causal impacts of decriminalising drugs? A synthetic control study. I used a novel statistical method called synthetic control where I created a synthetic control to derive a causal impact from Czech Republic's 2014 decriminalisation of narcotics.",
            image: thesis,
            link: "https://drive.google.com/file/d/0B0Ow5Iomg8PgUk9kTTFuaWUyRGs/view?resourcekey=0-JalSUywjTA5BSguR8xU4kA",
            backgroundColor: "bg-blue-100"
        },
        
    ];

    return(
    <div className="projects-container" id="projects">
        <h1 className="text-3xl font-bold text-center mb-16">Personal Projects</h1>
        <div className="projects-grid">
            {projects.map((project, index) => (
                <div key={index} className="project">
                    <a href={project.link} target="_blank" rel="noreferrer">
                        <div className={`w-full ${project.backgroundColor} rounded-md p-4`} style={{aspectRatio: '85/56'}}>
                            <img src={project.image} className="zoom w-full h-full object-contain" alt="thumbnail"/>
                        </div>
                    </a>
                    <a href={project.link} target="_blank" rel="noreferrer"><h2 className="text-bold font-bold mb-2 mt-2">{project.title}</h2></a>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;