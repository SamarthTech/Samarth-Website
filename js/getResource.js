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


// **********************JS for each section gate upsc etc etc*************************************************
const CSE = document.getElementById('CSE');
const ECE = document.getElementById('ECE');
const ESE = document.getElementById('ESE');
const resourceBox1= document.getElementById('resourceBox1');
const resourceBox2= document.getElementById('resourceBox2');
CSE.addEventListener('click', (e)=> {
  contributionGuidline.style.display = 'none';
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML=`
    <div class="container mt-3" id="resourceBox1" style=" background: red;">
    <!--Beginner Resource Box-->
    <h4 class="resource-heading">CSE</h4>
    <div class="row" id="beginnerResourceBox"></div>
    <!--Intermediate Resource Box -->
    <h4 class="resource-heading">Intermediate</h4>
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <h4 class="resource-heading">Advanced</h4>
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

ECE.addEventListener('click',(e)=>{
  contributionGuidline.style.display = 'none';

  resourceBox1.innerHTML=`
    <div class="container mt-3" id="resourceBox1" style=" background: green;">
    <!--Beginner Resource Box-->
    <h4 class="resource-heading">ECE</h4>
    <div class="row" id="beginnerResourceBox"></div>
    <!--Intermediate Resource Box -->
    <h4 class="resource-heading">Intermediate</h4>
    <div class="row mt-2" id="intermediateResourceBox"></div>
    <!--Advanced Resource Box -->
    <h4 class="resource-heading">Advanced</h4>
    <div class="row mt-2" id="advancedResourceBox"></div>
    <h4 class="resource-heading">fhghgghgggghghghggh</h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
  
    resourceBox1.style.display = 'block';
})

ESE.addEventListener('click', (e)=> {
  contributionGuidline.style.display = 'none';
  // resourceBox.style.display = 'none';
  // resourceBox.style.display = 'block';

  //Method 1
  resourceBox1.innerHTML=`
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