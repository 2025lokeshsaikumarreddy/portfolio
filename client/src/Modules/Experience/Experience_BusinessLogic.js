import { fetchData } from "../../Services/portfolioservice";
import { hideLoader, showLoader } from "../../Redux/loader";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

export class Experience_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch experience data from the API
  async fetchExperienceData(objContext) {
    try {
      objContext.reduxDispatch(showLoader());
      // const experiences = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/api/Experience/GetData",
      // });
      const experiences = [
{
id: 0,
jobTitle: "Cloud Administrator",
company: "IBM India Pvt. Ltd.",
logo: PUBLIC_URL + "/assets/IBM.png",
responsibilities: [
"Managed and supported Microsoft Azure cloud infrastructure, ensuring high availability and operational stability of enterprise applications.",
"Administered Azure App Services, Storage Accounts, Key Vaults, Virtual Networks, and Load Balancers across multiple environments.",
"Performed incident management, troubleshooting, and root cause analysis for production issues, minimizing downtime and improving service reliability.",
"Implemented monitoring and alerting solutions using Azure Monitor, Log Analytics, and Application Insights.",
"Collaborated with development teams to support application deployments and environment configuration management."
],
fromDate: "09/2021",
toDate: "08/2022",
},

{
id: 1,
jobTitle: "DevOps Engineer",
company: "IBM India Pvt. Ltd.",
logo: PUBLIC_URL + "/assets/IBM.png",
responsibilities: [
"Designed and maintained CI/CD pipelines using Azure DevOps, enabling automated build, test, and deployment processes.",
"Integrated source control, automated approvals, release gates, and deployment strategies to improve software delivery efficiency.",
"Containerized applications using Docker and supported Kubernetes-based deployments for scalable and resilient workloads.",
"Automated operational tasks using PowerShell, Bash, and YAML pipelines, reducing manual effort and deployment risks.",
"Worked closely with development and QA teams to streamline release management and improve deployment success rates."
],
fromDate: "09/2022",
toDate: "12/2024",
},

{
id: 2,
jobTitle: "Cloud & DevOps Engineer",
company: "IBM India Pvt. Ltd.",
logo: PUBLIC_URL + "/assets/IBM.png",
responsibilities: [
"Implemented Infrastructure as Code (IaC) using Terraform to provision and manage Azure resources consistently across environments.",
"Managed Kubernetes clusters, cloud networking, security controls, and deployment automation for enterprise-grade applications.",
"Enhanced cloud security through Azure RBAC, Managed Identities, Key Vault integration, and governance policies.",
"Optimized cloud resource utilization and deployment workflows, improving operational efficiency and reducing provisioning time.",
"Contributed to Azure DevOps transformation initiatives by promoting automation, scalability, and cloud-native best practices."
],
fromDate: "01/2025",
toDate: "Present",
},
];


      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          experiences: experiences,
        },
      });
    } catch (error) {
      console.error("Failed to fetch experience data:", error);
    } finally {
      setTimeout(() => {
        objContext.reduxDispatch(hideLoader());
        objContext.dispatch({
          type: "SET_STATE",
          payload: {
            isDataLoaded: true,
          },
        });
      }, 500);
    }
  }
}
