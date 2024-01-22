// ----------------------> Actions <-------------------------

export const handleDisplay = (num) => {
  return {
    type: "DISPLAY",
    payload: num,
  };
};

export const handleBlock = () => {
  return {
    type: "DISPLAY",
  };
};

export const handleHidden = () => {
  return {
    type: "HIDDEN",
  };
};

// ----------------------> Form Actions <-------------------------

export const handlePersonalDetails = (value) => {
  return {
    type: "PERSONAL",
    payload: value,
  };
};

export const handleEducationDetails = (value) => {
  return {
    type: "EDUCATION",
    payload: value,
  };
};

export const handleSkillDetails = (value) => {
  return {
    type: "SKILLS",
    payload: value,
  };
};

export const handleExperienceDetails = (value) => {
  return {
    type: "EXPERIENCE",
    payload: value,
  };
};

// ----------------------> PDF Functions <-------------------------

export const nameSeter = (doc, firstName, middleName, lastName) => {
  doc.setFont("courier", "bold");
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text(20, 180, firstName);
  doc.text(130, 180, middleName);
  doc.text(20, 205, lastName);
};

export const headSeter = (doc, title, X, Y, S = 0) => {
  if (S === 0) {
    doc.setFont("courier", "bold");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text(X, Y, title);
  } else {
    doc.setFont("courier", "bold");
    doc.setTextColor(255, 127, 80);
    doc.setFontSize(16);
    doc.text(X, Y, title);
  }
};

export const multiLineGenerator = (doc, text, X, Y) => {
  doc.setFont("courier", "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);

  let lines = doc.splitTextToSize(text, 192);
  let textY = Y;
  lines.forEach((line, index) => {
    if (index === 0) {
      textY = textY + 5;
    } else {
      textY = textY + 13;
    }
    doc.text(line, X, textY);
  });
  return textY;
};

export const leftSideHelper = (doc, text, X, Y) => {
  doc.setLineWidth(1);
  doc.setDrawColor(255);
  doc.setFillColor(255, 127, 80);
  doc.circle(X, Y, 3, "FD");

  doc.setFont("courier", "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);

  let lines;
  if (X === 120) {
    // right skills
    lines = doc.splitTextToSize(text, 90);
  } else {
    lines = doc.splitTextToSize(text, 185);
  }

  let textY = Y;
  lines.forEach((line, index) => {
    if (index === 0) {
      textY = textY + 5;
    } else {
      textY = textY + 13;
    }
    doc.text(line, X + 10, textY);
  });
  return textY;
};

export const rightSideHelper = (doc, collegName, Dates, X, Y) => {
  doc.setLineWidth(1);
  doc.setDrawColor(0);
  doc.setFillColor(255, 255, 255);
  doc.circle(X + 5, (Y = Y + 17), 3, "FD");

  doc.setFont("courier", "bold");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);
  let lines = doc.splitTextToSize(collegName, 300);
  let textY = Y;
  lines.forEach((line, index) => {
    if (index === 0) {
      textY = textY + 5;
    } else {
      textY = textY + 13;
    }
    doc.text(line, X + 15, textY);
  });

  doc.setFont("courier", "normal");
  doc.setTextColor(55, 58, 65);
  doc.setFontSize(13);
  doc.text(X + 15, (textY = textY + 20), Dates); // +20

  return textY;
};

export const experienceHelper = (doc, text, X, Y) => {
  doc.setFont("courier", "normal");
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(13);

  let lines = doc.splitTextToSize(text, 310);
  let textY = Y;
  lines.forEach((line, index) => {
    if (index === 0) {
      textY = textY + 5;
    } else {
      textY = textY + 13;
    }
    doc.text(line, X + 10, textY);
  });
  return textY;
};
