export const displayReducer = (state = "block", action) => {
  switch (action.payload) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    default:
      return 1;
  }
};

export const hiddenReducer = (state = "hidden", action) => {
  switch (action.type) {
    case "HIDDEN":
      return (state = "hidden");
    case "DISPLAY":
      return (state = "block");
    default:
      return state;
  }
};

// ----------------------> Personal Info Form Reducer <-------------------------

export const initialState = {
  first: "",
  middle: "",
  last: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  postalCode: "",
  aboutMe: "",
};
export const personalDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PERSONAL":
      return action.payload;
    default:
      return state;
  }
};

// ----------------------> Education Form Reducer <-------------------------

export const initialEducationState = {
  college: "",
  degree: "",
  startYear: "",
  endYear: "",
};
export const personalEducationReducer = (
  state = initialEducationState,
  action
) => {
  switch (action.type) {
    case "EDUCATION":
      return action.payload;
    default:
      return state;
  }
};

// ----------------------> Skill Form Reducer <-------------------------

export const initialSkill = { skill: "" };
export const SkillReducer = (state = initialSkill, action) => {
  switch (action.type) {
    case "SKILLS":
      return action.payload;
    default:
      return state;
  }
};

// ----------------------> Work Experience Form Reducer <-------------------------

export const initialExperienceState = {
  company: "",
  position: "",
  startYear: "",
  endYear: "",
};
export const personalExperienceReducer = (
  state = initialExperienceState,
  action
) => {
  switch (action.type) {
    case "EXPERIENCE":
      return action.payload;
    default:
      return state;
  }
};
