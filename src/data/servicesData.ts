export const servicesData: {
  label: string;
  sections: {
    title: string;
    subTitle?: string;
    description: string;
    imageUrl?: string;
    link?: string;
    items: { label: string; subItems: string[] }[] | string[];
  }[];
}[] = [
  {
    label: "SEBI Regulatory Advisory",
    sections: [
      {
        title: "Investment Advisers (IA)",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        subTitle: "(As per SEBI (Investment Advisers) Regulations, 2013)",
        description:
          "Investment Advisers (IAs) are SEBI-registered entity who provides personalized investment advice to clients for a fee; we assist them with seamless registration, robust compliance frameworks, and ongoing regulatory support to ensure fully compliant and efficient operations.",
        items: [
          {
            label: "Registration Support",
            subItems: [
              "Eligibility assessment (qualification, certification, net worth)",
              "Business model structuring (individual/non-individual IA)",
              "Preparation & filing of application with SEBI",
            ],
          },
          {
            label: "Documentation & Framework",
            subItems: [
              "Client agreements, risk profiling & suitability frameworks",
              "Investment policy, compliance manuals, and SOPs",
              "Code of conduct & conflict of interest policies",
            ],
          },
          {
            label: "Compliance Management",
            subItems: [
              "Ongoing compliance with IA Regulations",
              "Maintenance of records, KYC & client documentation",
              "Periodic reporting and disclosures",
            ],
          },
          {
            label: "Audit & Review",
            subItems: [
              "Annual compliance audit as mandated by SEBI",
              "Gap analysis and remediation support",
            ],
          },
          {
            label: "Regulatory Advisory",
            subItems: [
              "Guidance on fee structure, segregation of advisory & distribution",
              "Assistance in inspections, notices, and regulatory queries",
            ],
          },
        ],
      },
      {
        title: "Research Analyst (RA)",
        subTitle: "(As per SEBI (Research Analysts) Regulations, 2014)",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "Research Analysts (RAs) are SEBI-registered entity who prepares and publish research reports or investment recommendations; we support them with smooth registration, robust compliance frameworks, and ongoing regulatory guidance to ensure accurate, transparent, and compliant research operations",
        items: [
          {
            label: "Registration Support",
            subItems: [
              "Eligibility assessment (qualification, certification, net worth)",
              "Business model structuring (individual/non-individual RA)",
              "Preparation & filing of application with SEBI",
            ],
          },
          {
            label: "Documentation & Framework",
            subItems: [
              "Research report templates and compliance manuals",
              "Code of conduct & conflict of interest policies",
            ],
          },
          {
            label: "Compliance Management",
            subItems: [
              "Ongoing compliance with RA Regulations",
              "Maintenance of records and research documentation",
              "Periodic reporting and disclosures",
            ],
          },
          {
            label: "Audit & Review",
            subItems: [
              "Annual compliance audit as mandated by SEBI",
              "Gap analysis and remediation support",
            ],
          },
          {
            label: "Advisory Services",
            subItems: [
              "Best practices for research dissemination",
              "Handling SEBI queries and inspection support",
            ],
          },
        ],
      },
      {
        title: "Portfolio Management Services (PMS)",
        subTitle: "(As per SEBI (Portfolio Managers) Regulations, 2020)",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "Portfolio Managers (PMS) are SEBI-registered entity who manages investment portfolios on behalf of clients under discretionary or non-discretionary mandates; we assist them with seamless registration, strong compliance and operational frameworks, and ongoing regulatory support to ensure efficient and fully compliant portfolio management operations.",
        items: [
          {
            label: "Registration & Setup",
            subItems: [
              "Eligibility and net worth assessment",
              "Structuring discretionary/non-discretionary PMS models",
              "Application filing and SEBI liaison",
            ],
          },
          {
            label: "Operational Framework",
            subItems: [
              "Client agreements, disclosure documents & KYC processes",
              "Investment management and risk management policies",
              "SOPs for dealing, execution, and reporting",
            ],
          },
          {
            label: "Compliance & reporting",
            subItems: [
              "Periodic reporting to clients and SEBI",
              "Maintenance of books, records, and transaction logs",
              "Compliance with investment restrictions and guidelines",
            ],
          },
          {
            label: "Audit & Certification",
            subItems: [
              "Performance reporting review",
              "Internal audit and compliance audit coordination",
            ],
          },
        ],
      },
      {
        title: "Alternative Investment Funds (AIF)",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        subTitle:
          "(As per SEBI (Alternative Investment Funds) Regulations, 2012)",
        description:
          "Alternative Investment Funds (AIFs) are SEBI-regulated pooled investment vehicles that raise funds from investors to invest in alternative asset classes such as private equity, venture capital, and hedge strategies; we support them with end-to-end structuring, registration, compliance frameworks, and ongoing regulatory advisory to ensure smooth and compliant fund operations",
        items: [
          {
            label: "Fund Structuring & Registration",
            subItems: [
              "Structuring of AIF (Category I, II, III)",
              "Drafting of trust deed / LLP agreement / company structure",
              "Preparation and filing of AIF application with SEBI",
            ],
          },
          {
            label: "Documentation & Setup",
            subItems: [
              "Review of Private Placement Memorandum (PPM)",
              "Investor agreements and contribution documents",
              "Compliance framework and governance policies",
            ],
          },
          {
            label: "Compliance & Operations",
            subItems: [
              "Ongoing SEBI compliance and reporting",
              "Assistance in investor onboarding and KYC",
              "Filing of periodic reports (quarterly/annual)",
            ],
          },
          {
            label: "Audit & Review",
            subItems: [
              "Coordination for audit of AIF schemes",
              "PPM audit and compliance testing",
            ],
          },
          {
            label: "Regulatory Advisory",
            subItems: [
              "Investment conditions and leverage norms",
              "Support in scheme launches and modifications",
              "Handling SEBI queries, inspections, and approvals",
            ],
          },
        ],
      },
    ],
  },
  {
    label: "CORPORATE LAW ADVISORY",
    sections: [
      {
        title: "Company / LLP Formation",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "We provide end-to-end support for setting up business entities tailored to your strategic and operational needs.",
        items: [
          "Incorporation of Private Limited Companies, Public Companies, and LLPs",
          "Advisory on optimal business structure",
          "Drafting incorporation documents and filings",
          "Conversion of Partnership Firms/LLPs into Companies",
          "Post-incorporation compliance and setup support",
        ],
      },
      {
        title: "Corporate & Secretarial Services",
        description:
          "Our corporate governance services ensure that your entity remains compliant, organized, and audit-ready at all times.",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        items: [
          "ROC filings and regulatory compliance management",
          "Maintenance of statutory registers and records",
          "Drafting of board minutes and resolutions",
          "Assistance in obtaining ISIN for securities",
          "Ongoing secretarial advisory and support",
        ],
      },
      {
        title: "Corporate Transactions",
        description:
          "We provide transaction advisory and execution support for key corporate actions.",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        items: [
          "Private Placement of securities",
          "Rights Issue and Bonus Issue",
          "Buyback of securities",
          "Drafting of offer documents and resolutions",
          "Regulatory filings and end-to-end transaction execution",
        ],
      },
      {
        title: "Fundraising Support",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "We assist businesses in raising capital efficiently while ensuring legal and regulatory compliance.",
        items: [
          "Structuring fundraising transactions",
          "Review of investor pitch documentation",
          "Drafting of Term Sheets and Shareholders’ Agreements (SHA)",
          "Coordination with investors and stakeholders",
          "End-to-end transaction advisory",
        ],
      },
      {
        title: "Strike Off & Winding Up",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "We provide structured and compliant closure solutions for companies and LLPs.",
        items: [
          "Filing of STK-2 (Companies) and Form 24 (LLP)",
          "Advisory on eligibility and documentation",
          "Handling regulatory queries and approvals",
          "Support in voluntary winding-up processes",
          "Ensuring legally compliant closure",
        ],
      },
      {
        title: "Due Diligence",
        imageUrl: "/services/ia.jpg",
        link: "/services/Investment-Advisers",
        description:
          "We conduct thorough due diligence to support informed decision-making in investments, mergers, and funding transactions.",
        items: [
          "Pre-IPO due diligence",
          "Financial and legal due diligence",
          "Compliance health checks",
          "Risk identification and mitigation analysis",
          "Preparation of detailed due diligence reports",
        ],
      },
    ],
  },

  {
    label: "STARTUP ADVISORY",
    sections: [
      {
        title: "Startup Support",
        description:
          "We partner with startups through their growth journey by providing strategic, regulatory, and operational support.",
        items: [
          "Business structuring and setup advisory",
          "Assistance in obtaining DPIIT recognition",
          "Compliance framework design for early-stage startups",
          "Fundraising and investor readiness support",
          "Ongoing advisory for scaling and regulatory compliance",
        ],
      },
    ],
  },
  {
    label: "OTHER SERVICES",
    sections: [
      {
        title: "Contract Drafting",
        description:
          "We offer precise and legally sound drafting services to safeguard your business interests.",
        items: [
          "Non-Disclosure Agreements (NDAs)",
          "Memorandums of Understanding (MOUs)",
          "Service and Consultancy Agreements",
          "Shareholders’ Agreements and commercial contracts",
          "Customized legal documentation",
        ],
      },
      {
        title: "Trademark Filing",
        description:
          "Protecting your brand identity is critical. We provide end-to-end trademark registration and protection services.",
        items: [
          "Trademark search and availability analysis",
          "Filing of trademark applications",
          "Handling examination reports and objections",
          "Representation in hearings, if required",
          "End-to-end registration and post-registration support",
        ],
      },
    ],
  },
];
