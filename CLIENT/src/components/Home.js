import React from 'react';


function App() {
  const studyGroups = [
    { name: 'Calculus Study Group', description: 'Discuss and practice Calculus concepts and problem-solving.', topic: 'Mathematics', image: '/images/maths.jpeg' },
    { name: 'Data Structures & Algorithms', description: 'Explore efficient data structures and algorithms.', topic: 'Computer Science', image: '/images/cs.jpg' },
    { name: 'Quantum Mechanics Study Group', description: 'Dive deep into the fascinating world of quantum physics.', topic: 'Physics', image: '/images/physics.jpg' },
    { name: 'Classic Novels Discussion', description: 'Discuss and analyze timeless literary works.', topic: 'Literature', image: '/images/literature.png' },
  ];

  const upcomingMeetings = [
    { name: 'Calculus Study Group', topic: 'Derivatives and Integrals', image: '/images/calculus.png' },
    { name: 'Data Structures', topic: 'Arrays and Linked Lists', image: '/images/ds.png' },
    { name: 'Classic Novels', topic: 'Pride and Prejudice', image: '/images/novels.jpg' },
  ];

  return (
    <div className="App" style={styles.app}>
      

      <main>
        <section style={styles.section}>
          <h2>Discover Study Groups by Topic</h2>
          <div style={styles.studyGroupsList}>
            {studyGroups.map((group, index) => (
              <div key={index} style={styles.studyGroupCard}>
                <img src={group.image} alt={group.name} style={styles.image} />
                <h3>{group.topic}</h3>
                <p>{group.name}</p>
                <p>{group.description}</p>
                <p>Free</p>
              </div>
            ))}
          </div>
          <button style={styles.button}>View All Groups</button>
        </section>

        {/* Upcoming Meetings Section */}
        <section style={styles.section}>
          <h2>Upcoming Meetings</h2>
          <div style={styles.upcomingMeetingsList}>
            {upcomingMeetings.map((meeting, index) => (
              <div key={index} style={styles.meetingCard}>
                <img src={meeting.image} alt={meeting.name} style={styles.image} />
                <h3>{meeting.name}</h3>
                <p>{meeting.topic}</p>
                <p>Free</p>
              </div>
            ))}
          </div>
          <button style={styles.button}>View All Upcoming Meetings</button>
        </section>

      </main>

      
    </div>
  );
}

// Inline Styles
const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#333',
    color: 'white',
  },
  logo: {
    fontSize: '24px',
  },
  nav: {
    listStyleType: 'none',
    display: 'flex',
    gap: '20px',
  },
  signInBtn: {
    padding: '10px 20px',
    backgroundColor: 'white',
    color: '#333',
    border: '1px solid #333',
    cursor: 'pointer',
  },
  section: {
    padding: '50px 0',
  },
  studyGroupsList: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  studyGroupCard: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '200px',
  },
  image: {
    height: '100px',
    width: '100%',
    objectFit: 'cover',
    marginBottom: '10px',
  },
  upcomingMeetingsList: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  meetingCard: {
    border: '1px solid #ccc',
    padding: '20px',
    width: '200px',
  },
  featuresIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    fontSize: '40px',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '30px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  footerLinks: {
    display: 'flex',
    gap: '50px',
  },
};

export default App;
