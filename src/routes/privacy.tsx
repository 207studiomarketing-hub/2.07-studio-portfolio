import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — 2.07 Studio" },
      {
        name: "description",
        content:
          "Learn how 2.07 Studio collects, uses, and protects your personal information when you interact with our website and services.",
      },
      { property: "og:title", content: "Privacy Policy — 2.07 Studio" },
      {
        property: "og:description",
        content:
          "How 2.07 Studio handles personal data, cookies, analytics, and your privacy rights.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="May 2, 2026"
      intro="Your privacy matters. This policy explains what information 2.07 Studio collects, how we use it, and the choices you have over your data."
      sections={[
        {
          heading: "Information we collect",
          body: (
            <>
              <p>
                When you contact us through our website, we collect the details you
                voluntarily provide — typically your name, email address, phone number, and
                the contents of your message.
              </p>
              <p>
                We also collect limited technical data automatically, such as your browser
                type, device, approximate location, referring page, and how you interact with
                our site, in order to operate and improve the experience.
              </p>
            </>
          ),
        },
        {
          heading: "How we use your information",
          body: (
            <>
              <p>
                We use the information you provide to respond to enquiries, deliver the
                services you request, send proposals or invoices, and maintain a record of our
                business relationship.
              </p>
              <p>
                Aggregated, non-identifying analytics help us understand which content
                resonates and how to refine our services.
              </p>
            </>
          ),
        },
        {
          heading: "Cookies & analytics",
          body: (
            <p>
              Our site uses essential cookies for functionality and analytics cookies (such as
              Google Analytics) to measure traffic. You can disable cookies in your browser
              settings; some parts of the site may not function as intended without them.
            </p>
          ),
        },
        {
          heading: "Sharing of information",
          body: (
            <p>
              We do not sell your personal information. We may share limited data with trusted
              service providers (such as email delivery, hosting, and analytics) strictly to
              operate our services, or where required by law.
            </p>
          ),
        },
        {
          heading: "Data retention",
          body: (
            <p>
              We retain your information only for as long as necessary to fulfil the purposes
              described above, comply with our legal obligations, resolve disputes, and
              enforce our agreements.
            </p>
          ),
        },
        {
          heading: "Your rights",
          body: (
            <p>
              You may request access to, correction of, or deletion of your personal data at
              any time. To exercise these rights, email us at{" "}
              <a
                href="mailto:2.07studiomarketing@gmail.com"
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                2.07studiomarketing@gmail.com
              </a>
              .
            </p>
          ),
        },
        {
          heading: "Updates to this policy",
          body: (
            <p>
              We may update this Privacy Policy occasionally to reflect changes in our
              practices or applicable law. The “Last updated” date above indicates when this
              policy was most recently revised.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:2.07studiomarketing@gmail.com"
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                2.07studiomarketing@gmail.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+917016498118"
                className="text-white underline underline-offset-4 hover:opacity-80"
              >
                +91 70164 98118
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
