import { createFileRoute } from "@tanstack/react-router";
import LegalPage from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions — 2.07 Studio" },
      {
        name: "description",
        content:
          "The terms that govern your use of 2.07 Studio's website, services, and engagements.",
      },
      { property: "og:title", content: "Terms & Conditions — 2.07 Studio" },
      {
        property: "og:description",
        content:
          "Read the terms governing engagements, deliverables, payments, and intellectual property at 2.07 Studio.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="May 2, 2026"
      intro="These Terms & Conditions govern your use of the 2.07 Studio website and the services we provide. By engaging with us, you agree to the terms below."
      sections={[
        {
          heading: "Acceptance of terms",
          body: (
            <p>
              By accessing this website or commissioning services from 2.07 Studio, you
              confirm that you have read, understood, and agree to be bound by these Terms &
              Conditions and our Privacy Policy.
            </p>
          ),
        },
        {
          heading: "Services & scope",
          body: (
            <p>
              2.07 Studio provides digital marketing, branding, content, web, and app
              development services. The exact scope, deliverables, and timeline of any
              engagement will be defined in a separate proposal, statement of work, or
              written agreement.
            </p>
          ),
        },
        {
          heading: "Payments",
          body: (
            <p>
              Unless agreed otherwise in writing, projects require an upfront deposit before
              work begins, with the balance invoiced according to the milestones defined in
              your proposal. Invoices are due within the period stated; late payments may
              incur additional charges or pause active work.
            </p>
          ),
        },
        {
          heading: "Intellectual property",
          body: (
            <>
              <p>
                Final deliverables transfer to the client upon full payment of all related
                invoices. Until then, all designs, code, and assets remain the property of
                2.07 Studio.
              </p>
              <p>
                We retain the right to display non-confidential work in our portfolio, case
                studies, and marketing channels, unless explicitly agreed otherwise.
              </p>
            </>
          ),
        },
        {
          heading: "Revisions & approvals",
          body: (
            <p>
              Each project includes a defined number of revision rounds. Additional revisions
              beyond that scope may be billed separately. Once a deliverable is approved in
              writing, further changes are treated as new work.
            </p>
          ),
        },
        {
          heading: "Confidentiality",
          body: (
            <p>
              Both parties agree to keep confidential any non-public information shared during
              an engagement, including business strategies, customer data, and proprietary
              materials.
            </p>
          ),
        },
        {
          heading: "Limitation of liability",
          body: (
            <p>
              2.07 Studio is not liable for any indirect, incidental, or consequential
              damages arising out of the use of our website or services. Our total liability
              for any claim is limited to the fees paid for the specific deliverable that
              gave rise to the claim.
            </p>
          ),
        },
        {
          heading: "Termination",
          body: (
            <p>
              Either party may terminate an engagement with reasonable written notice. The
              client remains responsible for payment of all work completed up to the
              termination date.
            </p>
          ),
        },
        {
          heading: "Governing law",
          body: (
            <p>
              These terms are governed by the laws of India. Any disputes arising from the
              use of our services will be subject to the exclusive jurisdiction of the
              competent courts in Gujarat, India.
            </p>
          ),
        },
        {
          heading: "Contact",
          body: (
            <p>
              Questions about these terms? Reach us at{" "}
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
      ]}
    />
  );
}
