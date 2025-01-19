import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  env: {
    NEXT_PUBLIC_API_FORM_URL: process.env.NEXT_PUBLIC_API_FORM_URL,
    NEXT_PUBLIC_API_GENERATE_QUESTIONS_URL: process.env.NEXT_PUBLIC_API_GENERATE_QUESTIONS_URL,
    NEXT_API_KEY_GENERATE_QUESTIONS: process.env.NEXT_API_KEY_GENERATE_QUESTIONS,
  },
  async rewrites() {
    return [
      {
        source: '/form/preview/:FormType/:FormId',
        destination: '/form/preview/:FormType/:FormId',
      },
      {
        source: '/verify/:token',
        destination: '/verify/:token',
      },
      {
        source: '/reset-password/:resetToken',
        destination: '/reset-password/:resetToken',
      },
    ];
  },
};

export default nextConfig;
