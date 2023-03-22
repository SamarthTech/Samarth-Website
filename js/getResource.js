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
const ECE = document.getElementById("ECE");
const CSE = document.getElementById("CSE");
const EE = document.getElementById("EE");
const SSC = document.getElementById("SSC");
const ESME = document.getElementById("ESEME");
const CE = document.getElementById("CE");

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

ESME.addEventListener( "click" , (e)=>{
  contributionGuidline.style.display = "none";
  //resourceBox.style.display = "none";
  //resourceBox.style.display = "block";

  //Method 1
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">UPSC Mechanical Syllabus:</h4>
  <p>The UPSC Mechanical Engineering syllabus covers various topics related to mechanical engineering. Here is the syllabus for the UPSC Mechanical Engineering exam:
  </p>
  <div class="row" id="beginnerResourceBox"></div>
  <h6 class="resource-subheading">1.Engineering Mechanics:</h6>
  <p>Force systems, Equilibrium, Friction, Dynamics, Kinematics, and Kinetics of particles and rigid bodies. 
  </p>
  <h6 class="resource-subheading">2.Strength Of Materials:</h6>
  <p>Stress and strain, Elastic constants, Poisson's ratio, Thermal stresses, Bending moment and shear force diagrams, Theory of bending and torsion. 
  </p>
  <h6 class="resource-subheading">3.Theory Of Machines:</h6>
  <p>Kinematics and dynamics of machines, Cams, Gears, Flywheels, Governors, Balancing of reciprocating and rotating masses
  </p>
  <h6 class="resource-subheading">4.Design Of Machine Elements:</h6>
  <p>Design of Joints, Bearings, Shafts, Spur gears, and Belt drives 
  </p>
  <h6 class="resource-subheading">5.Manufacturing Technology:</h6>
  <p>Metal casting, Metal Forming, Machining, Joining processes, Non-traditional manufacturing processes, Computer Integrated Manufacturing. 
  </p>
  <h6 class="resource-subheading">6.Industrial Engineering:</h6>
  <p>Production planning and control, Work study, Facilities Planning, Quality control, Operation research, Inventory control. 
  </p>
  <h6 class="resource-subheading">7.Thermodynamics:</h6>
  <p>Thermodynamic systems and processes, Laws of Thermodynamics, Open and closed systems, Heat transfer, Refrigeration, and Air Conditioning. 
  </p>
  <h6 class="resource-subheading">8.Heat Transfer:</h6>
  <p>Modes of heat transfer, Conduction, Convection, Radiation, Heat exchangers, Heat transfer by fins. 
  </p>
  <h6 class="resource-subheading">9.Material science:</h6>
  <p>Mechanical properties and testing, Heat treatment, Ferrous and non-ferrous metals, Ceramic, and composite materials. 
  </p>
  <h4 class="resource-heading">Booklist for Mechanical Engineering Optional For UPSC:</h4>
  <p>1.Fundamentals of Classed Thermodynamics - Van Wylen
     2.Engineering Heat Transfer - Gupta Prakash
     3.Energy Conversion - Sukhalmoy
     4.Environmental Pollution Central Engineering C S Rao
     5.Surveying and Levelling - T P Kanetakar
     6.Heat Conversion - Arora & Kundwar
     7.Manufacturing Science - R K Jain
     8.Thermodynamics - R Yadav Theory of Mechanics - S S Rattan
     9.Theory of Mechanism and Mechanics - Jagdish Lal.
     10.Engineering Mechanics of Solids - Popov E
     11.Manufacturing Science - Ghosh and Malik
     12.Manufacturing Technology - P N Rao
     13.Production Management - R K Jain
     14.Principles of Manufacturing Material & Process - Campbeu 
     15.Heat and Mass Transfer - R. Yadav
  </p>
    <h4 class="resource-heading">Preparation Strategy for UPSC Mechanical Engineering Optional:</h4>
    <p>
    1.Step zero should be to get a hang of what kind of questions are being asked in the examination. Refer to the previous year’s papers and analyze them thoroughly. This will give you an idea of what exactly you need to prepare and the depth of knowledge you should have.
    2.Next, go for studying the theoretical aspects of the syllabus from the standard books and notes that are available. You can leverage NPTEL lectures and Made easy notes to cover this part.
    3.Then, go for solving numerical problems. Start with solving solved examples from standard textbooks. Once you have done that, go for solving the numerical from previous year papers.
    4.The next and the most important part of the preparation strategy is the thorough revision that you should incorporate into your preparation on a daily, weekly, and monthly basis. Try to revise the entire syllabus at least twice before the Mains examination.
    </p>
    <!--Intermediate Resource Box -->
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>
  `;

  resourceBox1.style.display = "block";

  // Method 2
  //else use this >>
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';
});

CE.addEventListener( "click" , (e)=>{
  contributionGuidline.style.display = "none";
  //resourceBox.style.display = "none";
  //resourceBox.style.display = "block";

  //Method 1
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">Gate Civil Syllabus :</h4>
  <p>The GATE Civil Engineering syllabus covers various topics related to civil engineering. Here is the syllabus for the GATE Civil Engineering paper:
  </p>
  <div class="row" id="beginnerResourceBox"></div>
  <h6 class="resource-subheading">1.Engineering Mathematics:</h6>
  <p>Linear Algebra, Calculus, Differential Equations, Probability and Statistics, and Numerical Methods. 
  </p>
  <h6 class="resource-subheading">2.Structural Engineering:</h6>
  <p>Mechanics, Structural Analysis, Concrete Structures, Steel Structures 
  </p>
  <h6 class="resource-subheading">3.Geotechnical Engineering:</h6>
  <p>Soil Mechanics, Foundation Engineering
  </p>
  <h6 class="resource-subheading">4.Water Resources Engineering:</h6>
  <p>Fluid Mechanics, Hydraulics, Hydrology, Irrigation, Water Supply Engineering, Environmental Engineering 
  </p>
  <h6 class="resource-subheading">5.Environmental Engineering:</h6>
  <p>Water and wastewater treatment, Air Pollution, Municipal Solid Wastes, Noise Pollution 
  </p>
  <h6 class="resource-subheading">6.Transportation Engineering:</h6>
  <p>Highway Planning and Design, Traffic Engineering 
  </p>
  <h4 class="resource-heading">GATE Examination Pattern</h4>
  <p>
  Application form for GATE is released in tentatively in September first week in online mode. The GATE exam 2023 will be conducted online as a computer based test across various test cities of India and abroad.
  </p>
  <table style="border:1px solid black">
  <tr style="border:1px solid black"><th style="border:1px solid black"> Particulars </th> <th style="border:1px solid black"> Details </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Number of Questions in Paper </th> <th style="border:1px solid black"> 65 </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Number of Sections </th><th style="border:1px solid black"> Section 1- General Aptitude, Section 2 - Mathematics and Civil Engineering </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Topic-wise weightage </th><th style="border:1px solid black"> General Aptitude 15%Mathematics - 13%Civil Engineering- 72% </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Pattern of Questions </th><th style="border:1px solid black"> Multiple Choice Question (MCQs) and Numerical Answer Type Questions (NAT) </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Duration of Exam </th><th style="border:1px solid black"> 3 Hours </th> </tr>  
  <tr style="border:1px solid black"><th style="border:1px solid black"> Marking Scheme </th><th style="border:1px solid black"> Test Paper have questions carrying 1 mark and 2 marks⅓ negative mark for incorrect answer </th> </tr>  
  </table>
  <h3 class="resource-heading">Books for GATE Civil Engineering</h3>
  <table>
  <tr style="border:1px solid black"><th style="border:1px solid black">Sections</th><th style="border:1px solid black">Important Topics</th><th style="border:1px solid black">GATE Civil Engineering Books</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Engineering Mathematics</th><th style="border:1px solid black">Linear AlgebraCalculusComplex AnalysisDifferential EquationsProbability and Statistics</th><th style="border:1px solid black">Discrete Mathematics and Its Applications by Kenneth RosenHigher Engineering mathematics by B.S. GrewalAdvanced Engineering Mathematics by Erwin Kreyszig</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Structural Engineering</th><th style="border:1px solid black">Statically Determinate and Indeterminate Structures by Force/Energy MethodsMethod of SuperpositionAnalysis of TrussesStructural Analysis with all its Methods</th><th style="border:1px solid black">Theory of Structure by CK Wang, S. Rammamrutham, L.S. Negi & JangitTheory of Elasticity by Timoshenko & GereTheory of Structure by Wilbur & NorrisStrength of Materials/Mechanics of Structure by Gere & Timoshenko,E. Popove, L. Singer,B.C. Punamia, Rammamrutham</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Geotechnical Engineering</th><th style="border:1px solid black">Basic Properties and Classification of SoilsConsolidationPermeabilitySeepageShear Strength of SoilStability Analysis of SlopesBearing CapacityFoundation EngineeringConcrete Technology</th><th style="border:1px solid black">Soil Mechanics by Gopal Ranjan & Rao,Venkat Ramaiha,S. K. Garg,B.C. Punamia, V N S Murthy</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Water Resource Engineering</th><th style="border:1px solid black">Fluid StaticsKinematicsDynamicsLaminar – Turbulent FlowFlow Through PipesOpen Channel Flow HydraulicsBL TheoryDimension AnalysisHydraulic PumpsHydrologic CycleGround Water Hydrology</th><th style="border:1px solid black">Water Resources by S K GargWater and Waste Water by SK Garg 1 and 2Fluid Mechanics- RK Bansal and Fox and Richard</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Transportation Engineering</th><th style="border:1px solid black">Highway EngineeringTransportation InfrastructureGeometric Design of Railway TrackHighway PavementsTraffic Engineering</th><th style="border:1px solid black">Transportation by Justo Khanna</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Environmental Engineering</th><th style="border:1px solid black">Quality StandardsDomestic Wastewater TreatmentWater and Waste Water DisposalAir PollutionMeteorologyNoise PollutionMunicipal Solid WasteQuality and Characteristics of SewageTreatment of Sewage</th><th style="border:1px solid black">Environmental Engineering by S. K. Garg Part I & Part IIWaste Water Engineering by B. C. Punmia Part I & Part II</th></tr>
  <tr style="border:1px solid black"><th style="border:1px solid black">Geomatics Engineering</th><th style="border:1px solid black">Basics of Geographical Information System (GIS)Geographical Positioning System (GPS)Linear MeasurementsCompass SurveyLeveling</th><th style="border:1px solid black">Surveying (vol. 1,2,3) by B.C.Punmia, Ashok Jain, Arun Jain</th></tr>
</table>
    <!--Intermediate Resource Box -->
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>
  `;
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

ECE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">Syllabus for GATE ECE:</h4>
  <p>The GATE (Graduate Aptitude Test in Engineering) syllabus for Electronics and Communication Engineering (ECE) is as follows:
  </p>
  <ul style="list-style-type:disc;">
  <li><h6 class="resource-subheading">Engineering Mathematics:</h6>
  <p>Linear Algebra, Calculus, Differential equations, Complex variables, Probability and Statistics, Numerical Methods, Transform Theory
  </p></li>
  <li><h6 class="resource-subheading">Networks, Signals, and Systems:</h6>
  <p>Network solution methods, Network theorems, Resonant circuits, Filters, Time-domain analysis of signals and systems, Fourier series, Fourier transform, Laplace transform, Z-transform, Continuous-time and discrete-time signals, and systems, Sampled data systems, Pulse shaping, Signal transmission through linear time-invariant systems.
  </p></li>
  <li><h6 class="resource-subheading">Electronic Devices:</h6>
  <p>Energy bands in intrinsic and extrinsic silicon, Carrier transport in a semiconductor, Carrier generation and recombination, p-n junction diode, BJT, MOS capacitor, MOSFET, LED, p-I-n and avalanche photo-diode, Basics of LASERs, Tunnel diodes, Zener diodes, Schottky diodes, Rectifiers, and power supplies.
  </p></li>
  <li><h6 class="resource-subheading">Analog Circuits:</h6>
  <p>Small signal equivalent circuits of diodes, BJTs, and MOSFETs, Simple diode circuits, Clipping, clamping, rectifier circuits, Biasing and bias stability of transistor and FET amplifiers, Amplifiers: single and multi-stage, differential, operational, feedback and power, the Frequency response of amplifiers, Simple op-amp circuits, Filters, Sinusoidal oscillators; criterion for oscillation; single-transistor and op-amp configurations, Function generators, Wave-shaping circuits.
  </p></li>
  <li><h6 class="resource-subheading">Digital Circuits:</h6>
  <p>Boolean algebra, minimization of Boolean functions, Logic gates, Digital IC families (DTL, TTL, ECL, MOS, CMOS), Combinational circuits: arithmetic circuits, code converters, multiplexers, and decoders, Sequential circuits: latches and flip-flops, counters and shift-registers, Sample and hold circuits, ADCs and DACs, Semiconductor memories, Microprocessor (8085): architecture, programming, memory, and I/O interfacing.
  </p></li>
  <li><h6 class="resource-subheading">Control Systems:</h6>
  <p>Basic control system components; block diagrammatic description, reduction of block diagrams, Signal flow graphs, Mason's Gain formula, Time domain analysis of control systems, Stability; Routh-Hurwitz criterion, Root loci, Bode and Nyquist plots, Feedback compensators, Lag, lead and lag-lead compensators, Digital control: basics, sampling, reconstruction, and aliasing; design of digital controllers.
  </p></li>
  <li><h6 class="resource-subheading">Communications:</h6>
  <p>Random processes: autocorrelation and power spectral density, properties of white noise, filtering of random signals through LTI systems, Analog communications: amplitude modulation and demodulation, angle modulation and demodulation, spectra of AM and FM, superheterodyne receivers, circuits for analog communications, Digital communications: PCM, DPCM, digital modulation schemes (ASK, PSK, FSK, QAM), the bandwidth of digital modulation schemes, SNR and BER for digital modulation, Fundamentals of information theory and channel capacity theorem.
  </p></li>
  <li><h6 class="resource-subheading">Electromagnetics:</h6>
  <p>Electrostatics; Maxwell’s equations; wave propagation in free space, dielectrics, and conductors; transmission lines: characteristic impedance; impedance transformation; Smith chart; impedance matching; waveguides; basics of antenna radiation: pattern, gain, and directivity; basics of radar: pulsed and CW radars, radar equation, and matched filter.
  </p></li>
  </ul>
  <h4 class="resource-heading">Marking Scheme:</h4>
  <img src="images/ece.png" class="responsive">
  <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
});

