import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gray-800 text-gray-300 flex justify-center items-center p-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600">
          Contact
        </p>

        <p className="py-4">Let's get in touch.</p>
        <div class="contact-links">
          <h3>[Email Envelope Icon]</h3>
          <p>
            <a href="mailto:hello@chelseakoenig.com">hello@chelseakoenig.com</a>
          </p>

          <h3 className="pt-3">[LinkedIn Icon]</h3>
          <p className="pb-2">
            <a
              href="https://www.linkedin.com/in/cmkoenig/"
              alt="Chelsea Koenig's LinkedIn Profile"
              title="Chelsea Koenig's LinkedIn Profile"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/cmkoenig/
            </a>
          </p>
        </div>
      </div>

      <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-3 mx-auto flex items-center">
        Let's Collaborate
      </button>
    </div>
  );
};

export default Contact;
