import { Spin } from "antd";
export default function Loading() {
  return (
    <Spin tip="Загрузка..." size="large" style={{ marginTop: "60px" }}>
      <div className="content" />
    </Spin>
  );
}
