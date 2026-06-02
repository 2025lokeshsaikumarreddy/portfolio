import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-100">
      <div className="max-w-4xl bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">
          👋 Hello, I'm Sai Kumar Reddy!
        </h1>
        <p className="text-lg mb-4">
          I'm currently working as a <strong>Cloud Administrator and DevOps Engineer</strong> at <strong>IBM India Pvt. Ltd.</strong>, where I design, automate, and manage cloud infrastructure and deployment pipelines. With over 5 years of experience in cloud and DevOps engineering, I specialize in Azure Cloud, Terraform, CI/CD, Kubernetes, containerization, and infrastructure automation. I am passionate about optimizing systems, improving reliability, and enabling teams to deliver software efficiently at scale.
        </p>

        <h2 className="text-2xl font-bold mb-2">💻 Proficient Coder:</h2>
        <p className="text-lg mb-4">
          Throughout my career, I have worked on cloud infrastructure management,
          deployment automation, and operational excellence initiatives. My experience
          includes building CI/CD pipelines, automating infrastructure provisioning,
          managing cloud resources, and supporting production environments to ensure
          high availability and reliability.
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Automated infrastructure provisioning using Terraform</li>
          <li>Implemented and maintained CI/CD pipelines using Azure DevOps</li>
          <li>Managed cloud resources and deployments on Microsoft Azure</li>
          <li>Worked with Docker and Kubernetes for containerized applications</li>
          <li>Monitored and optimized application performance and cloud resources</li>
          <li>Collaborated with development and operations teams to streamline releases</li>
        </ul>

        <p className="text-lg mb-4">
          I enjoy solving infrastructure and deployment challenges, improving system
          reliability, and building scalable cloud-native solutions through automation
          and DevOps best practices.
        </p>

        <h2 className="text-2xl font-bold mb-2">🌟 Technical Skills:</h2>
        <p className="text-lg mb-4">
          <strong>Cloud Platforms:</strong> Microsoft Azure 
          <br />
          <strong>DevOps & CI/CD:</strong> Azure DevOps, GitHub Actions, Jenkins, Git
          <br />
          <strong>Infrastructure as Code:</strong> Terraform, ARM Templates
          <br />
          <strong>Containers & Kubernetes:</strong> Docker, Kubernetes, Azure Kubernetes Service (AKS)
          <br />
          <strong>Scripting:</strong>  Bash, YAML
          <br />
          <strong>Monitoring & Observability:</strong> Azure Monitor, Log Analytics, Application Insights
          <br />
          <strong>Networking & Security:</strong> VNets, NSGs, Load Balancers, Key Vault, Managed Identities
          <br />
          <strong>Operating Systems:</strong> Windows Server, Linux
        </p>

        <h2 className="text-2xl font-bold mb-2">👨‍💻 Core Competencies:</h2>
        <ul className="list-disc list-inside mb-4">
          <li>✔️ Problem-Solving Skills</li>
          <li>✔️ Team Collaboration</li>
          <li>✔️ Time Management</li>
          <li>✔️ Leadership</li>
          <li>✔️ Curiosity & Innovation</li>
          <li>✔️ Strong Communication Skills</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">🚀 Let's Collaborate!</h2>
        <p className="text-lg mb-4">
          I'm actively exploring opportunities in DevOps, Cloud Engineering,
          and Platform Engineering. I enjoy designing and automating cloud 
          infrastructure, implementing CI/CD pipelines, managing Kubernetes environments 
          , and leveraging Infrastructure as Code with Terraform. If you're looking for a professional 
          who can contribute to scalable, secure, and highly available cloud platforms, let's connect and build something impactful together.
        </p>

        <p className="text-lg">
          <strong>📧 Reach me at:</strong>{" "}
          <a
            href="mailto:2025lokeshsaikumarreddy@gmail.com"
            className="text-blue-500"
          >
            2025lokeshsaikumarreddy@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
