"use client";

import { useState } from "react";
import LegalPageHeader from "../components/LegalPageHeader";
import LegalSidebar from "../components/LegalSidebar";

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

export default function Help() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSections: FAQSection[] = [
    {
      title: "Account Management",
      items: [
        {
          question: "How do I create an account?",
          answer: "Open the app and sign up using email or phone number. Follow the steps to complete your profile."
        },
        {
          question: "I forgot my password. What should I do?",
          answer: "Use Forgot Password on the login screen and follow the instructions to reset it."
        },
        {
          question: "I'm not receiving the verification code (SMS/email).",
          answer: "Check spam/junk folder (for email), make sure your phone has network, and try again after a minute. If it still fails, email support."
        },
        {
          question: "Can I change my username?",
          answer: "Some usernames can be changed depending on availability. Go to Edit Profile and try updating it."
        },
        {
          question: "How do I edit my profile?",
          answer: "Go to your profile → Edit Profile → update photo, bio, website, location, etc. → Save."
        },
        {
          question: "What is the difference between Personal, Business, and Page profiles?",
          answer: (
            <ul className="list-disc space-y-1 ml-6">
              <li><strong>Personal</strong>: individual user profile</li>
              <li><strong>Business</strong>: business identity (owned by your personal account)</li>
              <li><strong>Page</strong>: public page/profile for a brand, community, or project</li>
            </ul>
          )
        },
        {
          question: "How do I switch between profiles?",
          answer: "Go to the profile switch option in the app (Switch Profile) and choose the profile you want to use."
        },
        {
          question: "Why can't I see someone's profile or posts?",
          answer: "They may have blocked you, their account might be private, or the account/content may be deactivated/removed."
        },
        {
          question: "Why does it say \"User not found\" when I open a profile?",
          answer: "The user may have deleted their account or the profile is no longer available."
        }
      ]
    },
    {
      title: "Posts & Content",
      items: [
        {
          question: "How do I create a post?",
          answer: "Tap Add Post → choose Image/Video/Text → add caption → Share."
        },
        {
          question: "Can I edit a post after uploading?",
          answer: "If editing is available, you can edit caption/text only. Media (image/video) cannot be changed after posting."
        },
        {
          question: "Why is my post not showing to others?",
          answer: (
            <>
              <p>It may be:</p>
              <ul className="list-disc space-y-1 ml-6 mt-2">
                <li>archived</li>
                <li>private</li>
                <li>still uploading/processing</li>
                <li>removed due to reports or moderation</li>
                <li>your account is restricted</li>
              </ul>
            </>
          )
        },
        {
          question: "What does \"Archive Post\" mean?",
          answer: "Archived posts are hidden from feeds and profiles but not deleted. You can restore them later."
        },
        {
          question: "How do I restore an archived post?",
          answer: "Open Archived posts → select a post → choose Restore / Show on profile."
        },
        {
          question: "How do I delete a post?",
          answer: "Open the post → menu (⋯) → Delete Post."
        },
        {
          question: "Why are comments disabled on a post?",
          answer: "The post owner may have turned off comments. If you think it's a bug, contact support."
        }
      ]
    },
    {
      title: "Reporting & Safety",
      items: [
        {
          question: "How do I report a post, comment, or user?",
          answer: (
            <>
              <p>Tap the menu (⋯) → Report → choose a reason → submit.</p>
              <p className="mt-2">For urgent issues, also email support with username/post ID/screenshots.</p>
            </>
          )
        },
        {
          question: "What happens after I report something?",
          answer: "Reports are reviewed for safety and policy compliance. Content may be removed or restricted if it violates rules."
        },
        {
          question: "How do I block someone?",
          answer: (
            <>
              <p>Go to their profile → menu (⋯) → Block.</p>
              <p className="mt-2">Blocking stops them from interacting with you.</p>
            </>
          )
        },
        {
          question: "How do I unblock someone?",
          answer: "Go to Settings → Blocked Users → select the user → Unblock."
        }
      ]
    },
    {
      title: "Messaging & Communication",
      items: [
        {
          question: "How do messaging and chat work?",
          answer: "Chats are available for connected users. If someone is blocked, messaging will not work."
        },
        {
          question: "Calls are not working (video/audio).",
          answer: (
            <>
              <p>Check:</p>
              <ul className="list-disc space-y-1 ml-6 mt-2">
                <li>internet connection</li>
                <li>mic/camera permissions</li>
                <li>app is updated</li>
              </ul>
              <p className="mt-2">If it still fails, email support with device details.</p>
            </>
          )
        }
      ]
    },
    {
      title: "Payments & Memberships",
      items: [
        {
          question: "What is \"Buy Me a Coffee\"?",
          answer: "It's a tipping feature to support creators. Payments are processed through Stripe."
        },
        {
          question: "I paid, but it doesn't show. What should I do?",
          answer: (
            <>
              <p>Wait a few minutes and refresh. If it still doesn't show, email support with:</p>
              <ul className="list-disc space-y-1 ml-6 mt-2">
                <li>your username</li>
                <li>approximate time/date</li>
                <li>amount</li>
                <li>screenshot of receipt (if available)</li>
              </ul>
            </>
          )
        },
        {
          question: "How do memberships work?",
          answer: "Membership purchases are handled through the App Store / Google Play (via RevenueCat). Access depends on your purchase status."
        },
        {
          question: "Can I get a refund for membership?",
          answer: "Refunds are handled by Apple/Google based on their policies. You can request a refund via your App Store / Play Store account."
        }
      ]
    },
    {
      title: "Privacy & Account",
      items: [
        {
          question: "Does my MINK track my location in the background?",
          answer: "No. Location is only used if you add it to a post, event, or profile."
        },
        {
          question: "How do I delete my account?",
          answer: "Go to account settings → Delete Account and follow the steps. Account deletion is permanent."
        },
        {
          question: "What happens when I delete my account?",
          answer: "Your account and content are removed. Some records may be retained only if required for legal/payment compliance."
        }
      ]
    },
    {
      title: "Technical Support",
      items: [
        {
          question: "The app is crashing or freezing. What should I do?",
          answer: (
            <>
              <ul className="list-disc space-y-1 ml-6">
                <li>Update the app</li>
                <li>Restart your phone</li>
                <li>Check storage space</li>
                <li>Try reinstalling</li>
              </ul>
              <p className="mt-2">If it continues, email support with screenshots and device model.</p>
            </>
          )
        }
      ]
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Calculate global index for each FAQ item
  let globalIndex = 0;

  return (
    <>
      <LegalPageHeader title="Help & Support" />
      <section className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-12">
          <div className="flex gap-4 md:gap-6 lg:gap-8">
            <LegalSidebar />
            <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="space-y-8 text-text-darkGrey leading-relaxed">
                {/* Introduction */}
                <div className="pb-6">
                  <h1 className="text-3xl md:text-4xl font-bold text-text-black mb-4">
                    Help & Support
                  </h1>
                  <p className="text-base md:text-lg">
                    Welcome to <strong>my MINK</strong> Support.
                  </p>
                  <p className="text-base md:text-lg mt-2">
                    We're here to help with login issues, account settings, posts, messaging, reports, payments, privacy, and technical problems.
                  </p>
                  <p className="text-base md:text-lg mt-4">
                    If you need direct help, email us:{" "}
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline font-bold"
                    >
                      support@mymink.com.au
                    </a>
                  </p>
                  <p className="text-sm md:text-base mt-2 text-text-grey">
                    (Operated by <strong>Takemade Pty Ltd</strong>)
                  </p>
                </div>

                {/* What to include */}
                <div>
                  <p className="mb-2">
                    To help us reply faster, please include:
                  </p>
                  <ul className="list-disc space-y-1 ml-6">
                    <li>
                      Your <strong>my MINK username</strong>
                    </li>
                    <li>
                      The <strong>email/phone number</strong> linked to your account
                    </li>
                    <li>A short description of the issue</li>
                    <li>Screenshots (if available)</li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* FAQs */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-6">
                    Frequently Asked Questions (FAQs)
                  </h2>

                  <div className="space-y-6">
                    {faqSections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <h3 className="text-lg md:text-xl font-semibold text-text-black">
                          {section.title}
                        </h3>
                        <div className="space-y-0">
                          {section.items.map((item, itemIndex) => {
                            const currentIndex = globalIndex++;
                            const isOpen = openIndex === currentIndex;
                            
                            return (
                              <div
                                key={itemIndex}
                                className="border-b border-gray-200 last:border-b-0"
                              >
                                <button
                                  onClick={() => toggleFAQ(currentIndex)}
                                  className="w-full flex items-center justify-between py-4 px-0 text-left hover:text-text-black transition-colors duration-200"
                                >
                                  <span className="text-base md:text-lg font-medium text-text-black pr-4">
                                    {item.question}
                                  </span>
                                  <svg
                                    className={`w-5 h-5 flex-shrink-0 text-text-darkGrey transition-transform duration-200 ${
                                      isOpen ? "transform rotate-180" : ""
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 9l-7 7-7-7"
                                    />
                                  </svg>
                                </button>
                                {isOpen && (
                                  <div className="pb-4 text-text-darkGrey leading-relaxed">
                                    <div className="text-sm md:text-base">
                                      {typeof item.answer === "string" ? (
                                        <p>{item.answer}</p>
                                      ) : (
                                        item.answer
                                      )}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 my-8"></div>

                {/* Still Need Help */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-text-black mb-4">
                    Still Need Help?
                  </h2>
                  <p>
                    Email us at{" "}
                    <a
                      href="mailto:support@mymink.com.au"
                      className="text-primary-red hover:underline font-bold"
                    >
                      support@mymink.com.au
                    </a>{" "}
                    and we'll assist you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
