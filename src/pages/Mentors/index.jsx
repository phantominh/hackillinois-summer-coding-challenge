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
        <div className={styles.container}>
            <div className={styles.mentor_header}>
                <h2>MENTORS</h2>
            </div>
            <div className={styles.mentor_container}>
                {mentors.map((mentor) => (
                    <div className={styles.mentor_card}>
                        <div className={styles.mentor_image} style={{ backgroundImage: `url(${mentor.profile})` }} />
                        <div className={styles.mentor_text}>
                            <div className={styles.mentor_name}>
                                {mentor.firstName} {mentor.lastName}
                            </div>
                            <div className={styles.mentor_description}>
                                {mentor.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Mentors;