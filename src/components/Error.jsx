import { Alert } from "antd";
export default function Error() {
  return (
    <>
      <Alert
        message="Ошибка"
        description="Не удалось получить данные"
        type="error"
        showIcon
      />
    </>
  );
}
