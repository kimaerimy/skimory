interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return <p className="text-sm text-red-500">{message}</p>;
}
