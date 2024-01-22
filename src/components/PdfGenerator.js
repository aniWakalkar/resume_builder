import jsPDF from 'jspdf';
import profile_1 from '../Templates/profile_1.png'
import { nameSeter, headSeter, multiLineGenerator, leftSideHelper, rightSideHelper, experienceHelper} from '../state/actions';


export const generatePDF = (fileName, imageFile, personal, skills, education, experience) => {
  var doc = new jsPDF("p", "pt");
  if(imageFile){
      doc.setFillColor(255,127,80);
      doc.rect(0, 0, 220, 840, 'F'); // empty square
      nameSeter(doc, personal.first.toUpperCase(), personal.middle.toUpperCase().slice(0, 1) + ".", personal.last.toUpperCase())

      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function () {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
    
          // Set canvas dimensions
          const size = Math.min(img.width, img.height);
          canvas.width = size;
          canvas.height = size;
    
          // Draw image with rounded corners
          ctx.beginPath();
          ctx.arc(size / 2, size / 2, size / 1, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();

          
          ctx.drawImage(img, 0, 0, size, size);

          // Draw on the PDF
          doc.addImage(canvas.toDataURL(img.src), 'JPEG', 50, 40, 100, 100); // Fixed width and height


// ------------------------------------------------------------------------------
          let mainY = 210   
// ------------------------------------------------------------------------------

          headSeter(doc, "ABOUT ME", 20, mainY = mainY + 40)       // +60
          let text = personal.aboutMe
          let multiY = multiLineGenerator(doc, text.slice(0, 230) + " ...", 20, mainY = mainY + 20)      // +20



          headSeter(doc, "CONTACT", 20, mainY = multiY + 40)  // +60
          let skillY = leftSideHelper(doc, personal.phone, 20, mainY = mainY + 20)
          skillY = leftSideHelper(doc, personal.email, 20, mainY = skillY + 20)

          let myAddress = personal.address + ", " + personal.city + ", " + personal.state + ", " + personal.postalCode
          skillY = leftSideHelper(doc, myAddress, 20, mainY = skillY + 20)



          headSeter(doc, "SKILL", 20, mainY = skillY + 40)          // +60
          let safeY1 = mainY
          let stopper = false
          
          skills.map((val, i)=>{  
            if( i >= 20){return 1}
            if(i === 0){
              skillY = leftSideHelper(doc, val.skill, 20, mainY = mainY + 20)
            }else{
              if(stopper === true){
                skillY = leftSideHelper(doc, val.skill, 120, safeY1 = safeY1 + 20)
              }
              else if(stopper === false){
                skillY = leftSideHelper(doc, val.skill, 20, mainY = skillY + 15)
                if(skillY >= 800){
                  stopper = true
                }
              }
            }
            return 1;
          })



    // -------------------------------------- SECOND PART ---------------------------------


          let mainY2 = 90;
          headSeter(doc, "EDUCATION DETAILS", 250, mainY2, 1)
          education.map((val, i)=>{
            if(val.college === "" || val.degree === "" || val.startYear === ""){return 1}
            if(i === 0){
              mainY2 = rightSideHelper(doc, val.college + " - " + val.degree, val.startYear + " - " + val.endYear, 250, mainY2)

            }else{
              mainY2 = rightSideHelper(doc, val.college + " - " + val.degree, val.startYear + " - " + val.endYear, 250, mainY2 + 20)
            }
            return 1
          })


          console.log(experience);
          headSeter(doc, "EXPERIENCE DETAILS", 250, mainY2 = mainY2 + 60, 1)
          experience.map((val, i)=>{
            if(val.company === "" || val.position === "" || val.startYear === ""){return 1}
            if(i === 0){
              mainY2 = rightSideHelper(doc, val.company + " - " + val.position, val.startYear + " - " + val.endYear, 250, mainY2)

              mainY2 = experienceHelper(doc, val.aboutExperience, 250, mainY2 = mainY2 + 10)
            }else{
              mainY2 = rightSideHelper(doc, val.company + " - " + val.position, val.startYear + " - " + val.endYear, 250, mainY2 + 20)

              mainY2 = experienceHelper(doc, val.aboutExperience, 250, mainY2 + 10)
            }
            return 1
          })



          // headSeter(doc, "PROJECTS", 250, mainY2 = mainY2 + 60, 1)
          // mainY2 = rightSideHelper(doc, "WAINGANGA COLLEGE OF ENGINEERING AND MANEGMENT", "January 2002 - December 2005", 250, mainY2)
          // mainY2 = rightSideHelper(doc, "WAINGANGA COLLEGE OF ENGINEERING AND MANEGMENT", "January 2002 - December 2005", 250, mainY2 + 20)


      doc.save(fileName + ".pdf");
        };
    };
    reader.readAsDataURL(imageFile);

  }else{
    doc.setFillColor(255,127,80);
    doc.rect(0, 0, 220, 840, 'F'); // empty square

    doc.addImage(profile_1, 'JPEG', 50, 40, 100, 100)

    nameSeter(doc, personal.first.toUpperCase(), personal.middle.toUpperCase().slice(0, 1) + ".", personal.last.toUpperCase())

    // ------------------------------------------------------------------------------
    let mainY = 210   
    // ------------------------------------------------------------------------------
    
    headSeter(doc, "ABOUT ME", 20, mainY = mainY + 40)       // +60
    let text = personal.aboutMe
    let multiY = multiLineGenerator(doc, text.slice(0, 230) + " ...", 20, mainY = mainY + 20)      // +20



    headSeter(doc, "CONTACT", 20, mainY = multiY + 40)  // +60
    let skillY = leftSideHelper(doc, personal.phone, 20, mainY = mainY + 20)
    skillY = leftSideHelper(doc, personal.email, 20, mainY = skillY + 20)

    let myAddress = personal.address + ", " + personal.city + ", " + personal.state + ", " + personal.postalCode
    skillY = leftSideHelper(doc, myAddress, 20, mainY = skillY + 20)



    headSeter(doc, "SKILL", 20, mainY = skillY + 40)          // +60
    let safeY1 = mainY
    let stopper = false
    
    skills.map((val, i)=>{  
      if( i >= 20){return 1}
      if(i === 0){
        skillY = leftSideHelper(doc, val.skill, 20, mainY = mainY + 20)
      }else{
        if(stopper === true){
          skillY = leftSideHelper(doc, val.skill, 120, safeY1 = safeY1 + 20)
        }
        else if(stopper === false){
          skillY = leftSideHelper(doc, val.skill, 20, mainY = skillY + 15)
          if(skillY >= 800){
            stopper = true
          }
        }
      }
      return 1;
    })


    // -------------------------------------- SECOND PART -----------------------------------------



    let mainY2 = 90;
    headSeter(doc, "EDUCATION DETAILS", 250, mainY2, 1)
    education.map((val, i)=>{
      if(val.college === "" || val.degree === "" || val.startYear === "" || val.endYear === ""){return 1}
      if(i === 0){
        mainY2 = rightSideHelper(doc, val.college + " - " + val.degree, val.startYear + " - " + val.endYear, 250, mainY2)

      }else{
        mainY2 = rightSideHelper(doc, val.college + " - " + val.degree, val.startYear + " - " + val.endYear, 250, mainY2 + 20)
      }
      return 1
    })



    headSeter(doc, "EXPERIENCE DETAILS", 250, mainY2 = mainY2 + 60, 1)
    experience.map((val, i)=>{
      if(val.company === "" || val.position === "" || val.startYear === ""){return 1}
      if(i === 0){
        mainY2 = rightSideHelper(doc, val.company + " - " + val.position, val.startYear + " - " + val.endYear, 250, mainY2)

        mainY2 = experienceHelper(doc, val.aboutExperience, 250, mainY2 = mainY2 + 10)
      }else{
        mainY2 = rightSideHelper(doc, val.company + " - " + val.position, val.startYear + " - " + val.endYear, 250, mainY2 + 20)

        mainY2 = experienceHelper(doc, val.aboutExperience, 250, mainY2 + 10)
      }
      return 1
    })



    // headSeter(doc, "PROJECTS", 250, mainY2 = mainY2 + 60, 1)
    // mainY2 = rightSideHelper(doc, "WAINGANGA COLLEGE OF ENGINEERING AND MANEGMENT", "January 2002 - December 2005", 250, mainY2)
    // mainY2 = rightSideHelper(doc, "WAINGANGA COLLEGE OF ENGINEERING AND MANEGMENT", "January 2002 - December 2005", 250, mainY2 + 20)


    doc.save(fileName + ".pdf");
  }
};
