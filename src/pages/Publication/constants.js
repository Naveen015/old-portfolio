import glcm from "@assets/Publication/Methodology_GLCM.jpeg";

const groupCardConfig = {
  xs: "1",
  md: "3",
  className: "g-4",
};

const publicationData = [
  {
    cardConfig: {
      style: { width: "39em" },
    },
    isVideo: false,
    src: glcm,
    srcConfig: {
      variant: "top",
      controls: true,
      autoPlay: true,
      muted: true,
      style: { display: "block", height: "10em", width: "38em", margin: "0.3em" },
    },
    header: "Thesis",
    headerConfig: { as: "h5" },
    title: "Surface Texture Analysis",
    body:
      'Guided by: <a href="https://scholar.google.co.uk/citations?hl=en&user=V1cCMvUAAAAJ"  target="_blank" rel="noreferrer">Prof. Dr. N. Arunchalam</a>',
    footer:
      '<p style="margin:0;padding:0;">2022 <a href="https://drive.google.com/file/d/1BIkTqzbBxrTToCuS65CIrnZO1FTiik3g/view?usp=sharing"  target="_blank" rel="noreferrer">paper</a> <a href="https://github.com/Naveen015/Surface-Texture-Analysis"  target="_blank" rel="noreferrer">github</a></p>',
    footerConfig: { className: "text-muted d-flex justify-content-end" },
  },
];

export { publicationData, groupCardConfig };
