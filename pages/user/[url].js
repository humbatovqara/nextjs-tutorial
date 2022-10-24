import Head from "next/head";

export default function UserDetail({ user }) {
  return (
    <div className="user">
      <Head>
        <title>
          {user.id}-{user.name}
        </title>
      </Head>
      <h3>Name - {user.name}</h3>
      <div className="summary">
        <p>Username - {user.username}</p>
        <p>Email - {user.email}</p>
        <p>Website - {user.website}</p>
      </div>
      <style jsx>
        {`
          .user {
            width: 1200px;
            margin: 20px auto;
          }

          .user h3 {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 20px;
          }
          .user .summary {
            font-size: 18px;
            color: #666;
            line-height: 1.7;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.url}`
  );
  const user = await request.json();
  return {
    props: {
      user,
    },
  };
}
