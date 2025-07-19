// IntersectionObserver reveal
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');}})
},{threshold:.15});
document.querySelectorAll('.fade').forEach(el=>observer.observe(el));

// smooth nav links
document.querySelectorAll('nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// calculator
const cats=[
  {limit:0,msg:'😸 No tax! Enjoy your refund.'},
  {limit:50000,msg:'😺 Easy breezy. Mild liability.'},
  {limit:150000,msg:'😼 Could be better—let us trim this.'},
  {limit:99999999,msg:'😿 Ouch! Let’s slash that number.'}
];
function runCalc(){
  const income=parseFloat(document.getElementById('income').value||0);
  const out=document.getElementById('calc-out');
  if(!income){out.innerHTML='Enter income to begin 🐾';return;}
  let tax=0;
  if(income>1000000){tax+=(income-1000000)*0.30;tax+=500000*0.20;tax+=250000*0.05;}
  else if(income>500000){tax+=(income-500000)*0.20;tax+=250000*0.05;}
  else if(income>250000){tax+=(income-250000)*0.05;}
  tax+=tax*0.04;
  const bracket=cats.find(c=>tax<=c.limit);
  out.innerHTML=`<span class="cat-emoji">${bracket.msg.split(' ')[0]}</span>${bracket.msg.split(' ').slice(1).join(' ')}<br>
  <strong>Estimated Tax: ₹${Math.round(tax).toLocaleString('en-IN')}</strong><br>
  <button class="cta" style="margin-top:14px" onclick="location.href='tel:+919779463824'">Talk to a Pro</button>`;
  out.animate([{transform:'scale(0.8)',opacity:0},{transform:'scale(1)',opacity:1}],{duration:400,easing:'ease-out'});
}
