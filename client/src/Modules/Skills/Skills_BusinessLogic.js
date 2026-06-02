import { hideLoader, showLoader } from "../../Redux/loader";
import { fetchData } from "../../Services/portfolioservice";

export class Skills_BusinessLogic {
  // Handle form input changes
  handleInputChange(objContext, field, value) {
    objContext.dispatch({
      type: "UPDATE_FIELD",
      field,
      value,
    });
  }

  // Fetch skills data from the API
  async fetchSkillsData(objContext) {
    try {
      objContext.reduxDispatch(showLoader());
      // const skills = await fetchData({
      //   endpoint:
      //     "https://myportifolioapi.azurewebsites.net/api/Skills/GetData",
      // });
      const skills = [
// Cloud Platforms
{
id: 1,
skill: "Microsoft Azure",
proficiency: null,
category: "Cloud Platforms",
},
{
id: 2,
skill: "Amazon Web Services (AWS)",
proficiency: null,
category: "Cloud Platforms",
},

// Infrastructure as Code
{
id: 3,
skill: "Terraform",
proficiency: null,
category: "Infrastructure as Code",
},
{
id: 4,
skill: "ARM Templates",
proficiency: null,
category: "Infrastructure as Code",
},

// CI/CD & DevOps
{
id: 5,
skill: "Azure DevOps",
proficiency: null,
category: "CI/CD & DevOps",
},
{
id: 6,
skill: "GitHub Actions",
proficiency: null,
category: "CI/CD & DevOps",
},
{
id: 7,
skill: "CI/CD Pipelines",
proficiency: null,
category: "CI/CD & DevOps",
},
{
id: 8,
skill: "Release Management",
proficiency: null,
category: "CI/CD & DevOps",
},

// Containers & Orchestration
{
id: 9,
skill: "Docker",
proficiency: null,
category: "Containers & Orchestration",
},
{
id: 10,
skill: "Kubernetes",
proficiency: null,
category: "Containers & Orchestration",
},
{
id: 11,
skill: "Azure Kubernetes Service (AKS)",
proficiency: null,
category: "Containers & Orchestration",
},

// Monitoring & Logging
{
id: 12,
skill: "Azure Monitor",
proficiency: null,
category: "Monitoring & Observability",
},
{
id: 13,
skill: "Log Analytics",
proficiency: null,
category: "Monitoring & Observability",
},
{
id: 14,
skill: "Application Insights",
proficiency: null,
category: "Monitoring & Observability",
},

// Scripting & Automation
{
id: 15,
skill: "PowerShell",
proficiency: null,
category: "Scripting & Automation",
},
{
id: 16,
skill: "Bash",
proficiency: null,
category: "Scripting & Automation",
},
{
id: 17,
skill: "YAML",
proficiency: null,
category: "Scripting & Automation",
},

// Networking & Security
{
id: 18,
skill: "Azure Virtual Networks",
proficiency: null,
category: "Networking & Security",
},
{
id: 19,
skill: "Network Security Groups",
proficiency: null,
category: "Networking & Security",
},
{
id: 20,
skill: "Azure Key Vault",
proficiency: null,
category: "Networking & Security",
},
{
id: 21,
skill: "RBAC",
proficiency: null,
category: "Networking & Security",
},

// Developer Tools
{
id: 22,
skill: "Git",
proficiency: null,
category: "Developer Tools",
},
{
id: 23,
skill: "Visual Studio Code",
proficiency: null,
category: "Developer Tools",
},

// Operating Systems
{
id: 24,
skill: "Linux",
proficiency: null,
category: "Operating Systems",
},
{
id: 25,
skill: "Windows Server",
proficiency: null,
category: "Operating Systems",
},

// Professional Skills
{
id: 26,
skill: "Incident Management",
proficiency: null,
category: "Professional Skills",
},
{
id: 27,
skill: "Root Cause Analysis",
proficiency: null,
category: "Professional Skills",
},
{
id: 28,
skill: "Agile Methodologies",
proficiency: null,
category: "Professional Skills",
},
];


      objContext.dispatch({
        type: "SET_STATE",
        payload: {
          skills: skills,
        },
      });
    } catch (error) {
      console.error("Failed to fetch skills data:", error);
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
