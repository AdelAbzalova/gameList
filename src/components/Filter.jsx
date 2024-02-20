import { Select } from "antd";
import { useDispatch } from "react-redux";

export default function PlatformFilter(props) {
  const dispatch= useDispatch();
  const onChange = (value) => {
    dispatch(props.setFilter(value));
  };
  return (
    <Select
      showSearch
      placeholder={`Выберите ${props.placeholder}`}
      style={{ width: "53%" }}
      onChange={onChange}
      filterOption={(input, option) =>
        (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
      }
      options={props.options}
      value={props.value}
    />
  );
}
