export default function Team() {
  const teamMembers = [
    {
      name: "Aleef Danial",
      role: "Backend Developer",
      bio: "Specializes in Django and database architecture"
    },
    {
      name: "Azariena",
      role: "Frontend Developer",
      bio: "Focuses on React and UI/UX design"
	},
	{
      name: "Nur Zafirah Hanan",
      role: "Midend Developer",
      bio: "Manages API requests, authentication, logic"
    },
  ];

  return (
    <div className="glass-box">
    <h2>Our Team</h2>
    <p>The people behind the system</p>
  
    <h3>Aleef Danial</h3>
    <p>Backend Developer</p>
    <p>Specializes in Django and database architecture</p>
  
    <h3>Azariena</h3>
    <p>Frontend Developer</p>
    <p>Focuses on React and UI/UX design</p>
  
    <h3>Nur Zafirah Hanan</h3>
    <p>Midend Developer</p>
    <p>Manages API requests, authentication, logic</p>
  </div>  
  );
}