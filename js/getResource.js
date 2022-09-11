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
    <h4 class="resource-heading"></h4>
    <div class="row mt-2" id="projectsResourceBox"></div>
    </div>`;
  
    resourceBox1.style.display = 'block';
})

















// ******************************************************************************************
