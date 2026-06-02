import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Certifications = ({ theme }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [certifications, setCertifications] = useState([]);

  const PUBLIC_URL = process.env.PUBLIC_URL || "";

  useEffect(() => {
    setTimeout(() => {
      setCertifications([
  {
    title: "AZ-400: Designing and Implementing Microsoft DevOps Solutions",
    provider: "Microsoft",
    url: "https://www.credly.com/badges/ec1930a7-7d57-460b-9ae3-44846ad39ccd/public_url",
    logo: PUBLIC_URL + "/assets/Microsoft.png",
    description:
      "Demonstrates expertise in DevOps practices, CI/CD pipelines, infrastructure automation, source control, monitoring, and Azure DevOps solutions.",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    provider: "Microsoft",
    url: "https://www.credly.com/badges/b4298fcf-3892-4962-ac7d-91db43c70a07/public_url",
    logo: PUBLIC_URL + "/assets/Microsoft.png",
    description:
      "Validates skills in developing, deploying, and maintaining cloud applications and services on Microsoft Azure.",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    url: "https://www.credly.com/badges/4d650fd3-d72d-435a-ad25-b1a9ff7ec6d4/public_url",
    logo: PUBLIC_URL + "/assets/Microsoft.png",
    description:
      "Demonstrates foundational knowledge of cloud concepts, Azure services, security, compliance, and pricing models.",
  },
  {
    title: "IBM Generative & Agentic AI Foundation",
    provider: "IBM",
    url: "https://www.credly.com/badges/8b4e843a-b8ee-4607-a2c5-b7b1191af3af/public_url",
    logo: PUBLIC_URL + "/assets/IBM.png",
    description:
      "Foundational certification covering Generative AI concepts, Agentic AI systems, and enterprise AI applications.",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    provider: "IBM",
    url: "https://www.credly.com/badges/ff5de459-c7ad-4b69-8bb7-72d841e64d05/public_url",
    logo: PUBLIC_URL + "/assets/IBM.png",
    description:
      "Focused on applying IBM Enterprise Design Thinking principles to solve business and technology challenges.",
  },
  {
    title: "IBM Delivery Central Platform Foundations",
    provider: "IBM",
    url: "https://www.credly.com/badges/f78b00b2-470d-4cc1-9ce0-31602e58bc6a/public_url",
    logo: PUBLIC_URL + "/assets/IBM.png",
    description:
      "Demonstrates knowledge of IBM Delivery Central Platform processes, tools, and delivery methodologies.",
  },
  {
    title: "IBM Growth Behaviors",
    provider: "IBM",
    url: "https://www.credly.com/badges/5055617e-4817-4e29-b14a-450076eb56a0/public_url",
    logo: PUBLIC_URL + "/assets/IBM.png",
    description:
      "Recognition of professional growth behaviors, collaboration, innovation, and continuous learning within IBM.",
  },
]);
      setIsDataLoaded(true);
    }, 500);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div
      className={`p-8 flex flex-col items-center ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-extrabold mb-8 ${
          theme === "dark" ? "text-blue-400" : "text-indigo-700"
        }`}
      >
        Certifications & Achievements
      </h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariants}
            className={`p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            {cert.logo && (
              <img
                src={cert.logo}
                alt={`${cert.provider} logo`}
                className="w-12 h-12 object-contain mb-2"
              />
            )}
            <h2
              className={`text-xl font-semibold mb-2 ${
                theme === "dark" ? "text-blue-300" : "text-indigo-600"
              }`}
            >
              {cert.title}
            </h2>
            {cert.provider != "GitHub" && (
              <p className="text-sm mb-2 font-medium">{cert.provider}</p>
            )}
            {cert.description && (
              <p className="text-sm mb-2 leading-snug">{cert.description}</p>
            )}
            {cert.url && (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-semibold underline ${
                  theme === "dark"
                    ? "text-blue-400 hover:text-blue-600"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {cert.provider === "GitHub" ? "GitHub" : "View Certification"}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
