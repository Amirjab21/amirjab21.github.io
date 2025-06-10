import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  const timelineEntries = [
    {
      date: "Jan 2025 - May 2025",
      title: "Machine Learning Engineer",
      location: "Machine Learning Institute, London",
      description: "Accepted to a machine learning residency program where I learned the foundations of deep learning. I built multiple neural networks from scratch, fine-tuned and distilled existing models and did a deep-dive into audio/evals and language modelling. ",
      contentStyle: { background: 'white', color: 'rgb(39, 40, 34)' },
      contentArrowStyle: { borderRight: '7px solid  white' }
    },
    {
      date: "2022 - 2025",
      title: "Chief Technical Officer",
      location: "Crowdmuse",
      description: "Founded a deep tech startup that used blockchain to bring transparency to fashion supply chains. Raised $200k in VC funding and another $200k in grants. Hired 5 engineers to build a platform and custom smart contracts for fashion designers. Fostered partnerships with industry giants such as Coinbase, Polygon and Optimism.",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2021 - 2022",
      title: "Blockchain Software Engineer",
      location: "Popcorn Network",
      description: "Popcorn was a decentralised finance protocol which aimed to create a bank which was controlled by it's depositors. Part of the initial team that raisd $2m in VC funding, built smart contracts and frontend. This is where I cut my teeth in web3 development",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2020-current",
      title: "Freelance Software Engineer",
      location: "London",
      description: "Began my freelancing journey in 2020 with a productivity startup called Just3Things, I built microservices for them using NodeJS and React. I did a contract with Lazy.com - an NFT gallery backed by Mark Cuban. I spent a year working with AppScore, a startup that automatically calculates your cloud expenditure and helps you optimise your infrastructure.",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2019-2020",
      title: "Self-learning how to build apps and building Bookey",
      location: "London",
      description: "After working as a data scientist, I felt an irrestible urge to build something myself. I'd always had an entrepreurial fire inside me but I felt held back by my inability to code. I stumbled upon a great idea for a book swapping app after making a Facebook post about swapping books. I became absolutely obsessed with this idea, decided to quit my job to learn how to build this app. I took courses on Udemy and built the first version of Bookey 6 months after I began my learning journey. The feedback I got from launch was tremendous, I got 1000 signups in the first weekend and I got accepted to UCL's accelerator program (The Hatchery). I attempted to turn this into a viable business and made many mistakes along the way. Lessons that I couldn't have learned any other way. Team dynamics, user research, software testing, marketing, UX, social media, conflict resolution. I learned so much in this period.",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2018 - 2019",
      title: "Data Scientist",
      location: "Kantar Worldpanel, London",
      description: "I analysed massive datasets for large corporations in the UK, helping them uncover insights about their customers. I built pricing strategies and forecasting tools for clients in the FMCG space. Built visualisations, used traditional ML models such as decision trees, XGBoost, linear and logistic regression as well as deep learning methods for clients that had larger datasets.",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2017 - 2018",
      title: "Policy Advisor, Civil Servant",
      location: "Department for Digital, Culture, Media & Sport",
      description: "My first job after graduation was a policy advisor role. I used my economics knowledge to build cost-benefit analysis for major telecoms investment projects. I utilised game theory to create strategies for engaging the UKs private telecoms providers, ensuring they have incentives to provide services to remote rural areas in the UK.",
      contentStyle: undefined,
      contentArrowStyle: undefined
    },
    {
      date: "2013 - 2017",
      title: "Economics degree",
      location: "University College London",
      description: `Coming to London for university was a game changer for me. I became deeply engaged in statistics, causal inference, behavioural economics, econometrics and economic policy.
      Outside of the classroom, I was the vice president for a social impact organisation called Enactus. I managed to set-up Enactus Consulting, a student-run consulting company that used our multidisciplinary skills to help startups create social impact.`,
      contentStyle: undefined,
      contentArrowStyle: undefined
    },

  ];

  return (
    <div id="history">
      <div className="items-container">
        <h1 className="text-3xl font-bold text-center mb-16">Career History</h1>
        <VerticalTimeline>
          {timelineEntries.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={entry.contentStyle}
              contentArrowStyle={entry.contentArrowStyle}
              date={entry.date}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{entry.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry.location}</h4>
              <p>{entry.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;