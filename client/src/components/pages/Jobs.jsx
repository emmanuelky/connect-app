import React, { Component } from "react";
import api from "../../api";

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
  }
  render() {
    return (
      <div className="container Jobs p-5">
        <h2>Job Search</h2>

        <div className="result">
          <br />
          <h4>
            Start your job search... <i>use the links below</i>
          </h4>
          <br />
          <h6>
            <i>
              **Note**... (you will be redirected to the following websites)
            </i>
          </h6>
          <br />
          <br />
          <ul>
            <li>
              <a href="https://authenticjobs.com/" target="_blank">
                {" "}
                Authentic Jobs
              </a>
            </li>
            <li>
              <a href="http://germanitjobs.com/" target="_blank">
                {" "}
                German IT Jobs
              </a>
            </li>
            <li>
              <a href="https://www.talent.io/" target="_blank">
                {" "}
                Talent
              </a>
            </li>
            <li>
              <a href="https://4scotty.com/" target="_blank">
                {" "}
                4scotty
              </a>
            </li>
            <li>
              <a href="https://jobs.heyjobs.co/en-de/jobs" target="_blank">
                {" "}
                Hey Jobs
              </a>
            </li>
            <li>
              <a href="https://www.glassdoor.de/" target="_blank">
                {" "}
                glassdoor
              </a>
            </li>
            <li>
              <a href="http://www.jobtopus.de/" target="_blank">
                {" "}
                Jobtopus
              </a>
            </li>
            <li>
              <a href="https://jobs.check24.de" target="_blank">
                {" "}
                Check24 Jobs
              </a>
            </li>
            <li>
              <a href="https://www.obi-next.de/" target="_blank">
                {" "}
                OBI-next
              </a>
            </li>
            <li>
              <a href="https://www.monster.de" target="_blank">
                {" "}
                Monster
              </a>
            </li>
            <li>
              <a href="http://www.jobsinnetwork.com/" target="_blank">
                {" "}
                Jobs in Network
              </a>
            </li>
            <li>
              <a href="https://www.pearsonfrank.com/" target="_blank">
                {" "}
                Pearson Frank
              </a>
            </li>
            <li>
              <a href="https://www.games-career.com/" target="_blank">
                {" "}
                Games-Career
              </a>
            </li>
            <li>
              <a href="https://relocateme.eu/" target="_blank">
                {" "}
                Relocate Me
              </a>
            </li>
            <li>
              <a href="https://dotlinkers.pl/en/" target="_blank">
                {" "}
                dotlinkers
              </a>
            </li>
            <li>
              <a
                href="https://www.ferchau.com/de/de/karriere/jobs-bewerbung/jobangebote/search/deutschland/developer/?gclid=CjwKCAiA2fjjBRAjEiwAuewS_Vvlrj_pmjx7T8o2gLMHtaIGVknyCsdvhnBQMcg7i9wFHK_vmGubcxoC_BEQAvD_BwE"
                target="_blank"
              >
                {" "}
                ferchau
              </a>
            </li>
            <li>
              <a href="https://www.stepstone.de" target="_blank">
                {" "}
                Stepstone
              </a>
            </li>
            <li>
              <a
                href="https://www.darwinrecruitment.com/job-search"
                target="_blank"
              >
                {" "}
                Darwin Recruitment
              </a>
            </li>
            <li>
              <a href="https://www.honeypot.io/" target="_blank">
                {" "}
                honeypot
              </a>
            </li>
            <li>
              <a
                href="https://jobs.senacor.com/jobs?tms-area=area.softwareDevelopment"
                target="_blank"
              >
                {" "}
                Senacor
              </a>
            </li>
            <li>
              <a href="https://de.indeed.com/" target="_blank">
                {" "}
                Indeed
              </a>
            </li>
            <li>
              <a
                href="https://de.jobrapido.com/Developer-Jobs-in-Deutschland?shm=all"
                target="_blank"
              >
                {" "}
                Jobrapido
              </a>
            </li>
            <li>
              <a href="https://www.jobware.de/" target="_blank">
                {" "}
                Jobware
              </a>
            </li>
            <li>
              <a href="https://www.xing.com" target="_blank">
                {" "}
                Xing
              </a>
            </li>
            <li>
              <a
                href="https://www.stellenangebote.de/stellenangebote/?src=2baaa5505476084b91012b2760bf798f#2355"
                target="_blank"
              >
                {" "}
                stellenangebote
              </a>
            </li>
            <li>
              <a href="https://www.allgeier-experts.com/start/" target="_blank">
                {" "}
                allgeier-experts
              </a>
            </li>
            <li>
              <a href="http://job.de/Jobs" target="_blank">
                {" "}
                Job
              </a>
            </li>
            <li>
              <a href="http://www.jobs2careers.com/" target="_blank">
                {" "}
                jobs2careers
              </a>
            </li>
            <li>
              <a
                href="https://www.adzuna.de/search?partnerb=1&c=869854262&ag=46606663347&kw=%2Badzuna&dv=c&nw=g&geo=9041542&gclid=CjwKCAiA2fjjBRAjEiwAuewS_Rl50lU5GCzYK4qBI7hpYMRMZMJefBJBFPJ3qj67mrCKsbI8XJ8lxhoCLAgQAvD_BwE"
                target="_blank"
              >
                {" "}
                adzuna
              </a>
            </li>
            <li>
              <a href="https://de.trovit.com/jobs/" target="_blank">
                {" "}
                Trovit
              </a>
            </li>
            <li>
              <a href="https://www.ziprecruiter.com/browse" target="_blank">
                {" "}
                ziprecruiter
              </a>
            </li>
            <li>
              <a href="https://www.naukri.com/" target="_blank">
                {" "}
                Naukri
              </a>
            </li>
            <li>
              <a href="https://landing.jobs/" target="_blank">
                {" "}
                Landing Job
              </a>
            </li>
            <li>
              <a href="https://de.experis.com/" target="_blank">
                {" "}
                experis
              </a>
            </li>
            <li>
              <a href="https://www.masonfrank.com/" target="_blank">
                {" "}
                Mason Frank
              </a>
            </li>
            <li>
              <a href="http://berlinstartupjobs.com/" target="_blank">
                {" "}
                Berlin Startup Jobs
              </a>
            </li>
            <li>
              <a href="http://www.techstartupjobs.com/" target="_blank">
                {" "}
                Tech Startup
              </a>
            </li>
            <li>
              <a href="https://expatjobseeker.de/" target="_blank">
                {" "}
                Expat job seeker
              </a>
            </li>
            <li>
              <a href="https://angel.co/" target="_blank">
                {" "}
                Angelist
              </a>
            </li>
            <li>
              <a href="https://jobbatical.com/jobs" target="_blank">
                {" "}
                Jobbatical
              </a>
            </li>
            <li>
              <a href="https://www.eurojobs.com/" target="_blank">
                {" "}
                Europe Jobs
              </a>
            </li>
            <li>
              <a href="https://www.randstad.de/" target="_blank">
                {" "}
                Randstad
              </a>
            </li>
            <li>
              <a href="https://www.jobvector.de/" target="_blank">
                {" "}
                Job Vector
              </a>
            </li>
            <li>
              <a href="https://www.jobworld.de/" target="_blank">
                {" "}
                Job World
              </a>
            </li>
            <li>
              <a href="https://www.jobs.de/" target="_blank">
                {" "}
                Jobs-de
              </a>
            </li>
            <li>
              <a href="https://joblift.de/" target="_blank">
                {" "}
                Job lift
              </a>
            </li>
            <li>
              <a href="https://de.jooble.org/" target="_blank">
                {" "}
                Jooble
              </a>
            </li>
            <li>
              <a href="https://www.experteer.de/" target="_blank">
                {" "}
                Experteer
              </a>
            </li>
            <li>
              <a href="  https://www.backinjob.de/" target="_blank">
                {" "}
                Backin Job
              </a>
            </li>
            <li>
              <a href="https://www.absolventa.de/" target="_blank">
                {" "}
                Absolventa
              </a>
            </li>
            <li>
              <a href="https://www.kimeta.de/" target="_blank">
                {" "}
                Kimeta
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target="_blank">
                {" "}
                Linkedin
              </a>
            </li>
          </ul>
        </div>

        {this.state.message && (
          <div className="info info-danger">{this.state.message}</div>
        )}
      </div>
    );
  }
  // componentDidMount() {
  //   api
  //     .getJobs()
  //     .then(data => this.setState({ jobs: data.jobs }))
  //     .catch(err => this.setState({ message: err.toString() }));
  // }
}

export default Jobs;
