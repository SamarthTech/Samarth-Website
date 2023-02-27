/* Source Logic */
let selectCategoryBtn = document.querySelectorAll(".select-category-btn");
// Contribution and Resource Box
const resourceBox = document.getElementById("resourceBox");
const contributionGuidline = document.getElementById("contributionGuideline");
// Resource Showcase Section
// const beginnerResourceBox = document.getElementById('beginnerResourceBox');
// const intermediateResourceBox = document.getElementById('intermediateResourceBox',);

contributionBtn.addEventListener("click", (e) => {
  resourceBox.style.display = "none";
  resourceBox1.style.display = "none";
  contributionGuidline.style.display = "block";
  contributionBtn.style.backgroundColor = "#6940d3";
  contributionBtn.style.color = "#fff";
  for (let j = 0; j < category.length; j++) {
    selectBtn[j].style.backgroundColor = "#fff";
    selectBtn[j].style.color = "#000";
  }
  for (let i = 0; i < category.length; i++) {
    let x = category[i].querySelector(".select-option");
    x.style.display = "none";
  }
});

// ************************************************JS for each section*******************************************************************
// *********************************************************Complete*********************************************************************
const ESE = document.getElementById("ESE");
const UPSC = document.getElementById("UPSC");
const CAT = document.getElementById("CAT");
const GATE = document.getElementById("GATE");

