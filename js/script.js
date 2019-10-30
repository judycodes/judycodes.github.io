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

//desktop - open project content
let project_read_btns = document.querySelectorAll('.project_read');

for(let i = 0; i < project_read_btns.length; i++){
    project_read_btns[i].addEventListener('click', openProject, false);
}

function openProject(e) {
    
    if (e.target == e.currentTarget) {
        console.log(e.currentTarget, "currentTarget");
        console.log(e.target, "e.target");
        console.log(e.target.id, "project id");
        let clickedProject = e.target.id;
        console.log(clickedProject, "clicked project id");

        const projectName = clickedProject.substring(0, clickedProject.length - 3);
        console.log(projectName, "project name")
        document.getElementById(`${projectName}`).style.width = "100%";

    }
    e.stopPropagation();
    
  }
  
function closeProject() {
    document.getElementById("foodhunt_info").style.width = "0%";
  }
