import { CSSProperties, ChangeEventHandler } from "react";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  style?: CSSProperties;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const TextInput2 = (props: TextInputProps) => {
  return (
    <div
      style={{
        ...styles.style,
        ...props.style,
      }}
    >
      <div style={styles.labelStyle}>{props.label}</div>

      <input
        type={props.type ? props.type : "text"}
        name={props.name}
        style={styles.inputStyle}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </div>
  );
};

const styles = {
  style: {
    position: "relative",
    display: "inline-block",
    width: "100%",
    paddingBottom: "12px",
  } as CSSProperties,
  labelStyle: {
    position: "absolute",
    top: "8px",
    left: "18px",
    fontSize: "11px",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    width: "300px",
    zIndex:"10000"
  } as CSSProperties,
  inputStyle: {
    backgroundColor: "#3e404b",
    color: "white",
    fontFamily: "VisbyRoundCF-DemiBold",
    outline: "none",
    border: "none",
    borderRadius: "8px",
    padding: "24px 18px 12px 18px",
    width: "100%", // For the padding 18px + 18px
  } as CSSProperties,
};

export default TextInput2;
