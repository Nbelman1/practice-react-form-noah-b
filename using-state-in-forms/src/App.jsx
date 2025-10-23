import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name}:`, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <form >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange} />
          </label>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange} />
          </label>
          <label>
            Feedback:
            <input
              type="text"
              name="feedback"
              value={formData.feedback}
              onChange={handleChange} />
          </label>
        </form>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>Preview:</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Feedback: {formData.feedback}</p>
        </div>
      </div>
    </>
  )
}

export default App
