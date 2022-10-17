/* Source Logic */
let selectCategoryBtn = document.querySelectorAll('.select-category-btn');
// Contribution and Resource Box
const resourceBox = document.getElementById('resourceBox');
const contributionGuidline = document.getElementById('contributionGuideline');
// Resource Showcase Section
// const beginnerResourceBox = document.getElementById('beginnerResourceBox');
// const intermediateResourceBox = document.getElementById('intermediateResourceBox',);

contributionBtn.addEventListener('click', (e) => {
  resourceBox.style.display = 'none';
  resourceBox1.style.display = 'none';
  contributionGuidline.style.display = 'block';
  contributionBtn.style.backgroundColor = '#6940d3';
  contributionBtn.style.color = '#fff';
  for (let j = 0; j < category.length; j++) {
    selectBtn[j].style.backgroundColor = '#fff';
    selectBtn[j].style.color = '#000';
  }
  for (let i = 0; i < category.length; i++) {
    let x = category[i].querySelector('.select-option');
    x.style.display = 'none';
  }
});


// ************************************************JS for each section*******************************************************************
// *********************************************************Complete*********************************************************************
const ESE = document.getElementById('ESE');
const UPSC = document.getElementById('UPSC');

ESE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
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

  resourceBox1.style.display = 'block';

  // Method 2
  //else use this >> 
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';

})

UPSC.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
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

  resourceBox1.style.display = 'block';

  // Method 2
  //else use this >> 
  // resourceBox2.style.display = 'block';
  // resourceBox1.style.display = 'none';

})

// ************************************************************************************
// ********************************************************Incomplete Section********************************************************
const CSE = document.getElementById('CSE');
const ECE = document.getElementById('ECE');
const SSC = document.getElementById('SSC');
const CDS = document.getElementById('CDS');
const AFCAT = document.getElementById('AFCAT');
const GATE = document.getElementById('GATE');
const EE = document.getElementById('EE');
const ME = document.getElementById('ME');
const CE = document.getElementById('CE');
const ARCH = document.getElementById('ARCH');
const CAT = document.getElementById('CAT');
const ESEME = document.getElementById('ESEME');
const ESEEE = document.getElementById('ESEEE');
const ESEECE = document.getElementById('ESEECE');
const ESECE = document.getElementById('ESECE');
const resourceBox1 = document.getElementById('resourceBox1');
const resourceBox2 = document.getElementById('resourceBox2');



SSC.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
CDS.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
AFCAT.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ESEME.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ESEEE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ESEECE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ESECE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
GATE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
CE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ME.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
EE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
ARCH.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
CDS.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});


CSE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});

ECE.addEventListener('click', (e) => {
  contributionGuidline.style.display = 'none';
  resourceBox1.style.display = 'block';
  resourceBox1.innerHTML = `
    <div class="container mt-3" id="resourceBox1" style="/* background: green;*/">
      <h4 class="resource-heading">To be Updated Soon</h4>
    </div>`;
});
