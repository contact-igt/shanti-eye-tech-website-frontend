import Link from "next/link";

export default function Button({ children, href, ...props }) {
  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    }

    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return <button {...props}>{children}</button>;
}
