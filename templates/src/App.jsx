import { useState } from 'react'
import './App.css'

function App() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'We are looking for an experienced software engineer to join our growing team. You will be responsible for designing and implementing scalable solutions.',
      requirements: [
        '5+ years of software development experience',
        'Strong knowledge of JavaScript, React, and Node.js',
        'Experience with cloud platforms (AWS, GCP, or Azure)',
        'Excellent problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Join our design team to create beautiful and intuitive user experiences. You will work closely with product and engineering teams.',
      requirements: [
        '3+ years of product design experience',
        'Proficiency in Figma and design systems',
        'Strong portfolio demonstrating UX/UI skills',
        'Experience with user research and testing'
      ]
    },
    {
      id: 3,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead our marketing initiatives and help grow our brand. You will develop and execute marketing strategies across multiple channels.',
      requirements: [
        '4+ years of marketing experience',
        'Experience with digital marketing and analytics',
        'Strong leadership and project management skills',
        'Creative thinking and data-driven approach'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help us build and maintain our infrastructure. You will work on automating deployments, monitoring systems, and ensuring reliability.',
      requirements: [
        '3+ years of DevOps experience',
        'Strong knowledge of Docker, Kubernetes, and CI/CD',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Familiarity with monitoring tools (Prometheus, Grafana, etc.)'
      ]
    }
  ]

  return (
    <div className="careers-page">
      <header className="header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p className="subtitle">Build the future with us. We're always looking for talented people.</p>
        </div>
      </header>

      <main className="container">
        <div className="content-wrapper">
          <aside className="filters">
            <h2>Departments</h2>
            <ul className="filter-list">
              <li className="filter-item active">All Positions</li>
              <li className="filter-item">Engineering</li>
              <li className="filter-item">Design</li>
              <li className="filter-item">Marketing</li>
            </ul>
          </aside>

          <div className="jobs-section">
            <h2 className="section-title">Open Positions ({jobs.length})</h2>
            <div className="jobs-list">
              {jobs.map(job => (
                <div 
                  key={job.id} 
                  className={`job-card ${selectedJob?.id === job.id ? 'selected' : ''}`}
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="location">{job.location}</span>
                  </div>
                  {selectedJob?.id === job.id && (
                    <div className="job-details">
                      <h4>About the role</h4>
                      <p>{job.description}</p>
                      <h4>Requirements</h4>
                      <ul>
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                      <button className="apply-button">Apply Now</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
