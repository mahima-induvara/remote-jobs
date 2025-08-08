import React from "react";
import "@styles/postjobs.module.scss";
import { useState, useRef } from "react";
export default function PostJobForm() {

  const jobTitle = useRef<HTMLInputElement>(null);
  const jobLocation = useRef<HTMLInputElement>(null);
  const jobType = useRef<HTMLSelectElement>(null);
  const jobSalary = useRef<HTMLInputElement>(null);
  const jobLevel = useRef<HTMLInputElement>(null);
  const jobExperience = useRef<HTMLInputElement>(null);
  const jobDescription = useRef<HTMLTextAreaElement>(null);
  const jobTags = useRef<HTMLInputElement>(null);
  const jobGender = useRef<HTMLSelectElement>(null);
  const closingDate = useRef<HTMLInputElement>(null);
  const applicationEmail = useRef<HTMLInputElement>(null);
  const companyName = useRef<HTMLInputElement>(null);
  const companyTagline = useRef<HTMLInputElement>(null);
  const companyLocation = useRef<HTMLInputElement>(null);
  const companyMobile = useRef<HTMLInputElement>(null);
  const companyWebsite = useRef<HTMLInputElement>(null);
  const companyLogo = useRef<HTMLInputElement>(null);
  const companyCategory = useRef<HTMLSelectElement>(null);
  const companyTeamSize = useRef<HTMLSelectElement>(null);
  const companyLinkedIn = useRef<HTMLInputElement>(null);
  const companyTwitter = useRef<HTMLInputElement>(null);
  const jobIndustry = useRef<HTMLInputElement>(null);
  const jobQualification = useRef<HTMLInputElement>(null);
  const companyDescription = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobLocation: '',
    jobType: '',
    jobSalary: '',
    jobLevel: '',
    jobExperience: '',
    jobDescription: '',
    jobTags: '',
    jobGender: '',
    closingDate: '',
    applicationEmail: '',
    companyName: '',
    companyTagline: '',
    companyLocation: '',
    companyMobile: '',
    companyWebsite: '',
    companyLogo: null,
    companyCategory: '',
    companyTeamSize: '',
    companyLinkedIn: '',
    companyTwitter: '',
    companyDescription: '',
    jobIndustry: '',
    jobQualification: ''
  });

