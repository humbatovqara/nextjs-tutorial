import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home Page</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About me</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog Page</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          header {
            background-color: #fff;
            border-bottom: 2px solid #ccc;
          }

          header ul {
            display: flex;
          }

          header ul li a {
            display: flex;
            align-items: center;
            padding: 0 20px;
            height: 60px;
            text-decoration: none;
            color: #000;
          }
        `}
      </style>
    </header>
  );
}
