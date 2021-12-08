import React, { useState } from "react";
import { data } from "./data";
import { Link } from "react-router-dom";
import { GoToTop } from "./GoToTop";
import filter from "./assets/mobile/icon-filter.svg";
import location from "./assets/desktop/icon-location.svg";

export const Jobs = ({ handleList, setList, list }) => {
  const [openJobs, setOpenJobs] = useState(data);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const filtered = search
    ? openJobs.filter(
        (openJob) =>
          openJob.position.toLowerCase().includes(search.toLowerCase()) ||
          openJob.company.toLowerCase().includes(search.toLowerCase()) ||
          openJob.location.toLowerCase().includes(search.toLowerCase())
      )
    : checked
    ? openJobs.filter((openJob) => openJob.contract === "Full Time")
    : openJobs;

  const handleChange = () => {
    setChecked(!checked);
  };

  const allLocations = [
    "All",
    ...new Set(filtered.map((allLocation) => allLocation.location)),
  ];
  console.log(allLocations);

  const [newLocations, setNewLocations] = useState(allLocations);

  return (
    <div
      className="app"
      onClick={() => {
        if (list) {
          setList(false);
        }
      }}
    >
      <div className="job-container">
        <div className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by title, companies, expertise..."
            autoComplete="off"
          />
          <img src={filter} alt="" onClick={handleModal} className="filter" />
          <div className="location location-outer" onClick={handleList}>
            <img src={location} alt="" />
            <p>Filter by location...</p>
            <div
              className={
                list
                  ? "location-list-outer show-location-list-outer"
                  : "location-list-outer"
              }
            >
              {newLocations.map((newLocation, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => {
                      newLocation === "All"
                        ? setSearch("")
                        : setSearch(newLocation);
                      handleList();
                    }}
                  >
                    {newLocation}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="check-container outer-check">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="checkbox"
            />
            <p>Full Time Only</p>
          </div>
        </div>
        <div
          className={
            isModalOpen
              ? "modal-container show-modal-container"
              : "modal-container"
          }
        >
          <div className="modal">
            <div className="location" onClick={handleList}>
              <div className="location-header">
                <img src={location} alt="" />
                <p>Filter by location...</p>
              </div>
              <div
                className={
                  list
                    ? "location-list-outer show-location-list-outer"
                    : "location-list-outer"
                }
              >
                {newLocations.map((newLocation, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      onClick={() => {
                        newLocation === "All"
                          ? setSearch("")
                          : setSearch(newLocation);
                        handleList();
                        handleModal();
                      }}
                    >
                      {newLocation}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="check-container">
              <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="checkbox"
              />
              <p>Full Time Only</p>
            </div>
            <button onClick={handleModal}>Search</button>
          </div>
        </div>
        {filtered.map((openJob) => {
          const {
            id,
            company,
            logo,
            position,
            postedAt,
            contract,
            location,
            website,
            apply,
            description,
            logoBackground,
          } = openJob;
          return (
            <div key={id} className="open-job">
              <Link to={`/job/${id}`}>
                <div
                  className="job-logo"
                  style={{ backgroundColor: `${logoBackground}` }}
                >
                  <img src={logo} alt="logo" />
                </div>
                <div className="job-details">
                  <div className="job-head">
                    <p className="posted-at">{postedAt}</p>
                    <p>•</p>
                    <p>{contract}</p>
                  </div>
                  <h1>{position}</h1>
                  <p>{company}</p>
                  <p id="location">{location}</p>
                </div>
              </Link>
            </div>
          );
        })}
        <GoToTop />
      </div>
      <p className="creator">
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
  );
};
