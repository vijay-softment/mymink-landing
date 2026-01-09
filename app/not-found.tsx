import Link from "next/link";
import LegalPageHeader from "./components/LegalPageHeader";

export default function NotFound() {
  return (
    <>
      <LegalPageHeader title="Page Not Found" />
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-text-black">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-text-black">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-text-darkGrey">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or doesn't exist.
            </p>
            <div className="pt-6">
              <Link
                href="/"
                className="inline-block px-6 py-3 bg-primary-red text-white font-medium rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Go Back Home
              </Link>
            </div>
            <div className="pt-4">
              <p className="text-sm text-text-grey">
                Need help?{" "}
                <Link
                  href="/help"
                  className="text-primary-red hover:underline"
                >
                  Visit our Help & Support page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
