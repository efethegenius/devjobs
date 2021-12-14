import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data";
import { GoToTop } from "./GoToTop";

export const Job = () => {
  const [jobs, setJobs] = useState(data);
  const [company, setCompany] = useState("default company");
  const [website, setWebsite] = useState("default website");
  const [apply, setApply] = useState("default application");
  const [logo, setLogo] = useState("default logo");
  const [contract, setContract] = useState("default contract");
  const [postedAt, setPostedAt] = useState("default posted");
  const [position, setPosition] = useState("default position");
  const [location, setLocation] = useState("default location");
  const [description, setDescription] = useState("default description");
  const [requirements, setRequirements] = useState([]);
  const [role, setRole] = useState([]);
  const [logoBackground, setLogoBackground] = useState(
    "default logoBackground"
  );

  const { id } = useParams();
  useEffect(() => {
    const newData = jobs.find((newJob) => newJob.id === parseInt(id));
    setCompany(newData.company);
    setWebsite(newData.website);
    setLogoBackground(newData.logoBackground);
    setLogo(newData.logo);
    setPostedAt(newData.postedAt);
    setContract(newData.contract);
    setPosition(newData.position);
    setLocation(newData.location);
    setRequirements(newData.requirements);
    setDescription(newData.description);
    setApply(newData.apply);
    setRole(newData.role);
  }, [jobs, id]);

  let myRequirement;
  if (requirements.items) {
    myRequirement = requirements.items.map((item) => {
      return <li key={item}>{item}</li>;
    });
  }
  let myRole;
  if (role.items) {
    myRole = role.items.map((item) => {
      return <li key={item}>{item}</li>;
    });
  }

  return (
    <section className="inner-job-container">
      <div className="inner-job-header">
        <div className="inner-job-details">
          <div
            className="job-logo inner-job-logo"
            style={{ backgroundColor: `${logoBackground}` }}
          >
            <img src={logo} alt="logo" />
          </div>
          <div className="det">
            <h3>{company}</h3>
            <p>{website.substring(8)}</p>
          </div>
        </div>
        <a
          href={website}
          className="company-site"
          target="_blank"
          rel="noopener noreferrer"
        >
          Company Site
        </a>
      </div>
      <div className="inner-job">
        <div className="inner-job-head">
          <div>
            <div className="inner-job-title">
              <p>{contract}</p>
              <p>•</p>
              <p>{postedAt}</p>
            </div>
            <h1>{position}</h1>
            <p id="location" className="inner-location">
              {location}
            </p>
          </div>
          <a
            href={apply}
            className="apply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
        <p id="inner-description">{description}</p>
        <div className="requirements-container">
          <h3>Requirements</h3>
          <p>{requirements.content}</p>
          <div className="requirements">{myRequirement}</div>
        </div>
        <div className="role">
          <h3>What You Will Do</h3>
          <p>{role.content}</p>
          <div className="role">{myRole}</div>
        </div>
      </div>
      <div className="footer-btn">
        <div className="apply-now">
          <div className="footer-position">
            <h3>{position}</h3>
            <p>{company}</p>
          </div>
          <a
            href={apply}
            className="footer-apply"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </a>
        </div>
        <p>
          Created by{" "}
          <a
            href="https://efesamuel.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Efe Samuel
          </a>
        </p>
      </div>
      <GoToTop />
    </section>
  );
};
