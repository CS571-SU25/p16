import { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch("https://cs571api.cs.wisc.edu/rest/su25/bucket/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CS571-ID": CS571.getBadgerId(),
    },
    body: JSON.stringify(form),
  })
    .then(res => {
      if (!res.ok) {
        throw new Error("Error in res!!!");
      }
      return res.json();
    })
    .then(data => {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    })
    .catch(err => {
      console.error("Failed to submit message:", err);
    });
};


  return (
    <Container className="mt-4">
      <h1>Contact Me</h1>

      {submitted && (
        <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
          Thanks for reaching out! I’ll get back to you soon.
        </Alert>
      )}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="you@example.com"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="contactMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your message..."
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}
