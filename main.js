const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;

//used arrow function here
const nextSlide = () =>{
	//get current class
	const current = document.querySelector('.current');
	//remove current class
	current.classList.remove('current');
	// check for next slide
	if(current.nextElementSibling){
		// add next sibling
		current.nextElementSibling.classList.add('current')
	}else{
		//strat the slide again at the end
		slides[0].classList.add('current'); // array 0 means the first div (img1)
	}
	setTimeout(()=>current.classList.remove('current'))
}

//used arrow function here
const prevSlide = () =>{
	//get current class
	const current = document.querySelector('.current');
	//remove current class
	current.classList.remove('current');
	// check for prev slide
	if(current.previousElementSibling){
		// add prev sibling
		current.previousElementSibling.classList.add('current')
	}else{
		//strat the slide again at the first
		slides[slides.length -1].classList.add('current'); // this array means the last div (last img)
	}
	setTimeout(()=>current.classList.remove('current'))
}

//button events

next.addEventListener('click', e=>{
	nextSlide();
	if(auto){
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});
prev.addEventListener('click', e=>{
	prevSlide();
	if(auto){
		clearInterval(slideInterval);
		slideInterval = setInterval(nextSlide, intervalTime);
	}
});

//auto silde

if(auto){
	// run next slide at intervalTime
	slideInterval = setInterval(nextSlide, intervalTime);
}

//created by Sk Rezwan
//open source project