EE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">Syllabus for GATE EE:</h4>
  <p>The GATE (Graduate Aptitude Test in Engineering) syllabus for Electronics Engineering (EE) is as follows:
  </p>
  <ul style="list-style-type:disc;">
  <li><h6 class="resource-subheading">Engineering Mathematics:</h6>
  <p>Linear Algebra, Calculus, Differential equations, Complex variables, Probability and Statistics, Numerical Methods, Transform Theory
  </p></li>
  <li><h6 class="resource-subheading">Electric Circuits:</h6>
  <p>Network graph, KCL, KVL, Node and Mesh analysis, Circuit theorems, One-port and two-port networks, Resonant circuits, Passive filters, Ideal current and voltage sources, Thevenin’s, Norton’s and Superposition and Maximum Power Transfer theorems, Two-element devices, Three-phase circuits, Power and power factor in ac circuits.
  </p></li>
  <li><h6 class="resource-subheading">Electromagnetic Fields:</h6>
  <p>Coulomb's Law, Electric Field Intensity, Electric Flux Density, Gauss's Law, Divergence, Curl, Ampere's Law, Magnetic Field Intensity, Magnetic Flux Density, Faraday's Law, Electromagnetic Induction, Maxwell's equations, Wave equations, Poynting theorem, Transmission lines, Waveguides, Antennas, Radar Equation.
  </p></li>
  <li><h6 class="resource-subheading">Signals and Systems:</h6>
  <p>Representation of continuous and discrete-time signals, Linear Time-Invariant (LTI) Systems, Fourier series representation of continuous periodic signals, Fourier Transform and properties, Laplace Transform and properties, Z-Transform and properties, Discrete Fourier Transform and Fast Fourier Transform, Convolution and Correlation of signals, Sampling theorem and applications, Linear Time-Invariant (LTI) Systems impulse response, transfer function, and frequency response, Stability and causality.
  </p></li>
  <li><h6 class="resource-subheading">Electrical Machines:</h6>
  <p>Single-phase transformer: equivalent circuit, phasor diagram, open-circuit and short-circuit tests, Regulation, Efficiency; Three-phase transformers: connections, parallel operation; Auto-transformer, Electromechanical energy conversion principles, DC machines: separately excited, series and shunt, motoring and generating mode of operation and their characteristics, starting and speed control of DC motors, Three-phase induction motors: the principle of operation, types, performance, torque-speed characteristics, no-load and blocked rotor tests, equivalent circuit, starting and speed control, squirrel cage and slip-ring induction motors; Single-phase induction motors: types, performance, starting and speed control; Permanent magnet synchronous motors, synchronous generators, regulation, parallel operation, synchronous condensers, fractional horsepower motors and other special machines.
  </p></li>
  <li><h6 class="resource-subheading">Power Systems:</h6>
  <p>Power generation concepts, ac and dc transmission concepts, Models and performance of transmission lines and cables, Series and shunt compensation, Electric field distribution and insulators, Distribution systems, Per-unit quantities, Bus admittance matrix, Gauss-Seidel and Newton-Raphson load flow methods, Voltage and Frequency control, Power factor correction, Symmetrical components, Symmetrical and unsymmetrical fault analysis, Principles of over-current, differential and distance protection, Circuit breakers, System stability concepts, Equal area criterion.
  </p></li>
  <li><h6 class="resource-subheading">Control Systems:</h6>
  <p>Mathematical modeling and representation of systems, Feedback principle, transfer function, block diagrams, signal flow graphs, Time response of systems, steady-state errors, Routh-Hurwitz criterion, Nyquist and Bode plots, Root locus, Stability analysis, Lag, lead and lag-lead compensation, State space model, State transition matrix, Controllability and Observability, Linear Time-Invariant (LTI) Systems analysis, Nonlinear systems, Frequency response analysis.
  </p></li>
  <li><h6 class="resource-subheading">Electrical and Electronic Measurements:</h6>
  <p>Bridges and Potentiometers, Measurement of voltage, current, power, energy, and power factor, Instrument transformers, Digital voltmeters, and multimeters, Phase, Time, and Frequency measurement, Oscilloscopes, Error analysis, Measurement of Electrical quantities, Transducers and their applications in the measurement of non-electrical quantities, Instrumentation amplifiers, Signal conditioning circuits, Data acquisition system basics.
  </p></li>
  </ul>
  <h4 class="resource-heading">Marking Scheme:</h4>
  <img src="images/EE.png" class="responsive">
  <h4 class="resource-heading">Important Topics and Books:</h4>
  <img src="images/ee-1.png" class="responsive">
  <img src="images/ee-2.png" class="responsive">
  <img src="images/ee-3.png" class="responsive">
  <img src="images/ee-4.png" class="responsive">

  <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
});

