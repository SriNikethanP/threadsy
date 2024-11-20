const XSvg = (props) => (
  // <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
  //   <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  // </svg>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="12" fill="rgb(127, 0, 255)" />

    <path d="M 4 10 L 12 2 L 20 10 L 12 18 Z" fill="rgb(26, 26, 26)" />

    <line
      x1="5"
      y1="10"
      x2="19"
      y2="18"
      stroke="rgb(232, 224, 255)"
      stroke-width="1"
    />
    <line
      x1="5"
      y1="18"
      x2="19"
      y2="10"
      stroke="rgb(232, 224, 255)"
      stroke-width="1"
    />
  </svg>
);
export default XSvg;
