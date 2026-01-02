// ------------- DARK MODE TOGGLE + SAVE --------------
const toggle = document.getElementById("modeToggle");

if(localStorage.getItem("mode")==="dark"){
  document.body.classList.add("dark");
}

toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark");

  if(document.body.classList.contains("dark")){
    localStorage.setItem("mode","dark");
  }else{
    localStorage.setItem("mode","light");
  }
});


// ------------- FLOATING BACK TO TOP --------------
const topBtn = document.createElement("button");
topBtn.id="floatTop";
topBtn.innerText="↑ Top";
document.body.appendChild(topBtn);

topBtn.onclick = ()=> window.scrollTo({top:0,behavior:"smooth"});

window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY>200 ? "block" : "none";
});


// ------------- SCROLL REVEAL EFFECTS --------------
const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const top=el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});


// ------------- FORM SUBMIT TOAST --------------
const form=document.getElementById("feedbackForm");

form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const toast=document.createElement("div");
  toast.className="toast-box";
  toast.textContent="🎉 Thank you! Feedback submitted successfully.";
  document.body.appendChild(toast);

  toast.style.display="block";

  setTimeout(()=> toast.remove(),3000);
});

