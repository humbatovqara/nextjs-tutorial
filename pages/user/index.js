import { useRouter } from "next/router";

export default function User() {
  const router = useRouter();
  const { url } = router.query;

  return <p>User: {url}</p>
}
