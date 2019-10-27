//console.log("js is linked!");

//desktop - resume iframe view
const view_resume = document.getElementById('view_resume_btn');

const resume_pdf = document.getElementById('resume_pdf');

view_resume.addEventListener('click', () => {
    resume_pdf.classList.toggle('none');
    if(resume_pdf.classList.contains('none')) {
        view_resume.innerHTML = "view resume";
    } else {
        view_resume.innerHTML = "minimize resume";
    }
    
});

