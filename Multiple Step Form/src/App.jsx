import React, { useState, useCallback, useMemo } from 'react';

// Custom style block for the classic, high-design aesthetic
const classicStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap');
  
  .font-classic-serif {
    font-family: 'Merriweather', serif;
  }
  .font-classic-display {
    font-family: 'Playfair Display', serif;
  }

  .classic-container {
    /* Rich, layered card design */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 0 0 1px #e0e0e0;
    border: 1px solid #c9c9c9;
    background-color: #f7f3ed; /* Light cream/parchment color */
  }

  .classic-input {
    /* Debossed effect for inputs */
    border: 1px solid #b5a489;
    background-color: #ffffff;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
  }

  .classic-input:focus {
    /* Elegant focus ring */
    outline: none;
    border-color: #1a5319; /* Deep forest green */
    box-shadow: 0 0 0 2px rgba(26, 83, 25, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  .classic-button {
    /* Engraved/Embossed button style */
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .classic-button-primary {
    background-color: #1a5319; /* Deep Forest Green */
    color: #f7f3ed; /* Cream text */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .classic-button-primary:hover:not(:disabled) {
    background-color: #2b702b;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }

  .classic-button-secondary {
    background-color: #ffffff;
    color: #5d4037; /* Brown/Sepia tone */
    border: 1px solid #b5a489;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }

  .classic-button-secondary:hover:not(:disabled) {
    background-color: #f0f0f0;
    color: #1a5319;
  }

  .step-active {
    background-color: #1a5319 !important;
    border-color: #1a5319 !important;
    box-shadow: 0 0 0 4px rgba(26, 83, 25, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

/**
 * Custom Input Field Component
 */
const FormInput = ({ id, label, type = 'text', value, onChange, placeholder = '' }) => (
  <div className="mb-6">
    <label htmlFor={id} className="block text-gray-700 font-classic-serif text-sm font-semibold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      value={value || ''}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 classic-input rounded-sm text-gray-800 font-classic-serif placeholder-gray-500"
      required
    />
  </div>
);

/**
 * Step 1: Personal Contact Information
 */
const ContactStep = ({ formData, updateFormData }) => {
  const handleChange = useCallback((e) => {
    updateFormData({ [e.target.name]: e.target.value });
  }, [updateFormData]);

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-classic-display font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
        I. Personal Details
      </h2>
      <FormInput
        id="fullName"
        label="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        placeholder="e.g., Mr. Alistair Finch"
      />
      <FormInput
        id="email"
        label="Email Address"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="e.g., alistair@domain.com"
      />
      <FormInput
        id="phone"
        label="Phone Number (Optional)"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="e.g., (123) 456-7890"
      />
    </div>
  );
};

/**
 * Step 2: Address Details
 */
const AddressStep = ({ formData, updateFormData }) => {
  const handleChange = useCallback((e) => {
    updateFormData({ [e.target.name]: e.target.value });
  }, [updateFormData]);

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-classic-display font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
        II. Mailing Residence
      </h2>
      <FormInput
        id="street"
        label="Street Address"
        value={formData.street}
        onChange={handleChange}
        placeholder="Apartment, suite, unit, etc."
      />
      <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="flex-1">
          <FormInput
            id="city"
            label="City"
            value={formData.city}
            onChange={handleChange}
            placeholder="London"
          />
        </div>
        <div className="flex-1">
          <FormInput
            id="zipCode"
            label="Postal/Zip Code"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="SW1A 0AA"
          />
        </div>
      </div>
    </div>
  );
};

/**
 * Step 3: Review and Confirmation
 */
const ReviewStep = ({ formData }) => {
  const fields = [
    { label: "Full Name", key: "fullName" },
    { label: "Email Address", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "Street", key: "street" },
    { label: "City", key: "city" },
    { label: "Zip Code", key: "zipCode" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-classic-display font-bold text-gray-800 mb-6 border-b border-gray-300 pb-3">
        III. Review & Submit
      </h2>
      <div className="bg-white p-6 border border-gray-300 shadow-inner rounded-md">
        <dl className="divide-y divide-gray-200">
          {fields.map((field) => (
            <div key={field.key} className="py-3 sm:py-4 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-classic-serif font-medium text-gray-500">{field.label}</dt>
              <dd className="mt-1 text-base font-classic-serif text-gray-900 sm:col-span-2 sm:mt-0">
                {formData[field.key] || <span className="italic text-gray-400">Not provided</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <p className="mt-8 text-sm font-classic-serif text-gray-600 italic">
        Kindly ensure all details are correct before finalizing the application.
      </p>
    </div>
  );
};


/**
 * Progress Indicator Component
 */
const StepIndicator = ({ steps, currentStep }) => {
  return (
    <div className="flex justify-between items-center mb-10 px-4">
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="flex flex-col items-center min-w-0">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold transition-all duration-300 ease-in-out font-classic-display border-2 ${
                index <= currentStep
                  ? 'step-active text-white'
                  : 'bg-white text-gray-500 border-gray-400 shadow-md'
              }`}
            >
              {index < currentStep ? (
                // Checkmark SVG for completed steps
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                index + 1
              )}
            </div>
            <p
              className={`mt-3 text-xs sm:text-sm text-center font-classic-serif transition-colors duration-300 ${
                index <= currentStep ? 'text-gray-800 font-bold' : 'text-gray-500'
              }`}
            >
              {step.title}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-auto h-0 mx-2 sm:mx-4 transition-colors duration-300 ${
                index < currentStep ? 'border-t-2 border-dashed border-1a5319' : 'border-t-2 border-gray-300 border-dashed'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


/**
 * Main Application Component
 */
const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: 'J.P. Morgan',
    email: 'jpmorgan@classic.com',
    phone: '212-555-0100',
    street: '1 Wall Street',
    city: 'New York',
    zipCode: '10005',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  // Define the form steps
  const steps = useMemo(() => [
    { title: 'Contact', component: ContactStep, fields: ['fullName', 'email'] },
    { title: 'Address', component: AddressStep, fields: ['street', 'city', 'zipCode'] },
    { title: 'Review', component: ReviewStep, fields: [] },
  ], []);

  const totalSteps = steps.length;
  const CurrentStepComponent = steps[currentStep].component;

  const updateFormData = useCallback((newData) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  }, []);

  const isStepValid = useCallback(() => {
    // Simple validation: check if required fields for the current step are present
    const requiredFields = steps[currentStep].fields;
    return requiredFields.every(field => formData[field] && formData[field].trim() !== '');
  }, [currentStep, formData, steps]);


  const nextStep = () => {
    if (isStepValid() && currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
      setMessage('');
    } else if (!isStepValid()) {
      setMessage('Kindly complete all required fields before proceeding.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setMessage('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep === totalSteps - 1) {
      console.log('Form Data Submitted:', formData);
      setIsSubmitted(true);
      setMessage('Application successfully submitted! Thank you for your correspondence.');
    }
  };

  // Render the submission success state
  if (isSubmitted) {
    return (
      <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-stone-100" 
           style={{backgroundImage: "url('https://placehold.co/1920x1080/e7e3d8/5d4037?text=Parchment+Texture')", backgroundSize: 'cover'}}>
        <style dangerouslySetInnerHTML={{ __html: classicStyles }} />
        <div className="max-w-xl w-full classic-container p-10 shadow-2xl rounded-lg text-center font-classic-serif">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-yellow-700 text-white shadow-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-classic-display font-bold text-1a5319 mb-4">
            Submission Acknowledged
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Your application has been successfully recorded. A confirmation of receipt will be dispatched to your email shortly.
          </p>
          <pre className="text-left text-xs bg-white p-4 border border-gray-300 rounded-sm overflow-auto text-gray-800">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  // Render the multi-step form
  return (
    <div className="min-h-screen p-4 sm:p-8 flex items-start justify-center bg-stone-100" 
         style={{backgroundImage: "url('https://placehold.co/1920x1080/e7e3d8/5d4037?text=Parchment+Texture')", backgroundSize: 'cover'}}>
      <style dangerouslySetInnerHTML={{ __html: classicStyles }} />
      <div className="max-w-2xl w-full mt-10 classic-container p-8 sm:p-12 rounded-lg">
        <h1 className="text-4xl font-classic-display font-extrabold text-gray-800 mb-10 text-center border-b pb-3">
          The Grand Application
        </h1>

        <StepIndicator steps={steps} currentStep={currentStep} />

        <form onSubmit={handleSubmit}>
          {message && (
            <div className="bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded-md mb-6 font-classic-serif text-sm transition-all duration-300 animate-in slide-in-from-top-4">
              {message}
            </div>
          )}

          {/* Current Step Content */}
          <div className="min-h-[300px] transition-all duration-300">
            <CurrentStepComponent formData={formData} updateFormData={updateFormData} />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-300">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`px-6 py-2 classic-button classic-button-secondary ${
                currentStep === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:border-gray-500'
              }`}
            >
              &larr; Previous
            </button>

            {currentStep < totalSteps - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 classic-button classic-button-primary"
              >
                Next Step &rarr;
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 classic-button classic-button-primary"
              >
                Finalize Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;