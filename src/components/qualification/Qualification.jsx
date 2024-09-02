import React, { useState } from "react";
import "./Qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const handleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification">
      <h5>My journey</h5>
      <h2>Qualification</h2>

      <div className="qualification__container">
        {/* Qualification selector */}
        <div className="qualification__selector">
          <div
            className={
              toggleState === 1
                ? "qualification__active qualification__button"
                : "qualification__button"
            }
            onClick={() => handleTab(1)}
          >
            <div className="qualification__selector-text">
              <HiOutlineAcademicCap className="qualification__icon" />
              <h3>Education</h3>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active"
                : "qualification__button"
            }
            onClick={() => handleTab(2)}
          >
            <div className="qualification__selector-text">
              <HiOutlineBriefcase className="qualification__icon" />
              <h3>Experience</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="qualification__container container">
      <div className="qualification__sections">
        {/* Education */}

        <div
          className={
            toggleState === 1
              ? "qualification__content qualification__content-active"
              : "qualification__content"
          }
        >
          <div>
          <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Microservices with Node JS and React
                </h3>
                <span className="qualification__subtitle">Udemy</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Studying 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Certified Cloud Practitioner CLF-C02
                </h3>
                <span className="qualification__subtitle">
                  Amazon Web Services
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  Studying 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Software Engineering, Web Development
                </h3>
                <span className="qualification__subtitle">Ironhack</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
            <div>
              <h3 className="qualification__title">
                Master Certificate in Financial Revenue Management
              </h3>
              <span className="qualification__subtitle">
                Cornell University
              </span>
              <div className="qualification__calendar">
                <HiOutlineCalendar className="qualification__calendar-icon" />
                2016
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                Bachelor’s Degree in Tourism and Hospitality Management
              </h3>
              <span className="qualification__subtitle">
                Universitat Ramon Llull
              </span>
              <div className="qualification__calendar">
                <HiOutlineCalendar className="qualification__calendar-icon" />
                2014
              </div>
            </div>
            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          </div>

          {/* Experience */}

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Director of Product Development</h3>
                <span className="qualification__subtitle">Shiji Guest Solutions (Shiji Group)</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2021 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Product Team Lead</h3>
                <span className="qualification__subtitle">
                Shiji Guest Solutions (Shiji Group)
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2020 - 2021
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Senior Product Manager</h3>
                <span className="qualification__subtitle">
                  ReviewPro - Guest Intelligence
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Product Manager</h3>
                <span className="qualification__subtitle">ReviewPro - Guest Intelligence</span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2016 - 2018
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Key Account Manager</h3>
                <span className="qualification__subtitle">
                ReviewPro - Guest Intelligence
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2015 - 2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Junior Account Manager</h3>
                <span className="qualification__subtitle">
                ReviewPro - Guest Intelligence
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2014 - 2015
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Assistant Hotel Manager</h3>
                <span className="qualification__subtitle">
                Barceló Hotel Group
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2014
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Chain Reservations Coordinator</h3>
                <span className="qualification__subtitle">
                citizenM Hotels
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2013 - 2014
                </div>
              </div>
            </div>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Front Office Receptionist</h3>
                <span className="qualification__subtitle">
                The Landmark London
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2013
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">F&B Assistant</h3>
                <span className="qualification__subtitle">
                The Hotel Collection
                </span>
                <div className="qualification__calendar">
                  <HiOutlineCalendar className="qualification__calendar-icon" />
                  2012
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
