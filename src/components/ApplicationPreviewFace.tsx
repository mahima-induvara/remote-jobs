import React from 'react';
import ApplicationPreview from '@components/ApplicationPreview';
import type { ApplicationData } from '@components/ApplicationPreview';

// Dummy data for preview
const demoData: ApplicationData = {
  name: "Mahima Induvira",
  email: "mahima.levein@gmail.com",
  ageRange: "23-28 Years",
  gender: "Female",
  location: "Colombo",
  languages: ["English", "Sinhala"],
  experienceLevel: "3-5 Years",
  currentSalary: "LKR 200,000",
  educationLevels: ["Bachelor's Degree", "MSc (Postgraduate)"],
  skills: "React, Node.js, SQL",
  resumeText: `Driven software engineer with 5 years of experience in web development,
specializing in React and Node.js. Passionate about building performant,
accessible applications and collaborating with cross-functional teams.`,
  pythonExperience: "Yes, 4 years",
  sqlExperience: "Yes, 5 years",
  netSalary: "250000",
  employed: true,
  noticePeriod: "1 month",
  availability: "Immediate",
  primaryReason: "Career Growth",
  foundVia: "LinkedIn",
  referredBy: "John Doe",
  linkedIn: "https://linkedin.com/in/mahima",
  github: "https://github.com/mahima",
  facebook: "https://facebook.com/mahima",
  twitter: "https://twitter.com/mahima",
  instagram: "https://instagram.com/mahima",
  educations: [
    {
      institution: "University of Colombo",
      period: "2014 - 2018",
      certification: "BSc Computer Science",
      notes: "First Class Honours",
    },
  ],
  experiences: [
    {
      role: "Software Engineer",
      company: "TechCorp Ltd.",
      period: "2018 - 2021",
      description:
        "Led front-end team to rebuild key customer-facing dashboards using React and TypeScript.",
    },
  ],
  awards: [
    {
      title: "Employee of the Year",
      year: "2020",
      issuer: "TechCorp Ltd.",
    },
  ],
  urls: ["https://portfolio.mahima.dev"],
};

export default function ApplicationPreviewDemo() {
  return <ApplicationPreview data={demoData} />;
}
