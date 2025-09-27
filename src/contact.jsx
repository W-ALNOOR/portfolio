import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [fromData, setFormat] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fromData);
    alert("Message submitted! Redirecting to Home...");
    navigate("/");
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Email: alone.33423@gmail.com</p>
      <p>Phone: +1 613-363-3864</p>

      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="firstName"
         placeholder="First Name"
         onChange={handleChange}
         required
         />

         <input
         type="text"
         name="lasttName"
         placeholder="Last Name"
         onChange={handleChange}
         required
         />

         <input
         type="email"
         name="email"
         placeholder="Email"
         onChange={handleChange}
         required
         />

         <input
         type="tel"
         name="phone"
         placeholder="Phone"
         onChange={handleChange}
         required
         />

         <textarea
         name="message"
         placeholder="Your Message"
         onChange={handleChange}
         required
         ></textarea>
         <button type="submit">Send</button>
         </form>
         </div>
  );
}
