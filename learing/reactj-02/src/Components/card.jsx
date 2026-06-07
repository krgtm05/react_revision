import React from 'react'

function Card(job) {
    console.log(job)
    return (
        <div className="card bg-red-100">
            <div className="card-top-row">
                <h2 className="card-title">{job.title}</h2>
                <span className={`card-badge ${job.type === "Remote" ? "remote" : "fulltime"}`}>
                    {job.type}
                </span>
            </div>
            <p className="card-company">🏢 {job.company}</p>
            <div className="card-info-row">
                <span>📍 {job.location}</span>
                <span>🧳 {job.experience}</span>
                <span>💰 {job.salary}</span>
            </div>
            <div className="card-bottom-row">
                <span className="card-posted">🕒 {job.posted}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
        </div>
    )
}

export default Card