CSE.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  resourceBox1.style.display = "block";
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">Syllabus for GATE CSE/IT:</h4>
  <p>The GATE (Graduate Aptitude Test in Engineering) syllabus for Computer Science Engineering (CSE) or Information Technology (IT) is as follows:
  </p>
  <ul style="list-style-type:disc;">
  <li><h6 class="resource-subheading">Engineering Mathematics:</h6>
  <p>Discrete Mathematics, Linear Algebra, Calculus, Probability, Graph Theory, Combinatorics, Set Theory, Numerical Methods.
  </p></li>
  <li><h6 class="resource-subheading">Digital Logic:</h6>
  <p>Boolean Algebra, Combinational and Sequential Circuits, Minimization, Number Representation and Computer Arithmetic, Memory elements, MSI, and LSI components.
  </p></li>
  <li><h6 class="resource-subheading">Computer Organization and Architecture:</h6>
  <p>Machine instructions and addressing modes, ALU, Data-path and Control unit, Instruction pipelining, Cache and main memory, Secondary storage, I/O interface (Interrupt and DMA mode), Instruction pipelining, Concept of RISC and CISC.
  </p></li>
  <li><h6 class="resource-subheading">Programming and Data Structures:</h6>
  <p>Programming in C, C++, and Java, Recursion, Arrays, Stacks, Queues, Linked Lists, Trees, Graphs, Heaps, Searching and Sorting.
  </p></li>
  <li><h6 class="resource-subheading">Algorithms:</h6>
  <p>Analysis, Sorting and Searching Algorithms, Asymptotic Notation, Recurrence Relations, Greedy Algorithms, Dynamic Programming, Divide and Conquer, Graph Algorithms, String Algorithms.
  </p></li>
  <li><h6 class="resource-subheading">Theory of Computation:</h6>
  <p>Regular languages and finite automata, Context-free languages and push-down automata, Turing Machines, Undecidability.
  </p></li>
  <li><h6 class="resource-subheading">Compiler Design:</h6>
  <p>Lexical Analysis, Parsing, Syntax-Directed Translation, Run-Time Environments, Intermediate Code Generation, Code Generation, Optimization.
  </p></li>
  <li><h6 class="resource-subheading">Operating System:</h6>
  <p>Process Management, CPU Scheduling, Deadlocks, Memory Management and Virtual Memory, File Systems, I/O Systems, Protection, and Security.
  </p></li>
  <li><h6 class="resource-subheading">Databases:</h6>
  <p>Relational Model, ER Model, Relational Algebra, SQL, Transactions, Normalization, Query Optimization, File Structures.
  </p></li>
  <li><h6 class="resource-subheading">Computer Networks:</h6>
  <p>ISO/OSI stack, TCP/IP stack, Data link control protocols, Network layer protocols, Transport layer protocols, Application layer protocols, Network Security, Cryptography, Digital Signatures.
  </p></li>
  <li><h6 class="resource-subheading">Software Engineering:</h6>
  <p>Software Development Life Cycle, Requirements Engineering, Software Design, Software Testing, Software Maintenance, Software Metrics, and Software Project Management.
  </p></li>
  <li><h6 class="resource-subheading">Web Technologies:</h6>
  <p>HTML, CSS, JavaScript, PHP, ASP.NET, Web Services, RESTful architecture, XML, JSON, Ajax.
  </p></li>
  </ul>
  <h4 class="resource-heading">Marking Scheme:</h4>
  <img src="images/cse.png" class="responsive">
  <h4 class="resource-heading">Important Topics and Books:</h4>
  <img src="images/cseb.png" class="responsive">

  <!--Advanced Resource Box -->
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
});

