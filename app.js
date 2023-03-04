const featuredJobs = {
    "jobs": [
        {
            "id": 1,
            "company": "Acme Inc.",
            "position": "Web Developer",
            "location": "New York, NY",
            "description": "We are seeking a talented web developer to join our team and help build our next generation web applications.",
            "requirements": "3+ years of experience with HTML, CSS, and JavaScript. Experience with React and Node.js is a plus.",
            "date": "2023-03-01",
            "salary": "$80,000 - $100,000"
          },
          {
            "id": 2,
            "company": "Tech Innovators",
            "position": "Software Engineer",
            "location": "San Francisco, CA",
            "description": "We are seeking a software engineer to join our team and help develop cutting-edge software products for our clients.",
            "requirements": "5+ years of experience with Java or C++. Experience with cloud technologies is a plus.",
            "date": "2023-03-05",
            "salary": "$100,000 - $120,000"
          },
          {
            "id": 3,
            "company": "Startup Co.",
            "position": "Full Stack Developer",
            "location": "Austin, TX",
            "description": "We are seeking a full stack developer to join our startup team and help us build innovative new products.",
            "requirements": "2+ years of experience with HTML, CSS, JavaScript, and Node.js. Experience with React and database technologies is a plus.",
            "date": "2023-03-10",
            "salary": "$60,000 - $80,000"
          },
          {
            "id": 4,
            "company": "Big Data Corp.",
            "position": "Data Scientist",
            "location": "Seattle, WA",
            "description": "We are seeking a talented data scientist to join our team and help us analyze and interpret large data sets.",
            "requirements": "5+ years of experience with Python, R, and SQL. Experience with machine learning and statistical analysis is a plus.",
            "date": "2023-03-15",
            "salary": "$120,000 - $150,000"
          },
          {
            "id": 5,
            "company": "E-commerce Co.",
            "position": "Frontend Developer",
            "location": "Los Angeles, CA",
            "description": "We are seeking a frontend developer to join our team and help build beautiful and responsive web applications.",
            "requirements": "3+ years of experience with HTML, CSS, and JavaScript. Experience with React and responsive design is a plus.",
            "date": "2023-03-20",
            "salary": "$90,000 - $110,000"
          },
          {
            "id": 6,
            "company": "Finance Inc.",
            "position": "Financial Analyst",
            "location": "Chicago, IL",
            "description": "We are seeking a financial analyst to join our team and help us with financial modeling, forecasting, and analysis.",
            "requirements": "5+ years of experience in financial analysis. Experience with Excel and financial modeling is a plus.",
            "date": "2023-03-25",
            "salary": "$100,000 - $120,000"
          },
          {
            "id": 7,
            "company": "Design Agency",
            "position": "UX Designer",
            "location": "Seattle, WA",
            "description": "We are seeking a UX designer to help us design and create beautiful user experiences for our clients.",
            "requirements": "2+ years of experience with user-centered design and UX design tools. Experience with graphic design is a plus.",
            "date": "2023-03-20",
            "salary": "$50,000 - $70,000"
          },
          {
            "id": 8,
            "company": "Digital Marketing Co.",
            "position": "Digital Marketing Specialist",
            "location": "Boston, MA",
            "description": "We are seeking a digital marketing specialist to help us develop and execute digital marketing campaigns for our clients.",
            "requirements": "3+ years of experience with digital marketing channels and tools. Experience with SEO and PPC is a plus.",
            "date": "2023-03-25",
            "salary": "$60,000 - $80,000"
          },
          
          {
            "id": 9,
            "company": "Big Data Co.",
            "position": "Data Scientist",
            "location": "Seattle, WA",
            "description": "We are seeking a data scientist to join our team and help us analyze and interpret large datasets.",
            "requirements": "3+ years of experience with data analysis and machine learning. Strong programming skills in Python or R.",
            "date": "2023-03-15",
            "salary": "$90,000 - $110,000"
          },
          {
            "id": 10,
            "company": "Design Studio",
            "position": "UI/UX Designer",
            "location": "Los Angeles, CA",
            "description": "We are seeking a talented UI/UX designer to join our team and help us design beautiful and intuitive user interfaces.",
            "requirements": "3+ years of experience in UI/UX design. Proficient in design software such as Sketch or Adobe XD.",
            "date": "2023-03-20",
            "salary": "$70,000 - $90,000"
          },
          {
            "id": 11,
            "company": "E-commerce Corp.",
            "position": "Marketing Manager",
            "location": "New York, NY",
            "description": "We are seeking a marketing manager to join our team and help us grow our e-commerce business.",
            "requirements": "5+ years of experience in marketing. Strong communication and analytical skills.",
            "date": "2023-03-25",
            "salary": "$80,000 - $100,000"
          },
          {
            "id": 12,
            "company": "Finance Solutions",
            "position": "Financial Analyst",
            "location": "Chicago, IL",
            "description": "We are seeking a financial analyst to join our team and help us analyze and manage our financial data.",
            "requirements": "3+ years of experience in finance. Proficient in financial modeling and data analysis software.",
            "date": "2023-04-01",
            "salary": "$70,000 - $90,000"
          },
          {
            "id": 13,
            "company": "Health Innovators",
            "position": "Medical Researcher",
            "location": "Boston, MA",
            "description": "We are seeking a medical researcher to join our team and help us conduct innovative medical research.",
            "requirements": "5+ years of experience in medical research. Strong knowledge of statistical analysis and research methodology.",
            "date": "2023-04-05",
            "salary": "$100,000 - $120,000"
          },
          {
            "id": 4,
            "company": "Global Corp.",
            "position": "Data Analyst",
            "location": "London, UK",
            "description": "We are seeking a data analyst to join our team and help us extract insights from our vast data sets.",
            "requirements": "3+ years of experience with SQL and data analysis. Experience with Python and machine learning is a plus.",
            "date": "2023-03-15",
            "salary": "£50,000 - £70,000"
          }
    ]
  };


  
  const featuredJobsContainer = document.getElementById("featured-jobs-container");
  
  function renderJobs(jobs) {
    featuredJobsContainer.innerHTML = "";
    jobs.forEach(job => {
      const jobHtml = `
        <div class="job">
          <h3>${job.company} - ${job.position}</h3>
          <p>${job.location} | ${job.salary}</p>
          <p>${job.description}</p>
          <p><strong>Requirements:</strong> ${job.requirements}</p>
          <p><strong>Date Posted:</strong> ${job.date}</p>
          <button class="apply-button">Apply now</button>            
        </div>
      `;
      featuredJobsContainer.insertAdjacentHTML("beforeend", jobHtml);
    });
  }
  
  function applyFilters(keyword, location) {
    const filteredJobs = featuredJobs.jobs.filter(job => {
      const keywordMatch = job.position.toLowerCase().includes(keyword.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return keywordMatch && locationMatch;
    });
    renderJobs(filteredJobs);
  }
  
  const filtersForm = document.querySelector("#filters form");
  filtersForm.addEventListener("submit", event => {
    event.preventDefault();
    const keywordInput = document.getElementById("keyword-input");
    const locationInput = document.getElementById("location-input");
    const keyword = keywordInput.value.trim();
    const location = locationInput.value.trim();
    applyFilters(keyword, location);
  });

  // Get reference to the search jobs button
const searchJobsBtn = document.getElementById("search-jobs-btn");

// Attach a click event listener to the button
searchJobsBtn.addEventListener("click", () => {
  // Fetch the job data from the JSON file
  fetch("jobs-data.json")
    .then(response => response.json())
    .then(data => {
      // Get reference to the featured jobs container
      const featuredJobsContainer = document.getElementById("featured-jobs-container");

      // Clear any existing job listings
      featuredJobsContainer.innerHTML = "";

      // Loop through each job and create a new HTML element for it
      data.jobs.forEach(job => {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");

        jobElement.innerHTML = `
          <h3>${job.company} - ${job.position}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Description:</strong> ${job.description}</p>
          <p><strong>Requirements:</strong> ${job.requirements}</p>
          <p><strong>Salary:</strong> ${job.salary}</p>
          <a href="#" class="btn apply-now-btn">Apply Now</a>
        `;

        // Add the job element to the featured jobs container
        featuredJobsContainer.appendChild(jobElement);
      });
    })
    .catch(error => console.error(error));
});
  