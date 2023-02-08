// global header component
function Header(props: { h2Left: string; h2Right: string }): JSX.Element {
  const { h2Left, h2Right } = props;
  return (
    <div className="flex justify-between px-4 pt-4 dark:text-white">
      <h2>{h2Left}</h2>
      <h2>{h2Right}</h2>
    </div>
  );
}

export default Header;
