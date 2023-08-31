import chrome from "@assets/Projects/chrome.mp4";

const projectData = [
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header: "Analysis of Optimization Algorithms",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Assessed the performance of various Stochastic Optimization algorithms on control agents created using OpenAI gym environment</li>"+
      "<li>Developed and applied multiple Gradient Descent algorithms to optimize Deep Q-Network which achieved a 15% boost in agent’s return</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">Mar 2022 - May 2022 <a href="https://github.com/Naveen015/Optimization-Algorithms"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {
      // className: "mx-auto d-block",
      //variant: "top",
      //controls: true,
      //style: {
      //  display: "block",
      //  height: "18em",
      //  width: "100%",
      //},
    },
    header: "Cricket - Multi-agent Game",
    headerConfig: { as: "h5" },
    title: '',
    body:
      "<ul><li>Fabricated the game as Markov Decision Process utilizing Multi-Armed Bandit algorithms resulting in optimized batting & bowling strategies</li>"+
      "<li>Modeled winning strategies using a 2-player Monte Carlo Tree Search algorithm & elevated match outcomes through optimal action selection</li>" +
      "</ul>",
    footer:
      '<p style="margin:0;padding:0;">Feb 2022 - May 2022 <a href="https://github.com/Naveen015/Cricket-Game"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Hangman Game",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Designed an algorithm to play the game of Hangman where the player has to guess all the letters of a word, with a limited number of guesses</li>"+
      "<li>Engineered an enhanced N-gram model for capturing letter patterns to improve predictive outcomes and Achieved an accuracy of 62.5%</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">Jan 2022 - Feb 2022 <a href="https://github.com/Naveen015/Hangman-Game"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Machine Learning Hackathon",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>Optimized bike tour recommendations through exhaustive data preprocessing, data binning and feature engineering on biker’s data</li>"+
      "<li>Crafted an ensemble model (XGB, LGBM, CatBoost) with meticulous hyper-parameter tuning which yielded a commendable 0.71 accuracy</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">Nov 2020 - Jan 2021 <a href="https://github.com/Naveen015/Machine-Learning-Hackathon"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
  {
    cardConfig: {},
    isVideo: false,
    src: "",
    srcConfig: {},
    header:
      "Loan Default Prediction",
    headerConfig: { as: "h5" },
    title: "",
    body:
      "<ul><li>• Developed loan default classifier using SMOTE and KNN Imputer for data preprocessing to achieve robust predictive accuracy</li>"+
      "<li>Achieved F1 score of 0.95 by rigorously tuning Hyperparameters in Random Forest Classifier which significantly enhanced learning outcomes</li>" +
      "</ul>",
    footer: '<p style="margin:0;padding:0;">Oct 2020 - Dec 2020 <a href="https://github.com/Naveen015/Loan-Default-Prediction"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { projectData };
