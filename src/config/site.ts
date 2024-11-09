import { publicEnv } from "./public-env";

export const siteConfig = {
  name: "Index Blog",
  title: "EduConnect - Learning Never Stops",
  description:
    "Online education resources, courses, and professional development opportunities",
  canonical: publicEnv.SITE_URL,
  mainNav: [
    {
      title: "Blog",
      href: "/blog/1",
    },
    {
      title: "Index Tools",
      href: "https://seovn360.com",
    },
    {
      title: "Seo Tools",
      href: "https://app.google360s.com",
    },
    {
      title: "Color Space",
      href: "https://buildwebsite360.com",
    },
    {
      title: "Simple Image",
      href: "https://review360.info",
    },
  ],
  socialLinks: {
    instagram: "https://www.instagram.com/devlife_solution",
    linkedin: "https://www.linkedin.com/in/devlife-solutions",
    facebook: "https://www.facebook.com/profile.php?id=61567434645035",
    youtube: "https://www.youtube.com/@DevlifeSolutions",
  },
};

export const HOME_TOOL_GROUPS = [
  {
    title: "Image Editing Tools",
    slug: "image-tools",
    tools: [
      {
        title: "Image Compression Tool",
        desc: "Reduce image file sizes to boost page loading speed without losing quality.",
        href: "https://review360.info",
      },
      {
        title: "Image Format Converter",
        desc: "Convert images between formats like JPEG, PNG, and WebP as needed.",
        href: "https://review360.info/image-converter",
      },
      {
        title: "Watermark Adder",
        desc: "Protect your images by adding watermarks to prevent unauthorized use.",
        href: "https://review360.info/insert-logo",
      },
      {
        title: "Online Image Cropper",
        desc: "Crop images to the exact size or aspect ratio you need.",
        href: "https://review360.info/image-crop",
      },
      {
        title: "Resize Images",
        desc: "Change image dimensions to fit website or social media needs.",
        href: "https://review360.info/image-resizer",
      },
      {
        title: "Upload to Cloud",
        desc: "Easily upload images to the cloud for convenient access and sharing.",
        href: "https://review360.info/upload-image",
      },
    ],
  },
  {
    title: "Text Analysis & Comparison",
    slug: "text-tools",
    tools: [
      {
        title: "Text Comparator",
        desc: "Compare texts side-by-side to spot differences and revisions.",
        href: "https://tools360s.com/text-compare",
      },
      {
        title: "Word Counter",
        desc: "Get word, character, and sentence counts to meet document guidelines.",
        href: "https://tools360s.com/word-counter",
      },
    ],
  },
  {
    title: "Link Management Utilities",
    slug: "url-tools",
    tools: [
      {
        title: "Short URL Generator",
        desc: "Convert long URLs to short, easy-to-share links.",
        href: "https://free-url.short360s.com/",
      },
      {
        title: "QR Code Generator",
        desc: "Create QR codes for URLs for fast mobile sharing.",
        href: "https://free-url.short360s.com/qr-code-generator/",
      },
      {
        title: "Link Performance Tracker",
        desc: "Analyze link traffic and engagement to track performance.",
        href: "https://free-url.short360s.com/stats",
      },
    ],
  },
  {
    title: "SEO & Site Optimization",
    slug: "seo-tools",
    tools: [
      {
        title: "SEO Backlink Creator",
        desc: "Generate backlinks to increase site ranking and visibility.",
        href: "https://tools360s.com/backlink-maker",
      },
      {
        title: "URL Redirect Path Checker",
        desc: "Verify redirects to prevent SEO issues and broken links.",
        href: "https://tools360s.com/redirect-checker",
      },
      {
        title: "Google Cache Checker",
        desc: "See Google’s cached version of your website for indexing accuracy.",
        href: "https://tools360s.com/google-cache-checker/",
      },
      {
        title: "Website Security Scanner",
        desc: "Scan for vulnerabilities to protect your website from threats.",
        href: "https://tools360s.com/safe-browsing",
      },
      {
        title: "Google Index Status",
        desc: "Check if your URLs are indexed for maximum search engine visibility.",
        href: "https://tools360s.com/google-index-checker/",
      },
      {
        title: "Meta Tag Optimizer",
        desc: "Analyze and optimize meta tags for better search engine ranking.",
        href: "https://tools360s.com/meta-tags-analyzer/",
      },
    ],
  },
  {
    title: "Utility Tools",
    slug: "utility-tools",
    tools: [
      {
        title: "Generate Strong Passwords",
        desc: "Create secure passwords using random combinations of characters.",
        href: "https://tools360s.com/password-generator/",
      },
      {
        title: "Invoice Maker",
        desc: "Create professional invoices with detailed information for clients.",
        href: "https://tools360s.com/invoice-generator",
      },
      {
        title: "Browser Update Checker",
        desc: "Ensure your browser is up-to-date for optimal performance and security.",
        href: "https://tools360s.com/browser-update/",
      },
      {
        title: "Find Public IP Address",
        desc: "Identify your device’s public IP address for network configurations.",
        href: "https://tools360s.com/what-is-my-ip",
      },
      {
        title: "Code Formatter",
        desc: "Format code (HTML, CSS, JavaScript, JSON) for readability and collaboration.",
        href: "https://tools360s.com/code-formatter",
      },
    ],
  },
];
