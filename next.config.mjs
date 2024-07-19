import withMDX from "@next/mdx";

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

export default withMDX({
  extension: /\.mdx?$/,
  options: {
    // Any specific MDX options can be added here
  },
})(nextConfig);
