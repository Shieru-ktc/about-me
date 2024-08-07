import type { MDXComponents } from "mdx/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="my-6 text-5xl font-bold" {...props} />,
    h2: (props) => <h2 className="my-5 text-4xl font-semibold" {...props} />,
    h3: (props) => <h3 className="my-4 text-3xl font-semibold" {...props} />,
    h4: (props) => <h4 className="my-3 text-2xl font-semibold" {...props} />,
    h5: (props) => <h5 className="my-2 text-xl font-semibold" {...props} />,
    h6: (props) => <h6 className="my-1 text-lg font-semibold" {...props} />,
    p: (props) => <p className="my-2 text-base leading-7" {...props} />,
    a: (props) => (
      <Link
        className="text-blue-600 hover:underline dark:text-blue-400"
        href={props.href as string}
      >
        {props.children}
      </Link>
    ),
    ul: (props) => (
      <ul className="my-4 ml-6 list-inside list-disc" {...props} />
    ),
    ol: (props) => <ol className="my-4 list-inside list-decimal" {...props} />,
    li: (props) => <li className="my-1" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="my-4 border-l-4 border-gray-300 pl-4 italic"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="rounded bg-gray-200 p-1 text-red-500 dark:bg-gray-800"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="my-4 overflow-auto rounded bg-gray-800 p-4 text-white"
        {...props}
      />
    ),
    table: (props) => <Table {...props} />,
    thead: (props) => <TableHeader {...props} />,
    tbody: (props) => <TableBody {...props} />,
    tr: (props) => <TableRow {...props} />,
    th: (props) => <TableHead {...props} />,
    td: (props) => <TableCell {...props} />,
    // imgじゃなくてImage使えって怒られるのとalt使えって怒られるので全部黙らせる
    // eslint-disable-next-line
    img: (props) => <img className="h-auto max-w-full" {...props} />,
    hr: (props) => <hr className="my-4 border-t border-gray-300" {...props} />,
    strong: (props) => <strong className="font-semibold" {...props} />,
    em: (props) => <em className="italic" {...props} />,
    del: (props) => <del className="line-through" {...props} />,
    ...components,
  };
}
