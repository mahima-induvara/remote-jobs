import React,{ useState, useRef } from 'react';
import { User, Calendar, MapPin, Mail, GraduationCap, BriefcaseBusiness, Medal, ClockFading, DollarSign , Languages, BookOpenText , CalendarCheck   } from "lucide-react";
import styles from '@styles/application.module.scss';

type Education = { id: number; institution: string; period: string; certification: string; notes: string; };
type Experience = { id: number; role: string; company: string; period: string; description: string; };
type Award = { id: number; title: string; year: string; issuer: string; };

type Props = { jobTitle: string; };

const ApplicationForm: React.FC<Props> = ({ jobTitle }) => {
  // Basic fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [ageRange, setAgeRange] = useState('');
  const [location, setLocation] = useState('');
  const [languages, setLanguages] = useState<string[]>([]);
  const [experienceLevel, setExperienceLevel] = useState('');
  const [educationLevels, setEducationLevels] = useState<string[]>([]);
  const [skills, setSkills] = useState('');
  // Dynamic sections
  const [educations, setEducations] = useState<Education[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [isVisibleEdu, setIsVisibleEdu] = useState(true);
  const [isVisibleExp, setIsVisibleExp] = useState(true);
  const [isVisibleAward, setIsVisibleAward] = useState(true);
  const [hideMethod, setHideMethod] = useState('display');

  const getElementStyle = (isVisible: boolean) => {
    if (isVisible) {
      return {};
    }

    switch (hideMethod) {
      case 'display':
        return { display: 'none' };
      case 'visibility':
        return { visibility: 'hidden' };
      case 'opacity':
        return { opacity: 0, transition: 'opacity 0.5s ease-in-out' };
      case 'height':
        return { maxHeight: '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' };
      default:
        return {};
    }
  };
  // Handlers for dynamic add/remove
  const addEducation = () => {
    setIsVisibleEdu(false);
    setEducations(prev => [...prev, { id: Date.now(), institution:'', period:'', certification:'', notes:'' }]);
  };
  const removeEducation = (id: number) => {
    setEducations(prev => prev.filter(e => e.id !== id));
    if (educations.length === 1) {
      setIsVisibleEdu(true);
    }
  };

  const addExperience = () => {
    setIsVisibleExp(false);
    setExperiences(prev => [...prev, { id: Date.now(), role:'', company:'', period:'', description:'' }]);
  };
  const removeExperience = (id: number) => {
    setExperiences(prev => prev.filter(e => e.id !== id));
    if (experiences.length === 1) {
      setIsVisibleExp(true);
    }
  };

  const addAward = () => {
    setIsVisibleAward(false);
    setAwards(prev => [...prev, { id: Date.now(), title:'', year:'', issuer:'' }]);
  };
  const removeAward = (id: number) => {
    setAwards(prev => prev.filter(a => a.id !== id));
    if (awards.length === 1) {
      setIsVisibleAward(true);
    }
  };

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Collect and send data
    const data = {
      name,
      email,
      ageRange,
      location,
      languages,
      experienceLevel,
      educationLevels,
      skills,
      //resumeText: editorState.getCurrentContent().getPlainText(),
      educations,
      experiences,
      awards,
    };
    console.log('Submitting application:', data);
    // TODO: integrate submission logic
  };

  return (
    <form className={`max-w-7xl mx-auto px-4 ${styles.application_form}`} onSubmit={handleSubmit}>
      <h2>Submit your resume below to apply for the job "{jobTitle}"</h2>

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={styles.field}>
          <label htmlFor="name">
            <User size={16} className={styles.label_icon} />
            Your name<span className={styles.req}>*</span>
          </label>
          <input id="name" type="text" required placeholder="Mahima Induvira" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">
            <Mail size={16} className={styles.label_icon} />
            Your email<span className={styles.req}>*</span>
          </label>
          <input id="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className={styles.field}>
          <label htmlFor="salary">
            <DollarSign  size={16} className={styles.label_icon} />
            Candidate Current Salary<span className={styles.req}>*</span>
          </label>
          <input id="salary" type="number" required placeholder="50000" />
        </div>
        <div className={styles.field}>
          <label htmlFor="age">
          <CalendarCheck size={16} className={styles.label_icon} />
            Candidate Age<span className={styles.req}>*</span>
          </label>
          <select id="age" required>
             <option value="">Choose an age...</option>
            <option>18-22 Years</option>
            <option>23-28 Years</option>
            <option>29-33 Years</option>
            <option>34-40 Years</option>
            <option>41-45 Years</option>
            <option>46-50 Years</option>
            <option>Above 50 Years</option>
            {/* … */}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="location">
            <MapPin size={16} className={styles.label_icon} />
            Location<span className={styles.req}>*</span>
          </label>
          <select id="location" required>
            <option value="">Select a location...</option>
            <option>Colombo</option>
            <option>Gampaha</option>
            <option>Kalutara</option>
            <option>Nuwara Eliya</option>
            <option>Matale</option>
            <option>Hambantota</option>
            <option>Kandy</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="language">
            <Languages size={16} className={styles.label_icon} />
            Candidate Language<span className={styles.req}>*</span>
          </label>
          <select value={languages} onChange={e=>{
            const opts = Array.from(e.target.selectedOptions).map(o=>o.value); setLanguages(opts);
          }} required>
            <option>Sinhala</option>
            <option>Tamil</option>
            <option>English</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="experience">
            <ClockFading size={16} className={styles.label_icon} />
            Candidate Experience<span className={styles.req}>*</span>
          </label>
          <select value={experienceLevel} onChange={e=>setExperienceLevel(e.target.value)} required>
            <option value="">Choose an experience...</option>
            <option>0-1 Year</option>
            <option>1-3 Years</option>
            <option>3-5 Years</option>
            <option>6-9 Years</option>
            <option>Over 10 Years</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="education">
            <BookOpenText size={16} className={styles.label_icon} />
            Candidate Education Level<span className={styles.req}>*</span>
          </label>
          <select value={educationLevels} onChange={e=>{
            const opts = Array.from(e.target.selectedOptions).map(o=>o.value); setEducationLevels(opts);
          }} required>
            <option>Bachelor's Degree</option>
            <option>Diploma / HND / CIMA / ACCA</option>
            <option>Ordinary Level</option>
            <option>MSc (Postgraduate)</option>
          </select>
        </div>
        <div className={`md:col-span-2 ${styles.field}`}>
          <label>Skills (optional)</label>
          <input type="text" value={skills} onChange={e=>setSkills(e.target.value)} placeholder="Comma separated, max 6" />
        </div>

        {/* Rich Text Editor */}
        <div className="md:col-span-2">
          <label>Resume Content<span>*</span></label>
            <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Type your message..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-y
                       text-gray-900 placeholder-gray-500
                       sm:text-base"
            ></textarea>
        </div>
      </div>

      {/* Dynamic sections */}

      <div className={styles.dynamic_section}>
        <div className={styles.card_header}>
            <h3>Education</h3>
            <button type="button" onClick={addEducation} className={styles.add_btn}>+ Add Education</button>
        </div>
        <div className={styles.card_placeholder} style={getElementStyle(isVisibleEdu)}>
          <GraduationCap size={75} color='#6b7280' />
          <p className="text-gray-500 text-sm">Add your educational background, including institutions, periods, certifications, and any additional notes.</p>
        </div>
        {educations.map((ed, i) => (
          <div key={ed.id} className={styles.dynamic_card}>
            <h4>Education {i+1} <button type="button" onClick={()=>removeEducation(ed.id)  } className={`${styles.add_btn} ml-4`}>Remove</button></h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={styles.field}><label>Institution</label><input value={ed.institution} onChange={e=>{
                const val=e.target.value; setEducations(prev=>prev.map(x=>x.id===ed.id?{...x,institution:val}:x));
              }} placeholder="University name"/></div>
              <div className={styles.field}><label>Start/End Date</label><input value={ed.period} onChange={e=>{
                const val=e.target.value; setEducations(prev=>prev.map(x=>x.id===ed.id?{...x,period:val}:x));
              }} placeholder="e.g. 2018 - 2022"/></div>
              <div className={styles.field}><label>Certification(s)</label><input value={ed.certification} onChange={e=>{
                const val=e.target.value; setEducations(prev=>prev.map(x=>x.id===ed.id?{...x,certification:val}:x));
              }} placeholder="Degree, certifications, etc."/></div>
              <div className="md:col-span-2"><label>Notes (optional)</label><textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-y
                       text-gray-900 placeholder-gray-500
                       sm:text-base" value={ed.notes} onChange={e=>{
                const val=e.target.value; setEducations(prev=>prev.map(x=>x.id===ed.id?{...x,notes:val}:x));
              }} placeholder="Additional notes..."/></div>
            </div>
          </div>
        ))}
      </div>

      {/* Similar blocks for Experience and Awards */}
      <div className={styles.dynamic_section}>
        <div className={styles.card_header}>
            <h3>Experience</h3>
            <button type="button" onClick={addExperience} className={styles.add_btn}>+ Add Experience</button>
        </div>
        <div className={styles.card_placeholder} style={getElementStyle(isVisibleExp)}>
          <BriefcaseBusiness size={75} color='#6b7280' />
          <p className="text-gray-500 text-sm">Add your work experience, including roles, companies, periods, and descriptions.</p>
        </div>
        {experiences.map((exp, i) => (
          <div key={exp.id} className={styles.dynamic_card}>
            <h4>Experience {i+1} <button type="button" className={`${styles.add_btn} ml-4`} onClick={()=>removeExperience(exp.id)}>Remove</button></h4>
            {/* fields: role, company, period, description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={styles.field}><label>Role</label><input value={exp.role} onChange={e=>{
                const val=e.target.value; setExperiences(prev=>prev.map(x=>x.id===exp.id?{...x,role:val}:x));
              }} placeholder="Job title"/></div>
              <div className={styles.field}><label>Company</label><input value={exp.company} onChange={e=>{
                const val=e.target.value; setExperiences(prev=>prev.map(x=>x.id===exp.id?{...x,company:val}:x));
              }} placeholder="Company name"/></div>
              <div className={styles.field}><label>Period</label><input value={exp.period} onChange={e=>{
                const val=e.target.value; setExperiences(prev=>prev.map(x=>x.id===exp.id?{...x,period:val}:x));
              }} placeholder="e.g. Jan 2020 - Dec 2022"/></div>
              <div className="md:col-span-2"><label>Description</label><textarea className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ease-in-out resize-y
                       text-gray-900 placeholder-gray-500
                       sm:text-base" value={exp.description} onChange={e=>{
                const val=e.target.value; setExperiences(prev=>prev.map(x=>x.id===exp.id?{...x,description:val}:x));
              }} placeholder="Describe your responsibilities..."/></div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.dynamic_section}>
        <div className={styles.card_header}>
            <h3>Awards</h3>
            <button type="button" onClick={addAward} className={`${styles.add_btn} ml-4`}>+ Add Awards</button>
        </div>
        <div className={styles.card_placeholder} style={getElementStyle(isVisibleAward)}>
          <Medal size={75} color='#6b7280' />
          <p className="text-gray-500 text-sm">Add your awards and recognitions, including titles, years, and issuing organizations.</p>
        </div>
        {awards.map((aw, i) => (
          <div key={aw.id} className={styles.dynamic_card}>
            <h4>Award {i+1} <button type="button" onClick={()=>removeAward(aw.id)}>Remove</button></h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={styles.field}><label>Title</label><input value={aw.title} onChange={e=>{
                const val=e.target.value; setAwards(prev=>prev.map(x=>x.id===aw.id?{...x,title:val}:x));
              }} placeholder="Award name"/></div>
              <div className={styles.field}><label>Year</label><input value={aw.year} onChange={e=>{
                const val=e.target.value; setAwards(prev=>prev.map(x=>x.id===aw.id?{...x,year:val}:x));
              }} placeholder="e.g. 2023"/></div>
              <div className={styles.field}><label>Issuer</label><input value={aw.issuer} onChange={e=>{
                const val=e.target.value; setAwards(prev=>prev.map(x=>x.id===aw.id?{...x,issuer:val}:x));
              }} placeholder="Organization"/></div>
            </div>
          </div>
        ))}
      </div>

      <button type="submit" className={styles.btn_submit}>Preview →</button>
    </form>
  );
};

export default ApplicationForm;