SSC.addEventListener("click", (e) => {
  contributionGuidline.style.display = "none";
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML = `
  <!--div class="container mt-3" id="resourceBox1" style=" background: white;"-->
  <div class="container mt-3" id="resourceBox1">
  <!--Beginner Resource Box-->
  <h4 class="resource-heading">What is SSC-CGL?</h4>
  <p>SSC CGL (Staff Selection Commission Combined Graduate Level) exam is a national-level competitive exam conducted by the Staff Selection Commission for the recruitment of candidates in various government organizations and departments. The exam is conducted in four tiers, with the first two being conducted in online mode and the next two being conducted in offline mode.
  </p>
  <h4 class="resource-heading">Exam Pattern:</h4>
  <p>The SSC CGL examination is conducted in four tiers:</p>
  <ol type="1">
  <li><b>Tier 1:</b> Computer-based Examination (Objective Multiple Choice Questions)</li>
  <li><b>Tier 2:</b> Computer-based Examination (Objective Multiple Choice Questions)</li>
  <li><b>Tier 3:</b> Pen and Paper Mode (Descriptive Paper in English/Hindi)</li>
  <li><b>Tier 4:</b> Computer Proficiency Test/Skill Test (wherever applicable)</li>
  </ol>
  <h7 class="resource-heading">Tier 1:</h7>
  <ul style="list-style-type:disc;">
    <li>Mode of Exam: Online</li>
    <li>Duration: 60 minutes</li>
    <li>Total Questions: 100</li>
    <li>Maximum Marks: 200</li>
    <li>Marking Scheme: Each question carries 2 marks and there is a negative marking of 0.50 marks for each wrong answer.</li>
    <li>Subjects and Questions:<br>
      1. <b>General Intelligence and Reasoning:</b> 25 questions<br>
      2. <b>General Awareness:</b> 25 questions<br>
      3. <b>Quantitative Aptitude:</b> 25 questions<br>
      4. <b>English Comprehension:</b> 25 questions<br></li>
  </ul>
  <br>
  <h7 class="resource-heading">Tier 2:</h7>
  <ul style="list-style-type:disc;">
    <li>Mode of Exam: Online</li>
    <li>Duration: 120 minutes (Each paper)</li>
    <li>Total Questions: 500 (In both papers)</li>
    <li>Maximum Marks: 800 (In both papers)</li>
    <li>Marking Scheme: Each question carries 2 marks and there is a negative marking of 0.25 marks for each wrong answer.</li>
    <li>Subjects and Questions:<br>
      <b>Paper 1 -</b> Quantitative Abilities: 100 questions<br>
      <b>Paper 2 -</b> English Language and Comprehension: 200 questions<br>
      <b>Paper 3 -</b> Statistics (for Junior Statistical Officer): 100 questions<br>
      <b>Paper 4 -</b> General Studies (Finance and Economics for Assistant Audit Officer/Assistant Accounts Officer): 100 questions<br></li>
  </ul>
  <br>
  <h7 class="resource-heading">Tier 3:</h7>
  <ul style="list-style-type:disc;">
    <li><b>Mode of Exam:</b> Offline (Pen and Paper Mode)</li>
    <li><b>Duration:</b> 60 minutes</li>
    <li><b>Maximum Marks:</b> 100</li>
    <li><b>Subjects:</b> Descriptive Paper in English/Hindi (Writing of Essay, Precis, Letter, Application, etc.)</li>
  </ul>
  <br>
  <h7 class="resource-heading">Tier 4:</h7>
  <ul style="list-style-type:disc;">
    <li><b>Mode of Exam:</b> Computer-based (Wherever applicable)</li>
    <li><b>Duration:</b> Depends on the test</li>
    <li><b>Subjects:</b> Computer Proficiency Test/Skill Test</li>
  </ul>
  <br>
  <h4 class="resource-heading">Eligibilty:</h4>
  <p>The eligibility criteria for the SSC CGL exam are as follows:<br>
  <ul>
    <li>
    <b>Nationality:</b> The candidate must be either:<br>
    1. A citizen of India<br>
    2. A subject of Nepal/Bhutan<br>
    3. A Tibetan refugee who came over to India before January 1, 1962, with the intention of permanently settling in India<br>
    4. A person of Indian origin who has migrated from Pakistan, Burma, Sri Lanka, East African countries of Kenya, Uganda, the United Republic of Tanzania, Zambia, Malawi, Zaire, Ethiopia, and Vietnam with the intention of permanently settling in India.<br></p>
    </li>
    <li><b>Age Limit:</b> The candidate should be between 18 and 32 years of age. Age relaxations are provided for candidates belonging to certain categories.</li>
    <li><b>Educational Qualification:</b> The candidate must possess a bachelor's degree in any discipline from a recognized university/institute. The educational qualification varies according to the post applied for.</li>
    <li><b>Physical Standards:</b> Certain posts under SSC CGL require specific physical standards, which vary based on the post applied for.</li>
  </ul><br>
  <p>
  Nationality, age limit, and educational qualification are the general eligibility criteria for SSC CGL. Candidates are advised to refer to the official notification for specific details regarding eligibility criteria, including educational qualifications required for different posts, and physical standards required for specific posts.
  </p>

  <h4 class="resource-heading">Important Books:</h4><br>
  <h7 class="resource-heading">English:</h7><br>
  <img src="images/ssc-eng.png" class="responsive"><br><br><br>
  <h7 class="resource-heading">Maths:</h7><br>
  <img src="images/ssc-math.png" class="responsive"><br><br><br>
  <h7 class="resource-heading">Reasoning:</h7><br>
  <img src="images/ssc-reas.png" class="responsive"><br><br><br>
  <h7 class="resource-heading">General Awareness:</h7><br>
  <img src="images/ssc-gen.png" class="responsive">
  <br>
  
  <h4 class="resource-heading">Preparation Tips:</h4>
  <ol>
    <li>Knowing the syllabus and preparing is not enough. It is necessary to know the approach required for each topic/ subject. Thus, the candidates should check the subject-specific preparation strategies shared by toppers and see what works for them.</li>
    <li>While preparing for any topic, they must make short and summarised notes that will help them revise right before the exams.</li>
    <li>It is to go through daily newspapers, magazines and journals. They will help with Current Affairs, as well as improve their English Language and vocabulary.</li>
    <li>Downloading previous year questions papers and solving them in a time-constrained manner helps candidates in time management.</li>
    <li>They can also download answer keys and evaluate their answers. While calculating their score, they must keep negative marking in mind.</li>
  </ol>
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

// ************************************************************************************
// ********************************************************Incomplete Section********************************************************
const CDS = document.getElementById("CDS");
const AFCAT = document.getElementById("AFCAT");
const ME = document.getElementById("ME");

const ARCH = document.getElementById("ARCH");
const ESEEE = document.getElementById("ESEEE");
const ESEECE = document.getElementById("ESEECE");
const ESECE = document.getElementById("ESECE");
const resourceBox1 = document.getElementById("resourceBox1");
const resourceBox2 = document.getElementById("resourceBox2");

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


ME.addEventListener("click", (e) => {
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
