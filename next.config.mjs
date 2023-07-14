/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL: "https://restcountries.com/v3.1",
  },
  output: "export",
  basePath: "/rest-countries",
};

export default nextConfig;
