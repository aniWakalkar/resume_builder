export const increment = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const handleDisplay = (num) => {
    return{
        type: "DISPLAY",
        payload : num
    }
}

export const handleBlock = () => {
    return{
        type: "DISPLAY",
    }
}

export const handleHidden = () => {
    return{
        type: "HIDDEN",
    }
}


export const initialState = 
    { 
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        aboutMe: "",
    }


export const handlePersonalDetails = (value) => {
    return{
        type: "PERSONAL",
        payload: value
    }
}



export const initialEducationState = 
    { 
        college: "",
        degree: "",
        startYear: "",
        endYear: "",
    }


export const handleEducationDetails = (value) => {
    return{
        type: "EDUCATION",
        payload: value
    }
}



export const handleSkillDetails = (value) => {
    return{
        type: "SKILLS",
        payload: value
    }
}



export const initialExperienceState = 
    { 
        company: "",
        position: "",
        startYear: "",
        endYear: "",
    }


export const handleExperienceDetails = (value) => {
    return{
        type: "EXPERIENCE",
        payload: value
    }
}
   
    




export const titleGenerator = (doc, title, titleX, titleY, val)=>{
    if (val === 0){
      // Applicant Name
      doc.setTextColor(4, 80, 199);
      doc.setFontSize(20);
      doc.setFont('helvetica', 'bold'); 
      doc.text(title , titleX, titleY);
      doc.setFont('helvetica', 'normal');
  
    } else if (val === 1){
      // Applicant Post
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(16);
      // doc.setFont('helvetica', 'bold'); 
      doc.text(title, 50, 28);
      doc.setFont('helvetica', 'normal');
  
    }else{
      // Heading
      doc.setFontSize(14);
      doc.setTextColor(4,80,199)
      doc.setFont('helvetica', 'bold');
      doc.text(title, titleX, titleY);
    }
}


export const multilineTextGenerator = (doc, text, textX, textY)=>{
    let textUpperMargin = 2
    var maxWidth1 = 185; 
    var lineHeight1 = 5; 

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal');
    var lines1 = doc.splitTextToSize(text, maxWidth1);
    
    lines1.forEach((line, index) => {
        if (index === 0){
            textY = textY + textUpperMargin + index * lineHeight1
        }else{
            textY = textY + lineHeight1
        }
        doc.text(line, textX, textY);
    });
    return textY;
}


export const addBullet = (doc, text, bulletX, bulletY, bool) => {
    var bulletRadius = 0.7;
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(0, 0, 0);
    doc.setFont('helvetica', 'bold');
    if (bool === true){doc.setFont('helvetica', 'normal');}
    doc.circle(bulletX + 5, bulletY + 2, bulletRadius, 'FD');
    doc.text(text, bulletX + 8, bulletY = bulletY + 3);
    return bulletY
}



export const educationGenerator = (doc, collegeName, startDate, endDate, textX, textY) =>{
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    let bulletY = addBullet(doc, collegeName, textX, textY)
  
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(startDate, textX + 8, bulletY = bulletY + 5);
    doc.text(endDate, textX + 8, bulletY = bulletY + 5);
    return bulletY
}



export const contactGnerator = (doc, icon, iconX, iconY, iconW, iconH, text)=>{
    doc.addImage(icon, 'JPEG', iconX + 3, iconY, iconW, iconH);
    if(text){
      doc.setTextColor(0, 0, 0)
      doc.setFontSize(12);
      doc.setFont('helvetica', 'normal');
      doc.text(text, iconX + 10, iconY + 4);
    }
}
  

