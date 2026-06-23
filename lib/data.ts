import type { Unit, Student, StudentProgress } from "./types";

export const UNIT: Unit = {
  id: 3,
  title: "Linear Models and Systems",
  sections: [
    {
      id: "3.1",
      title: "Slope & Recursive Formulas",
      objectives: [
        { id: "3.1.1", text: "I can compute slope given any scenario" },
        { id: "3.1.2", text: "I can relate recursive formulas to linear equations" },
        { id: "3.1.3", text: "I can interpret slope and intercepts in relation to a problem" },
        { id: "3.1.4", text: "I can interpret and classify: Recursion, linear and graphical models" },
      ],
      learnResources: [
        { label: "Khan Academy – Slope", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:linear-equations-graphs" },
        { label: "Delta Math – Section 3.1", url: "https://www.deltamath.com/" },
      ],
      practiceDescription: "Complete the assigned Delta Math problems for Section 3.1 and upload a screenshot of your completed score.",
      extraMaterials: [
        { label: "Calculator Notes – Slope", url: "https://www.desmos.com/" },
      ],
    },
    {
      id: "3.2",
      title: "Linear Equations as Models",
      objectives: [
        { id: "3.2.1", text: "I can create linear equations to model data" },
        { id: "3.2.2", text: "I can define linear descriptive vocabulary" },
        { id: "3.2.3", text: "I can write and interpret all 5 forms of linear equations" },
      ],
      learnResources: [
        { label: "Khan Academy – Writing Linear Equations", url: "https://www.khanacademy.org/" },
        { label: "Edpuzzle – Section 3.2 Video", url: "https://edpuzzle.com/" },
      ],
      practiceDescription: "Complete the Section 3.2 worksheet and upload a photo or scan of your finished work.",
      extraMaterials: [
        { label: "Desmos Activity – Lines", url: "https://www.desmos.com/activities" },
      ],
    },
    {
      id: "3.3",
      title: "Line of Best Fit",
      objectives: [
        { id: "3.3.1", text: "I can create and interpret the line of best fit by hand" },
        { id: "3.3.2", text: "I can use a line of best fit to interpolate and extrapolate data" },
      ],
      learnResources: [
        { label: "Khan Academy – Scatter Plots", url: "https://www.khanacademy.org/" },
        { label: "CK-12 – Line of Best Fit", url: "https://www.ck12.org/" },
      ],
      practiceDescription: "Using the provided data set, draw a line of best fit by hand and answer the analysis questions. Upload a photo of your work.",
      extraMaterials: [
        { label: "Desmos Regression Explorer", url: "https://www.desmos.com/" },
      ],
    },
    {
      id: "3.4",
      title: "Median-Median Line",
      objectives: [
        { id: "3.4.1", text: "I can create appropriate bins for a data set" },
        { id: "3.4.2", text: "I can find the median-median line of a small data set by hand" },
        { id: "3.4.3", text: "I can classify causation and correlation, and predicted outcomes" },
      ],
      learnResources: [
        { label: "Notes – Median-Median Line", url: "https://www.khanacademy.org/" },
        { label: "Video – Correlation vs Causation", url: "https://www.youtube.com/" },
      ],
      practiceDescription: "Complete the median-median line practice problems. Show all work and upload a clear photo.",
      extraMaterials: [
        { label: "Correlation Simulator", url: "https://www.rossmanchance.com/" },
      ],
    },
    {
      id: "3.5",
      title: "Residuals & RMSE",
      objectives: [
        { id: "3.5.1", text: "I can interpret the meaning of residuals" },
        { id: "3.5.2", text: "I can compute the root mean square error" },
      ],
      learnResources: [
        { label: "Khan Academy – Residuals", url: "https://www.khanacademy.org/" },
        { label: "Edpuzzle – RMSE Explained", url: "https://edpuzzle.com/" },
      ],
      practiceDescription: "Complete the residuals and RMSE problems on Delta Math. Upload your completion screenshot.",
      extraMaterials: [
        { label: "RMSE Calculator Tool", url: "https://www.desmos.com/" },
      ],
    },
    {
      id: "3.6",
      title: "Linear Systems – Graphical",
      objectives: [
        { id: "3.6.1", text: "I can estimate solutions to linear systems graphically and numerically" },
        { id: "3.6.2", text: "I can describe how the property of equality relates to solving systems" },
      ],
      learnResources: [
        { label: "Khan Academy – Systems of Equations", url: "https://www.khanacademy.org/" },
        { label: "Desmos – Graphing Systems", url: "https://www.desmos.com/" },
      ],
      practiceDescription: "Graph each system of equations and identify the solution. Upload a screenshot from Desmos showing your graphs.",
      extraMaterials: [
        { label: "Systems of Equations Activity", url: "https://teacher.desmos.com/" },
      ],
    },
    {
      id: "3.7",
      title: "Linear Systems – Algebraic",
      objectives: [
        { id: "3.7.1", text: "I can define linear descriptive vocabulary for systems" },
        { id: "3.7.2", text: "I can solve a system algebraically" },
        { id: "3.7.3", text: "I can create and solve real-world problems using systems" },
      ],
      learnResources: [
        { label: "Khan Academy – Substitution", url: "https://www.khanacademy.org/" },
        { label: "Khan Academy – Elimination", url: "https://www.khanacademy.org/" },
      ],
      practiceDescription: "Complete the algebraic systems worksheet (substitution and elimination). Upload a photo of your completed work.",
      extraMaterials: [
        { label: "Real-World Systems Problems", url: "https://www.desmos.com/" },
      ],
    },
  ],
  quizzes: [
    { id: "quiz-3a", title: "Quiz 3A", dueDate: "10/12 or 10/13", afterSection: "3.5" },
    { id: "quiz-3b", title: "Quiz 3B", dueDate: "10/19 or 10/20", afterSection: "3.7" },
  ],
  testDate: "10/26 or 10/27",
};

export const STUDENTS: Student[] = [
  { id: "s1", name: "Dutt", avatar: "D" },
  { id: "s2", name: "Julian", avatar: "J" },
  { id: "s3", name: "Carson", avatar: "C" },
  { id: "s4", name: "Maya", avatar: "M" },
  { id: "s5", name: "Priya", avatar: "P" },
  { id: "s6", name: "Ethan", avatar: "E" },
  { id: "s7", name: "Sofia", avatar: "S" },
  { id: "s8", name: "Liam", avatar: "L" },
];

export const DEMO_PROGRESS: StudentProgress[] = [
  {
    studentId: "s1",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "available" },
      "3.3": { learn: "done", practice: "help", extra: "available" },
      "3.4": { learn: "locked", practice: "locked", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s2",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "done" },
      "3.3": { learn: "done", practice: "done", extra: "done" },
      "3.4": { learn: "done", practice: "done", extra: "done" },
      "3.5": { learn: "done", practice: "help", extra: "available" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s3",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "help", extra: "available" },
      "3.2": { learn: "locked", practice: "locked", extra: "locked" },
      "3.3": { learn: "locked", practice: "locked", extra: "locked" },
      "3.4": { learn: "locked", practice: "locked", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s4",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "done" },
      "3.3": { learn: "done", practice: "done", extra: "done" },
      "3.4": { learn: "done", practice: "done", extra: "done" },
      "3.5": { learn: "done", practice: "done", extra: "done" },
      "3.6": { learn: "done", practice: "done", extra: "done" },
      "3.7": { learn: "done", practice: "done", extra: "done" },
    },
  },
  {
    studentId: "s5",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "available" },
      "3.3": { learn: "done", practice: "available", extra: "locked" },
      "3.4": { learn: "locked", practice: "locked", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s6",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "help", extra: "available" },
      "3.3": { learn: "locked", practice: "locked", extra: "locked" },
      "3.4": { learn: "locked", practice: "locked", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s7",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "done" },
      "3.3": { learn: "done", practice: "done", extra: "done" },
      "3.4": { learn: "done", practice: "available", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
  {
    studentId: "s8",
    unitId: 3,
    sections: {
      "3.1": { learn: "done", practice: "done", extra: "done" },
      "3.2": { learn: "done", practice: "done", extra: "done" },
      "3.3": { learn: "help", practice: "locked", extra: "locked" },
      "3.4": { learn: "locked", practice: "locked", extra: "locked" },
      "3.5": { learn: "locked", practice: "locked", extra: "locked" },
      "3.6": { learn: "locked", practice: "locked", extra: "locked" },
      "3.7": { learn: "locked", practice: "locked", extra: "locked" },
    },
  },
];
