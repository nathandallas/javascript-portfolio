fetch("utils/projects.json")
  .then(response => response.json())
  .then(data => {
    initProjectCards("#projects", data);
  })
  .catch(error => {
    console.error("Error loading project data:", error);
  });

class projectCard {
  constructor(data) {
    this.data = data;
  }

  render() {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";

    projectDiv.innerHTML = `
      <div class="project__container">
        <img src="${this.data.imageSrc}" alt="${this.data.imageAlt}" />
        <h4>${this.data.featuredText}</h4>
        <h3>${this.data.title}</h3>
        <p>${this.data.description}</p>
        <ul class="technologies">
          ${this.data.technologies.map(tech => `<li>${tech}</li>`).join("")}
        </ul>
        <ul class="links">
          ${this.data.links.map(link => `<a href="${link.url}" ${link.isExternal ? 'target="_blank" rel="noopener noreferrer"' : ""}>${link.text}</a>`).join("")}
        </ul>
      </div>
    `;

    return projectDiv;
  }
}

// Function to initialize components from JSON data
function initProjectCards(containerSelector, projectsData) {
  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error(`Container with selector '${containerSelector}' not found`);
    return;
  }

  projectsData.forEach(projectData => {
    const project = new projectCard(projectData);
    container.appendChild(project.render());
  });
}

// Export for module usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { projectCard, initProjectCards };
}
