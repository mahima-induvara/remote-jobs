import React from 'react';
import styles from '@styles/application-preview.module.scss';
import { BadgeCheck, School, BriefcaseBusiness, Trophy } from 'lucide-react';
export interface Education {
  institution: string;
  period: string;
  certification: string;
  notes: string;
}
export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
export interface Award {
  title: string;
  year: string;
  issuer: string;
}

export interface ApplicationData {
  name: string;
  email: string;
  ageRange: string;
  gender: string;
  location: string;
  languages: string[];
  experienceLevel: string;
  currentSalary: string;
  educationLevels: string[];
  skills: string;
  resumeText: string;
  pythonExperience: string;
  sqlExperience: string;
  netSalary: string;
  employed: boolean;
  noticePeriod: string;
  availability: string;
  primaryReason: string;
  foundVia: string;
  referredBy: string;
  linkedIn: string;
  github: string;
  facebook: string;
  twitter: string;
  instagram: string;
  educations: Education[];
  experiences: Experience[];
  awards: Award[];
  urls: string[];
}

const ApplicationPreview: React.FC<{ data: ApplicationData }> = ({ data }) => (

<section className={`max-w-7xl mx-auto px-4 py-16 mt-[80px] ${styles.application_preview}`}>

  <header className={styles.application_preview__header}>
    {/* <button className={styles.btn__header}>← Edit resume</button> */}
    <h1 className={styles.btn__header__title}>Preview</h1>
    <button className={styles.btn__header}>Submit Resume →</button>

    <div className={styles.application_preview__meta}>
      <div className={styles.meta_item}>

        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 0C5.243 0 3 2.243 3 5c0 3.75 5 11 5 11s5-7.25 5-11c0-2.757-2.243-5-5-5zm0 7a2 2 0 110-4 2 2 0 010 4z" fill="currentColor"/></svg>
        <span>{data.location}</span>
      </div>
      <div className={styles.meta_item}>

        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm.5 7.707V4.5a.5.5 0 10-1 0v4.207l3.646 2.182a.5.5 0 10.5-.866L8.5 8.707z" fill="currentColor"/></svg>
        <span>Member Since 2025</span>
      </div>
    </div>
  </header>

  <div className={styles.application_preview__profile}>
    <div className={styles.avatar}>
      <img src="https://img.icons8.com/?size=100&id=108652&format=png&color=000000" alt="Profile" />
    </div>

    <div className={styles.profile_info}>
      <div className={styles.social_links}>
        <a href="#" className={`${styles.social_link} ${styles.social_link__twitter}`} aria-label="Twitter"></a>
        <a href="#" className={`${styles.social_link} ${styles.social_link__facebook}`} aria-label="Facebook"></a>
        <a href="#" className={`${styles.social_link} ${styles.social_link__linkedin}`} aria-label="LinkedIn"></a>
        <a href="#" className={`${styles.social_link} ${styles.social_link__instagram}`} aria-label="Instagram"></a>
        <a href="#" className={`${styles.social_link} ${styles.social_link__github}`} aria-label="GitHub"></a>
      </div>

      <h2 className={styles.profile_name}>{data.name}</h2>
      <p className={styles.profile_email}>{data.email}</p>
        <a href="/application"><button className={styles.btn__download}>← Edit resume</button></a>
    </div>
  </div>

  <nav className={`mb-8 ${styles.application_preview__tabs}`}>
    <ul>
      <li><span>Current Status:</span> {data.employed ? 'Employed' : 'Unemployed'}</li>
      <li><span>Notice Period:</span> {data.noticePeriod}</li>
      <li><span>Availability:</span> {data.availability}</li>
      <li><span>Found Via:</span> {data.foundVia}</li>
    </ul>
  </nav>

  <div className={styles.application_preview__content}>
    <div className={styles.content_left}>
      <section className={styles.section}>
        <h3>Candidates About</h3>
        <p>{data.resumeText}</p>
      </section>

      <section className={styles.section}>
         <h3>Candidates Education</h3>
        <div className={styles.item}>
            <School  />
               {data.educations.length > 0 && (
                <div className={styles.item}>
                    {data.educations.map((ed,i) => (
                    <div key={i} className={styles.card}>
                        <h4>{ed.institution} ({ed.period})</h4>
                        <p><strong>Certifications:</strong> {ed.certification}</p>
                        {ed.notes && <p><strong>Notes:</strong> {ed.notes}</p>}
                    </div>
                    ))}
            </div>
        )}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Candidates Experience</h3>
        <div className={styles.item}>
          <BriefcaseBusiness />
            {data.experiences.length > 0 && (
                <div className={styles.item}>
                    {data.experiences.map((ex,i) => (
                    <div key={i} className={styles.card}>
                        <h4>{ex.role} at {ex.company} ({ex.period})</h4>
                        <p>{ex.description}</p>
                    </div>
                    ))}
            </div>
        )}
        </div>
      </section>

      <section className={styles.section}>
        <h3>Candidates Awards</h3>
        <div className={styles.item}>
          <Trophy />
         {data.awards.map((aw,i) => (
            <div key={i} className={styles.card}>
              <h4>{aw.title} ({aw.year})</h4>
              <p><strong>Issuer:</strong> {aw.issuer}</p>
            </div>
        ))}
        </div>
      </section>
    </div>

    <aside className={styles.content_right}>
      <div className={styles.overview_card}>
        <h3>Candidate Overview</h3>
        <ul>
          <li>
            <BadgeCheck  />
            <div>
              <strong>Experience</strong>
              <span>{data.experienceLevel}</span>
            </div>
          </li>
          <li>
            <BadgeCheck  />
            <div><strong>Age</strong><span>{data.ageRange}</span></div>
          </li>
          <li>
            <BadgeCheck  />
            <div><strong>Current Salary</strong><span>{data.currentSalary}</span></div>
          </li>
          <li>
            <BadgeCheck  />
            <div><strong>Gender</strong><span>{data.gender}</span></div>
          </li>
          <li>
            <BadgeCheck  />
            <div><strong>Language</strong><span>{data.languages.join(', ')}</span></div>
          </li>
          <li>
            <BadgeCheck  />
            <div><strong>Education Level</strong><span>{data.educationLevels.join(', ')}</span></div>
          </li>
        </ul>
      </div>
    </aside>
  </div>
</section>
//   <div classNameName={styles.preview_container}>
//     <h1 classNameName={styles.preview_title}>Application Preview</h1>

//     {/* Basic Info */}
//     <section classNameName={styles.section}>
//       <h2>Personal Information</h2>
//       <div classNameName={styles.field_row}>
//         <div><strong>Name:</strong> {data.name}</div>
//         <div><strong>Email:</strong> {data.email}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Age Range:</strong> {data.ageRange}</div>
//         <div><strong>Gender:</strong> {data.gender}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Location:</strong> {data.location}</div>
//         <div><strong>Languages:</strong> {data.languages.join(', ')}</div>
//       </div>
//     </section>

//     {/* Professional Info */}
//     <section classNameName={styles.section}>
//       <h2>Professional Details</h2>
//       <div classNameName={styles.field_row}>
//         <div><strong>Experience Level:</strong> {data.experienceLevel}</div>
//         <div><strong>Current Salary:</strong> {data.currentSalary}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Education Levels:</strong> {data.educationLevels.join(', ')}</div>
//         <div><strong>Skills:</strong> {data.skills}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Python/R/Julia Exp:</strong> {data.pythonExperience}</div>
//         <div><strong>SQL Exp:</strong> {data.sqlExperience}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Net Salary (LKR/month):</strong> {data.netSalary}</div>
//         <div><strong>Currently Employed:</strong> {data.employed ? 'Yes' : 'No'}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Notice Period:</strong> {data.noticePeriod}</div>
//         <div><strong>Availability:</strong> {data.availability}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Primary Reason:</strong> {data.primaryReason}</div>
//         <div><strong>Found Via:</strong> {data.foundVia}</div>
//       </div>
//     </section>

//     {/* Social & References */}
//     <section classNameName={styles.section}>
//       <h2>References & Links</h2>
//       <div classNameName={styles.field_row}>
//         <div><strong>Referred By:</strong> {data.referredBy}</div>
//         <div><strong>LinkedIn:</strong> {data.linkedIn}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>GitHub:</strong> {data.github}</div>
//         <div><strong>Facebook:</strong> {data.facebook}</div>
//       </div>
//       <div classNameName={styles.field_row}>
//         <div><strong>Twitter:</strong> {data.twitter}</div>
//         <div><strong>Instagram:</strong> {data.instagram}</div>
//       </div>
//       {data.urls.length > 0 && (
//         <div classNameName={styles.field_row}>
//           <div><strong>Other URLs:</strong> {data.urls.join(', ')}</div>
//         </div>
//       )}
//     </section>

//     {/* Resume Content */}
//     <section classNameName={styles.section}>
//       <h2>Resume Content</h2>
//       <div classNameName={styles.resume_text}>{data.resumeText}</div>
//     </section>

//     {/* Dynamic Sections */}
//     {data.educations.length > 0 && (
//       <section classNameName={styles.section}>
//         <h2>Education</h2>
//         {data.educations.map((ed,i) => (
//           <div key={i} classNameName={styles.card}>
//             <h3>{ed.institution} ({ed.period})</h3>
//             <p><strong>Certifications:</strong> {ed.certification}</p>
//             {ed.notes && <p><strong>Notes:</strong> {ed.notes}</p>}
//           </div>
//         ))}
//       </section>
//     )}

//     {data.experiences.length > 0 && (
//       <section classNameName={styles.section}>
//         <h2>Experience</h2>
//         {data.experiences.map((ex,i) => (
//           <div key={i} classNameName={styles.card}>
//             <h3>{ex.role} at {ex.company} ({ex.period})</h3>
//             <p>{ex.description}</p>
//           </div>
//         ))}
//       </section>
//     )}

//     {data.awards.length > 0 && (
//       <section classNameName={styles.section}>
//         <h2>Awards</h2>
//         {data.awards.map((aw,i) => (
//           <div key={i} classNameName={styles.card}>
//             <h3>{aw.title} ({aw.year})</h3>
//             <p><strong>Issuer:</strong> {aw.issuer}</p>
//           </div>
//         ))}
//       </section>
//     )}

//   </div>
);

export default ApplicationPreview;
