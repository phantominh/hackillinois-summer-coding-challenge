import React, { useState, useEffect } from 'react' 

import styles from './styles.module.scss'

const mentorsURL = "https://api.hackillinois.org/upload/blobstore/mentors/";

const Mentors = () => {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        getMentors();
    }, []);

    const getMentors = async () => {
        const response = await fetch(mentorsURL);
        const data = await response.json();
        setMentors(data.data);
    };

    // FIXME: Data not loaded on first render
    return (
        <div>
            {mentors.map((mentor) => (
                <div>
                {mentor.description}
                </div>
            ))}
        </div>
    )
};

export default Mentors;