//  const handleJobSubmit = () => {
//     setFormData({
//       ...formData,
//       jobTitle: jobTitle.current?.value || "",
//       jobLocation: jobLocation.current?.value || "",
//       jobType: jobType.current?.value || "",
//       jobSalary: jobSalary.current?.value || "",
//       jobLevel: jobLevel.current?.value || "",
//       jobExperience: jobExperience.current?.value || "",
//       jobDescription: jobDescription.current?.value || "",
//       jobTags: jobTags.current?.value || "",
//       jobGender: jobGender.current?.value || "",
//     });
//   };

  return (
    <section className="max-w-7xl mx-auto px-4 mt-[80px] py-16">

        <div className="mb-6 p-4 bg-blue-100 rounded">
          You are currently signed in as <strong>mahima.levein</strong>.
        </div>

      <form className="space-y-6">
        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block mb-1 font-semibold">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            className="w-full border border-gray-300 rounded px-3 py-2"
            ref={jobTitle}
            onChange={() => setFormData({ ...formData, jobTitle: jobTitle.current?.value || "" })}
          />
        </div>

        {/* Location, Job type, Salary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="location" className="block mb-1 font-semibold">
              Location <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="location"
              placeholder='e.g. "London"'
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobLocation}
              onChange={() => setFormData({ ...formData, jobLocation: jobLocation.current?.value || "" })}
            />
            <p className="text-xs text-gray-400 mt-1">
              Leave this blank if the location is not important
            </p>
          </div>

          <div>
            <label htmlFor="jobType" className="block mb-1 font-semibold">
              Job type
            </label>
            <select
              id="jobType"
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue="contract-full"
              ref={jobType}
              onChange={() => setFormData({ ...formData, jobType: jobType.current?.value || "" })}
            >
              <option value="">Select job type</option>
              <option value="contract-full">Contract – Full time</option>
              <option value="part-time">Part time</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div>
            <label htmlFor="jobSalary" className="block mb-1 font-semibold">
              Job Salary <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="jobSalary"
              placeholder="Choose a salary..."
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobSalary}
              onChange={() => setFormData({ ...formData, jobSalary: jobSalary.current?.value || "" })}
            />
          </div>
        </div>

        {/* Career level, Experience, Gender */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="careerLevel" className="block mb-1 font-semibold">
              Job Career Level <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="careerLevel"
              placeholder="Choose a career level..."
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobLevel}
              onChange={() => setFormData({ ...formData, jobLevel: jobLevel.current?.value || "" })}
            />
          </div>

          <div>
            <label htmlFor="experience" className="block mb-1 font-semibold">
              Job Experience <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="experience"
              placeholder="Choose a job experience..."
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobExperience}
              onChange={() => setFormData({ ...formData, jobExperience: jobExperience.current?.value || "" })}
            />
          </div>

          <div>
            <label htmlFor="gender" className="block mb-1 font-semibold">
              Job Gender <span className="text-gray-400">(optional)</span>
            </label>
            <select
              id="jobGender"
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue="contract-full"
              ref={jobGender}
              onChange={() => setFormData({ ...formData, jobGender: jobGender.current?.value || "" })}
            >
              <option value="">Choose a Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        {/* Industry, Qualification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="industry" className="block mb-1 font-semibold">
              Job Industry <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="industry"
              placeholder="Choose a job industry..."
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobIndustry}
              onChange={() => setFormData({ ...formData, jobIndustry: jobIndustry.current?.value || "" })}
            />
          </div>

          <div>
            <label htmlFor="qualification" className="block mb-1 font-semibold">
              Job Qualification <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="qualification"
              placeholder="Choose a job qualification..."
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={jobQualification}
              onChange={() => setFormData({ ...formData, jobQualification: jobQualification.current?.value || "" })}
            />
          </div>
        </div>

        {/* Job Tags */}
        <div>
          <label htmlFor="jobTags" className="block mb-1 font-semibold">
            Job tags <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            id="jobTags"
            placeholder="e.g. PHP, Social Media, Management"
            className="w-full border border-gray-300 rounded px-3 py-2"
            ref={jobTags}
            onChange={() => setFormData({ ...formData, jobTags: jobTags.current?.value || "" })}
          />
          <p className="text-xs text-gray-400 mt-1">
            Comma separate tags, such as required skills or technologies, for this job.
          </p>
        </div>

        {/* Expect job type */}
        <div>
          <label htmlFor="expectJobType" className="block mb-1 font-semibold">
            Enter Expect job type
          </label>
          <input
            type="text"
            id="expectJobType"
            placeholder="Choose a category..."
            className="w-full border border-gray-300 rounded px-3 py-2"
            //ref={jobType}
            //onChange={() => setFormData({ ...formData, jobType: jobType.current?.value || "" })}
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 font-semibold">
            Description
          </label>
          <textarea
            id="description"
            rows="6"
            className="w-full border border-gray-300 rounded px-3 py-2 resize-y"
          ></textarea>
        </div>

        {/* Closing Date */}
        <div>
          <label htmlFor="closingDate" className="block mb-1 font-semibold">
            Closing date <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="date"
            id="closingDate"
            className="w-full border border-gray-300 rounded px-3 py-2"
            ref={closingDate}
            onChange={() => setFormData({ ...formData, closingDate: closingDate.current?.value || "" })}
          />
          <p className="text-xs text-gray-400 mt-1">Deadline for new applicants.</p>
        </div>

        {/* Application Email/URL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <label htmlFor="applicationEmail" className="block mb-1 font-semibold">
                Application email/URL
            </label>
            <input
                type="email"
                id="applicationEmail"
                defaultValue="mahima.levein@gmail.com"
                className="w-full border border-gray-300 rounded px-3 py-2"
                ref={applicationEmail}
                onChange={() => setFormData({ ...formData, applicationEmail: applicationEmail.current?.value || "" })}
            />
            </div>

            {/* Salary */}
            <div>
            <label htmlFor="salary" className="block mb-1 font-semibold">
                Salary <span className="text-gray-400">(optional)</span>
            </label>
            <input
                type="number"
                id="salary"
                placeholder="e.g. 20000"
                className="w-full border border-gray-300 rounded px-3 py-2"
                ref={jobSalary}
                onChange={() => setFormData({ ...formData, jobSalary: jobSalary.current?.value || "" })}
            />
            </div>
        </div>

        {/* Company Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="companyName" className="block mb-1 font-semibold">
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyName}
              onChange={() => setFormData({ ...formData, companyName: companyName.current?.value || "" })}
            />
          </div>
          <div>
            <label htmlFor="companyTagline" className="block mb-1 font-semibold">
              Company Tagline <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="text"
              id="companyTagline"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyTagline}
              onChange={() => setFormData({ ...formData, companyTagline: companyTagline.current?.value || "" })}
            />
          </div>
          <div>
            <label htmlFor="companyLocation" className="block mb-1 font-semibold">
              Company Location
            </label>
            <input
              type="text"
              id="companyLocation"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyLocation}
              onChange={() => setFormData({ ...formData, companyLocation: companyLocation.current?.value || "" })}
            />
          </div>
        </div>

        {/* Company Mobile, Website */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="companyMobile" className="block mb-1 font-semibold">
              Company Mobile
            </label>
            <input
              type="tel"
              id="companyMobile"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyMobile}
              onChange={() => setFormData({ ...formData, companyMobile: companyMobile.current?.value || "" })}
            />
          </div>
          <div>
            <label htmlFor="companyWebsite" className="block mb-1 font-semibold">
              Company Website <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              id="companyWebsite"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyWebsite}
              onChange={() => setFormData({ ...formData, companyWebsite: companyWebsite.current?.value || "" })}
            />
          </div>
        </div>

        {/* Company Logo */}
        <div>
          <label htmlFor="companyLogo" className="block mb-1 font-semibold">
            Company Logo <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="file"
            id="companyLogo"
            className="w-full"
            accept="image/*"
            ref={companyLogo}
            //onChange={() => setFormData({ ...formData, companyLogo: companyLogo.current?.files[0] || null })}
          />
          <p className="text-xs text-gray-400 mt-1">Maximum file size: 2 MB.</p>
        </div>

        {/* Company Category, Team Size, LinkedIn */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="companyCategory" className="block mb-1 font-semibold">
              Select Your Company Category
            </label>
            <select
              id="companyCategory"
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue=""
              ref={companyCategory}
              onChange={() => setFormData({ ...formData, companyCategory: companyCategory.current?.value || "" })}
            >
              <option value="">Choose an option...</option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="healthcare">Healthcare</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label htmlFor="companyTeamSize" className="block mb-1 font-semibold">
              Company Team Size
            </label>
            <select
              id="companyTeamSize"
              className="w-full border border-gray-300 rounded px-3 py-2"
              defaultValue=""
              value={formData.companyTeamSize}
              ref={companyTeamSize}
              onChange={() => setFormData({ ...formData, companyTeamSize: companyTeamSize.current?.value || "" })}
            >
              <option value="">Choose an option...</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </div>

          <div>
            <label htmlFor="companyLinkedIn" className="block mb-1 font-semibold">
              Company LinkedIn <span className="text-gray-400">(optional)</span>
            </label>
            <input
              type="url"
              id="companyLinkedIn"
              className="w-full border border-gray-300 rounded px-3 py-2"
              ref={companyLinkedIn}
              onChange={() => setFormData({ ...formData, companyLinkedIn: companyLinkedIn.current?.value || "" })}
            />
          </div>
        </div>

        {/* Company Twitter */}
        <div>
          <label htmlFor="companyTwitter" className="block mb-1 font-semibold">
            Company Twitter <span className="text-gray-400">(optional)</span>
          </label>
          <input
            type="text"
            id="companyTwitter"
            className="w-full border border-gray-300 rounded px-3 py-2"
            ref={companyTwitter}
            onChange={() => setFormData({ ...formData, companyTwitter: companyTwitter.current?.value || "" })}
          />
        </div>

        {/* Company Description */}
        <div>
          <label htmlFor="companyDescription" className="block mb-1 font-semibold">
            Company Description
          </label>
          <textarea
            id="companyDescription"
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 resize-y"
            ref={companyDescription}
            onChange={() => setFormData({ ...formData, companyDescription: companyDescription.current?.value || "" })}
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            className="px-6 py-2 border border-[#e81b39] text-[#e81b39] rounded hover:bg-[#fce4e4] transition"
          >
            Preview
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#e81b39] text-white rounded hover:bg-[#c72a3b]-600 transition"
          >
            Save Draft
          </button>
        </div>
      </form>
    </section>
  );
}
