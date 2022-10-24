import Link from "next/link";

export default function User({ users }) {
  return (
    <div className="user">
      {users.map((user, index) => (
        <Link href={`/user/${user.id}`} className="userInner" key={index}>
          <a>{user.name}</a>
        </Link>
      ))}
      <style jsx>
        {`
          .user {
            display: flex;
            flex-wrap: wrap;
            width: 1200px;
            margin: 20px auto;
            gap: 20px;
          }

          .user .userInner {
            width: calc(25% - 20px);
            background-color: #ccc;
            box-shadow: 5px 10px 5px #888888;
            padding: 10px;
          }
        `}
      </style>
    </div>
  );
}
