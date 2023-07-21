let buttonsInNav = document.getElementById("navbar__list");   //getting the nav
let sendtionextract = document.getElementsByClassName("sectionn");  //getting sections
let allSectionsArray = Array.from(sendtionextract);   //adding section to array
let x = 1;

const TheNavItselfToHide = document.getElementById('headerysta');  //getting the nav 
let lastTimeGoingUp; //adding variable to check last time going up
generatingSectionsNavBars();

function generatingSectionsNavBars()
{
    /*looping over 
    sections*/

    for (let i = 0; i < allSectionsArray.length ; i++)
    {
        /*adding li for every section with its own id 
        and own name and appending it to the list*/

        let n = "section"+x.toString();
        liElement = document.createElement("li");
        nameOfWhichSection = allSectionsArray[i].getAttribute("data-nav");
        theSectionPart = allSectionsArray[i].getAttribute('id');
        liElement.innerHTML = `<a href="#${theSectionPart}"  data-nav="${theSectionPart}" class="menu__link ${n}">${nameOfWhichSection}</a>`;
        buttonsInNav.appendChild(liElement);
        x++;
    }
} 


/*adding or removing 
classes on scroll*/

document.onscroll = function()
{
    /*analzyzing section position to detect 
      if it is or it is not inside the viewport*/

    Array.from(document.getElementsByClassName("sectionn")).forEach(function (onUseNow) {
        if( onUseNow.getBoundingClientRect().top >= -200 && onUseNow.getBoundingClientRect().top <= 200)
        {
            onUseNow.classList.add("your-active-class");
            let iddes =  onUseNow.id;
            
            let s =  document.getElementsByClassName(iddes);
            for (let j = 0; j < s.length ; j++)
            {
            s[j].classList.add("activee");
            }
        }
        else
        {
            onUseNow.classList.remove("your-active-class");
            let iddes =  onUseNow.id;

            let s =  document.getElementsByClassName(iddes);
            for (let j = 0; j < s.length ; j++)
            {
            s[j].classList.remove("activee");
            }
        } 

    });
};

/*hiding nav while 
scrolling up*/

 


/*adding event listner
 for scolling*/
window.addEventListener('scroll',function(){
let scrollTop = window.pageYOffset || document.documentElement.scrollTop; //on the first scroll the last scroll will be the window offset 
if(scrollTop < lastTimeGoingUp){TheNavItselfToHide.style.top='1';} // if its false nav will be hidden by going up
else{TheNavItselfToHide.style.top='-100px';}
lastTimeGoingUp = scrollTop;

});

/*smooth scrolling*/ 
buttonsInNav.addEventListener("click",(scrolling) =>{
    scrolling.preventDefault();
    if(scrolling.target.dataset.nav)
    {
     document.getElementById(`${scrolling.target.dataset.nav}`).scrollIntoView({behavior: "smooth"});
    }
})

window.addEventListener('scroll',function(){
setTimeout(function sayHi() {
    TheNavItselfToHide.style.top='-100px';
}, 5000);});