ESE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML = `
    <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
    <div class="container mt-3" id="resourceBox1">
    <!--Beginner Resource Box-->
    <h4 class="resource-heading">What is UPSC-ESE?</h4>
    <p>Engineering Services Examination (ESE) is conducted by UPSC which comprises of engineers who are designated as Class - 1 officer and work directly under the Indian Government. Selected candidates administer a large portion of the economy, that includes Telecommunications, Indian Railways, Central Water engineering, Power, Defence service of Engineers, and a lot more. The wide range of responsibilities performed by the Indian Engineering Services (IES) depends on the branch of their Engineering and the department in which they are recruited. It is a great opportunity to work for the nation but for your selection, you will have to undergo stringent selection criteria laid down by UPSC.
    </p>
    <div class="row" id="beginnerResourceBox"></div>
    <h4 class="resource-heading">Stages:</h4>
    <p>The UPSC IES Selection process has three stages, namely, Prelims and Mains, followed by Personality Interview, and Document Verification. A candidate qualifying the Prelims & Mains will be called for a personal Interview. At the end provisionally selected students will have to appear for a document verification, where their documents will be checked for authenticity. Keep reading to know the detailed UPSC IES Selection Process and appear for the exam by filling the online applications before the last date to apply.
    </p>
    <h4 class="resource-heading">Pattern:</h4>
    <h6 class="resource-subheading">For UPSC IES Prelims Examination: </h6>
    <img src = "images/TABLE1.png" class="responsive">
    <br>
    <br>
    <h6 class="resource-subheading">For UPSC IES Mains Examination: </h6><br>
    <img src = "images/TABLE2.png" class="responsive"><br><br>
    <h6 class="resource-subheading">For UPSC IES Personality Examination:</h6>
    <p>
    There is a minimum UPSC IES Cut Off that a candidate has to score to clear the Prelims and Mains exam. Once you clear the Mains you will be informed about the selection and will then be called for an IES Personality Test. The personality test also known as a personal interview will be of 200 marks.
    </p>
    
    <!--Intermediate Resource Box -->
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;

  resourceBox1.style.display = "block";

  // Method 2
  //else use this >>
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';
});

UPSC.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">What is UPSC-CSE?</h4>
  <p>The Civil Services Examination (CSE) is a national competitive examination in India conducted by the Union Public Service Commission for recruitment to higher Civil Services of the Government of India, including the Indian Administrative Service, Indian Foreign Service, and Indian Police Service.
  </p>
  <div class="row" id="beginnerResourceBox"></div>
  <h4 class="resource-heading">Basic Qualifications:</h4>
  <h6 class="resource-subheading">Educational Qualification:</h6>
  <p>Candidate must hold a Graduate Degree from a recognised University. 
  </p>
  <h6 class="resource-subheading">Age Limit:</h6>
  <p>Candidate must be a minimum of 21 years of age and must not be more than 32 years of age.
  </p>
  <h6 class="resource-subheading">The number of attempts: 
  </h6>
  <p>
  <b>General Category:</b> 6 attempts till 32 years of age. <br>
  <b>OBC:</b> 9 attempts till 35 years of age.<br>
  <b>SC/ST:</b> Unlimited attempts till 37 years of age.<br>
  </p>
  <h4 class="resource-heading">Exam Pattern:</h4>
  <p>The UPSC Prelims comprises two objective type papers (General Studies I and General Studies II or CSAT) for a total of 400 marks. Both papers are usually held on the same day in two sessions via offline mode (pen-paper).
  It is objective type in nature and consists of two papers carrying 200 marks each.
  </p>
  <p>UPSC CSE Preliminary Exam is objective type in nature, whereas, the UPSC CSE Mains exam comprises of 9 Subjective papers and a Personality Test (Interview).
  </p>
  <p>While the score in GS Paper-I determines whether or not you qualify for the cut off of prelims, CSAT is qualifying in nature. You only need to score more than 33% or 66 marks for the CSAT paper. Altogether, the preliminary exam is qualifying in nature. Thus, the score does not add up to the final merit.
  </p>
  <p>
  Mostly, the marks awarded for the interview ranges from 40% to 80%. The candidates who score a little less in the main examination written part can make it to the final list if he/she scores well in the interview.
  </p>
    <h4 class="resource-heading">Phases:</h4>
    <p>Broadly, UPSC conducts the Civil Service Examination in three phases namely:</p>
    
    <h6 class="resource-subheading">Preliminary Examination</h6>
    
    <h6 class="resource-subheading">Main Examination</h6>
    
    <h6 class="resource-subheading">Personality Test (Interview)</h6>
    
    <p>Candidates who qualify for all the rounds are recommended for joining the civil services in India. Each round is an elimination round, so you need to qualify each one in order to appear for the next one.</p>
    
    <h4 class="resource-heading">Marks Pattern:</h4>
    <p>
    A candidate's rank in UPSC Civil Service Exam depends only on the mark scored in Main and Interview. The main exam has 1750 marks while interview has 275 marks. The written examination (main) will consist of the following nine papers, but only 7 papers will be counted for final merit ranking.
    </p>
    <p>
    Correct answers 75 x 2 = 150 marks. Each incorrect answer carries a negative marking of o. 33%, which means for every wrong answer 0.66 marks will be deducted. Therefore, in the above example if 25 questions were answered incorrectly then the negative marking for 25 incorrect answers would be 25 x 0.66 = 16.5.
    </p>
    <!--Intermediate Resource Box -->
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;

  resourceBox1.style.display = "block";

  // Method 2
  //else use this >>
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';
});

CAT.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">What is CAT?</h4>
  <p>CAT exam stands for Common Admission Test, which is a computer-based test conducted in India for admission to management programs offered by various Indian Institutes of Management (IIMs) and other leading business schools. The exam is conducted once a year in the month of November. The CAT exam is highly competitive and attracts a large number of applicants every year. 
  </p>
  <div class="row" id="beginnerResourceBox"></div>
  <h4 class="resource-heading">Eligibility:</h4>
  <h6 class="resource-subheading">Educational Qualification:</h6>
  <p>The candidate must have completed a Bachelor's degree or an equivalent qualification from a recognized university or institution. Candidates who are in the final year of their Bachelor's degree program are also eligible to apply.
  </p>
  <h6 class="resource-subheading">Other Criteria:</h6>
  <p>The candidate must have a valid email address and phone number, as all communication regarding the exam will be done through these channels. The candidate must also have a valid government-issued ID proof, such as Aadhar card, passport, PAN card, driving license, etc.
  </p>
  <h4 class="resource-heading">Exam Pattern:</h4>
  <p>The exam consists of three sections:
  </p>
  <ul style="list-style-type:disc;">
  <li><h6 class="resource-subheading">Verbal Ability and Reading Comprehension (VARC)</li></h6>
  <li><h6 class="resource-subheading">Data Interpretation and Logical Reasoning (DILR)</li></h6>
  <li><h6 class="resource-subheading">Quantitative Ability (QA)</li></h6></ul>
  <p>The duration of the exam is 2 hours and 40 minutes, and it consists of 100 multiple-choice questions.The CAT exam tests a candidate's aptitude in quantitative techniques, data interpretation, logical reasoning, and language skills. The exam pattern is designed to assess a candidate's problem-solving ability, analytical thinking, and decision-making skills. </p>
    <h4 class="resource-heading">Marks Pattern:</h4>
    <p>
    <b>Verbal Ability and Reading Comprehension (VARC):</b> This section consists of 34 questions and carries a total of 102 marks. 
    </p>
    <p>
    <b>Data Interpretation and Logical Reasoning (DILR):</b> This section consists of 32 questions and carries a total of 96 marks. The questions are designed to test a candidate's ability to analyse and interpret complex data sets, and to identify logical patterns and structures.</p>
    <p>
    <b>Quantitative Ability (QA):</b> This section consists of 34 questions and carries a total of 102 marks. The questions are designed to test a candidate's mathematical skills, including arithmetic, algebra, geometry, and trigonometry.</p>    <div class="row mt-2" id="intermediateResourceBox"></div>
    <h4 class="resource-heading">Perks of Cracking CAT:</h4>
    <ul style="list-style-type:disc;">
    <li>One of the biggest perks of cracking the CAT exam is the opportunity to get admission to some of the top business schools in India, such as the Indian Institutes of Management (IIMs) and other leading management institutes.</li>
    <li>After completing their management program, CAT graduates can expect to get job offers from some of the best companies in the world. Top recruiters from various industries such as consulting, finance, marketing, and technology visit these campuses to hire students, offering them high-paying job roles and attractive perks.</li>
    <li>A management degree from a top business school can also equip candidates with the necessary skills and knowledge to start their own business.</li>
    </ul>
    <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;

  resourceBox1.style.display = "block";

  // Method 2
  //else use this >>
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';
});

GATE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">What is GATE EXAM?</h4>
  <p>Graduate Aptitude Test in Engineering (GATE) is an examination which is conducted for Master of Engineering (ME), Masters in Technology (MTech) and direct PhD admissions to Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian Institutes of Information Technology (IIITs) and other institutes/universities across India. It also opens the gateway to booming public sector organisations (PSUs) and in the field of research. Some of the PSUs and research organizations which use GATE score for providing jobs include ONGC, NTPC, GAIL, HPCL, PGCIL, BHEL, BSNL, HPCL, NHPC, BARC, DRDO, etc.
  </p>
  <p>GATE is an All-India examination administered and conducted in eight zones across the country by the GATE Committee comprising of faculty members from IISc, Bangalore and other seven IIT’s on behalf of the National Coordinating Board, Department of Education, Ministry of Human Resources Development.</p>
  <div class="row" id="beginnerResourceBox"></div>
  <h4 class="resource-heading">What’s New?</h4>
  <ul style="list-style-type:disc;">
  <li><h6 class="resource-subheading">Two new subjects:</h6>
  <p>Geomatics Engineering (GE) and Naval Architecture and Marine Engineering (NM). The total number of subjects has increased to 29.
  </p></li>
  <li><h6 class="resource-subheading">Paper Combination:</h6>
  <p>In another newly introduced change, students applying for GATE EXAM 2023 can also opt for two different papers from the prescribed set of combinations.
  </p></li>
  <li><h6 class="resource-subheading">Eligibility:</h6>
  <p>Eligibility criteria to appear for GATE-2023 is relaxed from the minimum 10+2+4 (ongoing) to minimum 10+2+3 (ongoing), enabling even those in the third year of their undergraduate studies to appear for the examination, thus providing an additional opportunity to candidates to improve their performance to secure better career options.
  </p></li>
  <li><h6 class="resource-subheading">Exam Pattern:</h6>
  <p>All test papers of GATE EXAM 2023 will be entirely objective type. Pattern of questions may include (i) Multiple Choice Questions (MCQ), (ii) Multiple Select Questions (MSQ), and/or (iii) Numerical Answer Type (NAT) questions.
  </p></li></ul>
  <h4 class="resource-heading">GATE Subject Codes:</h4>
  <p>While filling GATE form, candidates can apply for two subject papers from the prescribed set of combinations out of the 29 papers listed in the table given below. Candidates are expected to appear in a paper appropriate to the discipline of their qualifying degree. However, candidates are free to choose any paper according to their admission plan, keeping in mind the eligibility criteria of the institutions in which they wish to seek admission.
  </p>
  <img src = "images/code1.png" class="responsive">
  <img src = "images/code2.png" class="responsive"><br><br>

  <h4 class="resource-heading">With a successful attempt in GATE, an aspirant can choose the most suitable option from wide range of roads to travel to his final career destination :</h4>
  <ul style="list-style-type:disc;">
  <li>Students can pursue M.Tech/M.S/ M.E/Ph.D from IISc Bangalore, IITs, NITs, IIITs and other reputed institutes.</li>
  <li>Students can pursue Post Graduate Diploma in Industrial Engineering (PGDIE), Post Graduate Diploma in Manufacturing Management(PGDMM), Post Graduate Diploma in Project Management(PGDPM) from NITIE Mumbai.</li>
  <li>Several reputed Maharatna and Navratna PSUs and research organizations recruit on basis of GATE Score. i.e. IOCL, NTPC, BHEL, PGCIL, BARC, CSIR etc.</li>
  <li>Teaching: Professor, Asst. Professor at IITs, NITs and other reputed educational institutes.</li>
  <li>Junior Research Fellow: ISRO, DRDO, BARC, CSIR, IITs etc.</li>
  <li>Senior Research Fellow: ISRO, DRDO, BARC, CSIR, IITs etc.</li>
  <li>Junior/Senior Research Associates.</li>
  <li>Scientists “C” grade jobs.</li>
  <li>Lucrative opportunities in research & development after post-graduation.</li>
  <li>Multinational firms shortlist candidates on the basis of GATE score.</li>
  <li>Some international universities offers M.S or Ph.D programs on the basis of GATE Score.</li>
  </ul>


  <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
});

// ************************************************************************************
// ********************************************************Incomplete Section********************************************************
const CSE = document.getElementById("CSE");
const ECE = document.getElementById("ECE");
const SSC = document.getElementById("SSC");
const CDS = document.getElementById("CDS");
const AFCAT = document.getElementById("AFCAT");
const EE = document.getElementById("EE");
const ME = document.getElementById("ME");
const CE = document.getElementById("CE");
const ARCH = document.getElementById("ARCH");
const ESEME = document.getElementById("ESEME");
const ESEEE = document.getElementById("ESEEE");
const ESEECE = document.getElementById("ESEECE");
const ESECE = document.getElementById("ESECE");
const resourceBox1 = document.getElementById("resourceBox1");
const resourceBox2 = document.getElementById("resourceBox2");

SSC.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
CDS.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
AFCAT.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ESEME.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ESEEE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ESEECE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ESECE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});

CE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ME.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
EE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
ARCH.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
CDS.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});

CSE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});

ECE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading center">To be Updated Soon!</h4>
    </div>`;
});
