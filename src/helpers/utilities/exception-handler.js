export default function customException(message, status = 500) {
  const error = { status, message };
  throw error;
}
