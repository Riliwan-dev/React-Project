import React, { useState } from "react";
import "./App.css";

/** Input Component */
const FormInput = ({ id, label, type = "text", value, onChange, placeholder }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      type={type}
      value={value}
      name={id}
      onChange={onChange}
      placeholder={placeholder}
      required
    />
  </div>
);

/** Contact Step */
const ContactStep = ({ formData, updateFormData }) => {
  const onChange = (e) => updateFormData({ [e.target.name]: e.target.value });

  return (
    <div className="step fade-in">
      <h2 className="section-title">I. Personal Details</h2>
      <FormInput id="fullName" label="Full Name" value={formData.fullName} onChange={onChange} />
      <FormInput id="email" label="Email Address" type="email" value={formData.email} onChange={onChange} />
      <FormInput id="phone" label="Phone Number" type="tel" value={formData.phone} onChange={onChange} />
    </div>
  );
};

/** Address Step */
const AddressStep = ({ formData, updateFormData }) => {
  const onChange = (e) => updateFormData({ [e.target.name]: e.target.value });

  return (
    <div className="step fade-in">
      <h2 className="section-title">II. Mailing Address</h2>
      <FormInput id="street" label="Street" value={formData.street} onChange={onChange} />

      <div className="two-grid">
        <FormInput id="city" label="City" value={formData.city} onChange={onChange} />
        <FormInput id="zipCode" label="Zip Code" value={formData.zipCode} onChange={onChange} />
      </div>
    </div>
  );
};

/** Review Step */
const ReviewStep = ({ formData }) => {
  return (
    <div className="step fade-in">
      <h2 className="section-title">III. Review & Submit</h2>
      <div className="review-box">
        {Object.entries(formData).map(([key, val]) => (
          <p key={key} className="review-item">
            <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {val || "—"}
          </p>
        ))}
      </div>
    </div>
  );
};

/** Step Indicator */
const StepIndicator = ({ steps, current }) => (
  <div className="step-indicator">
    {steps.map((_, i) => (
      <div key={i} className={`indicator ${i <= current ? "active" : ""}`}>{i + 1}</div>
    ))}
  </div>
);

/** Main App Component */
export default function App() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zipCode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const steps = [ContactStep, AddressStep, ReviewStep];
  const Current = steps[step];

  const updateFormData = (data) => setFormData((prev) => ({ ...prev, ...data }));

  const next = () => step < 2 && setStep(step + 1);
  const prev = () => step > 0 && setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 2) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="success-card">
          <h1>Form Submitted Successfully ✔</h1>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Modern Application Form</h1>
      <StepIndicator steps={steps} current={step} />

      <form onSubmit={handleSubmit} className="form-card">
        <Current formData={formData} updateFormData={updateFormData} />

        <div className="nav-buttons">
          <button type="button" disabled={step === 0} onClick={prev} className="btn secondary">
            Previous
          </button>

          {step < 2 ? (
            <button type="button" onClick={next} className="btn primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn primary">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}