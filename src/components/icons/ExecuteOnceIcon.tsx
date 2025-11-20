import IconWrapper from "./IconWrapper";

const ExecuteOnceIcon = () => {
  return (
    <IconWrapper>
      <ExecuteOncePath />
    </IconWrapper>
  );
};

export default ExecuteOnceIcon;

const ExecuteOncePath = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.1469 9.0428C17.1469 4.56693 13.5185 0.93853 9.04267 0.93853C4.56681 0.93853 0.938408 4.56693 0.938408 9.0428C0.938408 13.5187 4.56681 17.1471 9.04267 17.1471C13.5185 17.1471 17.1469 13.5187 17.1469 9.0428ZM18 9.0428C18 13.9898 13.9897 18.0001 9.04267 18.0001C4.09567 18.0001 0.0853271 13.9898 0.0853271 9.0428C0.0853271 4.09579 4.09567 0.0854492 9.04267 0.0854492C13.9897 0.0854492 18 4.09579 18 9.0428Z"
        fill="black"
      />
      <path
        d="M9.08916 13.9053V5.27772L6.99524 6.69481V5.61116L9.08916 4.18018H10.0663V13.9053H9.08916Z"
        fill="black"
      />
    </svg>
  );
};
