import clsx from "clsx";

const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => (
    <>Textnnnn</>
  )

  return href ? (
    <a
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx("relative, p-0.5 g5 rounded-2xl shadow-500 group")}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
