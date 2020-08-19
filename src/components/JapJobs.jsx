import React from 'react';
import "../NewsJobsStyle.css";



function JapJobs({japJobs}) {
    return (
        <div >
            {japJobs.map(job => (
                <p>
                    Title:<b>{job.jobtitle}</b><br />
                    Company:<b>{job.company}</b><br />
                    {job.snippet}<br />
                    Location:<b>{job.formattedLocationFull}</b><br />
                    Post Date:<b>{job.date}</b><br />
                    <a href={job.url}>Link to Original Post</a>
                </p>
            ))}
        </div>
    )
}

export default JapJobs
