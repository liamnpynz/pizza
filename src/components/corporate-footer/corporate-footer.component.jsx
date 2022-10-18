import "./corporate-footer.styles.scss";
import { footerColumns } from "../../variable_data/footerColumns";

export const CorporateFooter = () => {
  const ACol = (props) => {
    return (
      <div className="colx">
        {props.objArray.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    );
  };

  return (
    <div className="corporate-footer">
      {footerColumns.map((col) => (
        <ACol key={col.colID} objArray={col.items} />
      ))}{" "}
    </div>
  );
};
