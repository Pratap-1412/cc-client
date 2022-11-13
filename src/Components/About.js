import React from 'react';
import '../App.css';
import CodingImg from './img-rsrc/about-coding.jpg'

export default function About() {
    return (
        <div className='container'>
            <section >
                <div className="my-5 about-text">
                    <h1>About Us</h1>
                </div>
                <div className="row">
                    <div className="col-md-6 gx-5 mb-4">
                        <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                            <img src={CodingImg} className="img-fluid" alt='' />
                            <a href="#!">
                                <div className="mask" ></div>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 gx-5 mb-4">
                        <h4><strong>Start your journey from today!</strong></h4>
                        <p className="text-muted">
                            "Great things are done by a series of small things brought together".<br /><br />
                        </p>
                        <p><strong>Want to join Coding Club RRSIMT?</strong></p>
                        <p className="text-muted">
                            Being Coding Club of a technical institution, we do pretty much everything and anything related to coding. Coding events, Workshops, Hackathons (48 hours non stop coding), contests are just to name a few. We believe in coding our problems away.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
