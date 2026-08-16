export interface ProblemCardData {
  id: string;
  title: string;
  problem: string;
  iconName: string;
  aiOpportunity: {
    title: string;
    description: string;
    impact: string;
    tag: string;
  };
}

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  summary: string;
  iconName: string;
  deliverables: string[];
  businessImpact: string;
  timeframe: string;
}

export interface WorkflowStep {
  step: number;
  label: string;
  detail: string;
  status: 'bottleneck' | 'automated' | 'neutral';
  time: string;
}

export interface WorkflowScenario {
  id: string;
  name: string;
  description: string;
  before: WorkflowStep[];
  after: WorkflowStep[];
  beforeMetric: string;
  afterMetric: string;
  highlight: string;
}

export interface ApproachStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverable: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keySolutions?: string[];
  highlights?: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Palash Samanta",
    role: "AI Automation Consultant",
    location: "Burdwan, West Bengal, India",
    email: "palashsamanta1983@gmail.com",
    linkedin: "https://www.linkedin.com/in/palash-samanta-7639463a2",
    tagline: "AI Automation Consultant | Helping Service Businesses Automate Operations, Reduce Costs & Scale with AI",
    supportingMessage: "I help service businesses identify and implement practical AI automation opportunities that reduce repetitive work, improve customer response times, and lower operational costs.",
    heroHeadline: "Turn Repetitive Work Into Smart Systems.",
    heroSubtext: "I help service businesses automate repetitive operations, improve customer response times, reduce manual work, and scale with practical AI.",
    philosophy: [
      "Be Positive always...",
      "Be a Learner always.",
      "Keep an open mind to learn something always..."
    ],
    aboutConcept: "Most businesses don't need more employees. They need better systems.",
    aboutDetails: "I focus on practical AI automation rather than AI for the sake of AI. While AI technology is rapidly evolving, businesses only succeed when automation translates into measurable time savings, faster customer response times, and reduced operational overhead. With a deep foundation in daily business operations, I bridge real-world business bottlenecks with reliable, low-maintenance AI solutions.",
    focusAreas: [
      "Repetitive business workflows",
      "AI customer support",
      "Lead capture and follow-up",
      "Data entry and reporting",
      "Internal business processes",
      "AI-powered customer response"
    ]
  },

  trustStrip: [
    { title: "Workflow Automation", icon: "Cog", desc: "End-to-end task automation" },
    { title: "AI Customer Support", icon: "Bot", desc: "Instant 24/7 client triage" },
    { title: "Lead Capture & Follow-Up", icon: "Target", desc: "Zero lost enquiries" },
    { title: "Business Process Optimization", icon: "BarChart3", desc: "Eliminate operational drag" },
    { title: "AI Chatbots & Agents", icon: "Sparkles", desc: "Context-aware smart assistants" }
  ],

  problemCards: [
    {
      id: "manual-work",
      title: "Repetitive Manual Work",
      problem: "Too much time spent on repetitive operational tasks and data entry across fragmented tools.",
      iconName: "Clock",
      aiOpportunity: {
        title: "Automated Multi-Step Workflows",
        description: "Connect your email, CRM, spreadsheets, and messaging platforms into seamless automated pipelines that run 24/7 without human intervention.",
        impact: "Saves 15–25 hours/week per operational team",
        tag: "System Synchronization"
      }
    },
    {
      id: "slow-responses",
      title: "Slow Customer Responses",
      problem: "Customers wait too long for basic information, quotes, or support, causing frustration and churn.",
      iconName: "MessageSquareWarning",
      aiOpportunity: {
        title: "Instant AI Triage & Knowledge Base",
        description: "Deploy trained AI agents that answer common customer queries in < 15 seconds, accurately quote pricing guidelines, and escalate complex cases.",
        impact: "Sub-minute response times, 24/7 coverage",
        tag: "AI Customer Support"
      }
    },
    {
      id: "missed-leads",
      title: "Missed Leads",
      problem: "Enquiries slip through the cracks or are not followed up consistently, leaving revenue on the table.",
      iconName: "UserX",
      aiOpportunity: {
        title: "Automated Lead Qualification & Nurturing",
        description: "Capture enquiries instantly from web, email, and WhatsApp, qualify client requirements automatically, and trigger timed follow-ups.",
        impact: "100% enquiry capture rate & 3x faster booking",
        tag: "Lead Automation"
      }
    },
    {
      id: "manual-reporting",
      title: "Manual Reporting",
      problem: "Teams spend unnecessary time collecting, formatting, and organizing information into weekly summaries.",
      iconName: "FileSpreadsheet",
      aiOpportunity: {
        title: "Automated Data Aggregation & AI Digests",
        description: "Auto-extract data from operations, compile clean executive summaries, and generate instant automated reports delivered straight to your inbox.",
        impact: "Eliminates 90% of manual reporting hours",
        tag: "Process Optimization"
      }
    }
  ] as ProblemCardData[],

  services: [
    {
      id: "workflow-automation",
      number: "01",
      title: "Workflow & Process Automation",
      summary: "Automate repetitive business workflows and reduce unnecessary manual steps.",
      iconName: "GitBranch",
      deliverables: [
        "Audit of repetitive manual bottlenecks",
        "Cross-platform integration (Email, CRM, Sheets, Webhooks)",
        "Error-handling & automated notifications",
        "Zero-code / Low-maintenance pipeline setup"
      ],
      businessImpact: "Eliminates repetitive data entry and manual handoffs across daily operations.",
      timeframe: "1–2 weeks implementation"
    },
    {
      id: "ai-customer-support",
      number: "02",
      title: "AI Customer Support",
      summary: "Use AI chatbots and AI-powered responses to provide faster customer support.",
      iconName: "Bot",
      deliverables: [
        "Custom knowledge-base setup with company FAQs & docs",
        "24/7 conversational customer assistant",
        "Smart escalation routing to human staff for VIP tickets",
        "Multi-channel support (Website widget, Email, WhatsApp)"
      ],
      businessImpact: "Resolves 60–80% of routine inquiries instantly with zero human waiting time.",
      timeframe: "1–2 weeks implementation"
    },
    {
      id: "lead-capture-followup",
      number: "03",
      title: "Lead Capture & Follow-Up",
      summary: "Capture enquiries, qualify leads and automate follow-up communication.",
      iconName: "Target",
      deliverables: [
        "Automated multi-channel inquiry capture",
        "AI-driven lead qualification & budget scoring",
        "Automated calendar booking & reminder sequences",
        "Consistent follow-up cadences via Email / SMS"
      ],
      businessImpact: "Ensures every potential customer receives immediate, professional engagement.",
      timeframe: "1–2 weeks implementation"
    },
    {
      id: "ai-chatbots-agents",
      number: "04",
      title: "AI Chatbots & Agents",
      summary: "Create practical AI assistants that help customers and internal teams.",
      iconName: "Cpu",
      deliverables: [
        "Internal staff SOP search & document assistants",
        "Task-oriented autonomous agents for data processing",
        "Custom system prompts tailored to brand voice",
        "Secure integration with internal business files"
      ],
      businessImpact: "Empowers internal teams to find answers and execute processes in seconds.",
      timeframe: "2–3 weeks implementation"
    },
    {
      id: "business-process-optimization",
      number: "05",
      title: "Business Process Optimization",
      summary: "Analyze end-to-end workflows to eliminate bottlenecks, cut redundant overhead, and prepare your business systems for AI-readiness.",
      iconName: "Layers",
      deliverables: [
        "Full operational workflow mapping",
        "Identification of high-ROI automation targets",
        "System simplification & software stack cleanup",
        "Clear automation blueprint & cost-benefit roadmap"
      ],
      businessImpact: "Structures your business operations so automation produces maximum financial return.",
      timeframe: "1 week assessment"
    }
  ] as ServiceData[],

  workflowScenarios: [
    {
      id: "inquiry-lead",
      name: "Lead Inquiry & Follow-Up Workflow",
      description: "From incoming customer inquiry to qualified booking",
      before: [
        { step: 1, label: "Customer Enquiry", detail: "Form submitted via website or email", status: "neutral", time: "00:00" },
        { step: 2, label: "Manual Checking", detail: "Staff notices email hours later in busy inbox", status: "bottleneck", time: "+ 3.5 hrs" },
        { step: 3, label: "Manual Response", detail: "Staff types custom reply asking standard questions", status: "bottleneck", time: "+ 4.5 hrs" },
        { step: 4, label: "Manual Follow-up", detail: "Staff forgets to follow up until days later", status: "bottleneck", time: "+ 2 days" },
        { step: 5, label: "Lost Time & Leads", detail: "Client hired competitor who responded first", status: "bottleneck", time: "Lost Deal" }
      ],
      after: [
        { step: 1, label: "Customer Enquiry", detail: "Customer submits form or sends message", status: "neutral", time: "00:00" },
        { step: 2, label: "AI Captures Enquiry", detail: "Instant webhook capture into CRM with zero delay", status: "automated", time: "+ 2 sec" },
        { step: 3, label: "AI Qualifies Request", detail: "AI analyzes intent, checks availability & budget", status: "automated", time: "+ 5 sec" },
        { step: 4, label: "Automated Response", detail: "Personalized response sent with calendar booking link", status: "automated", time: "+ 12 sec" },
        { step: 5, label: "Smart Follow-up", detail: "Automated friendly reminder sent if booking isn't confirmed", status: "automated", time: "Scheduled" },
        { step: 6, label: "Team Handles High-Value Work", detail: "Staff meets pre-qualified, prepared client", status: "automated", time: "Client Won" }
      ],
      beforeMetric: "Average response: 4–8 hours (High drop-off rate)",
      afterMetric: "Average response: < 15 seconds (100% follow-up rate)",
      highlight: "Less repetitive work. Faster response. Better operations."
    },
    {
      id: "support-triage",
      name: "Customer Support & Ticket Triage",
      description: "From customer issue submission to resolved ticket",
      before: [
        { step: 1, label: "Support Ticket", detail: "Customer requests help with a standard issue", status: "neutral", time: "00:00" },
        { step: 2, label: "Queue Waiting", detail: "Ticket sits in unassigned support queue", status: "bottleneck", time: "+ 2 hrs" },
        { step: 3, label: "Manual Routing", detail: "Manager manually assigns ticket to representative", status: "bottleneck", time: "+ 3 hrs" },
        { step: 4, label: "Copy-Pasting FAQs", detail: "Agent manually copies standard reply from notes", status: "bottleneck", time: "+ 4 hrs" },
        { step: 5, label: "Support Backlog", detail: "Staff burnt out on repetitive inquiries", status: "bottleneck", time: "Overhead" }
      ],
      after: [
        { step: 1, label: "Support Ticket", detail: "Customer submits support ticket", status: "neutral", time: "00:00" },
        { step: 2, label: "AI Instant Classification", detail: "AI categorizes urgency, topic, and sentiment", status: "automated", time: "+ 1 sec" },
        { step: 3, label: "AI Resolves Common Cases", detail: "Instant accurate answer from knowledge base", status: "automated", time: "+ 10 sec" },
        { step: 4, label: "Automated Sync", detail: "Ticket auto-logged and marked resolved with customer confirmation", status: "automated", time: "+ 30 sec" },
        { step: 5, label: "High-Priority Escalation", detail: "Only complex issues routed to human specialists", status: "automated", time: "Fast Fix" }
      ],
      beforeMetric: "Average resolution: 4.5 hours per routine query",
      afterMetric: "Instant resolution for 75% of routine questions",
      highlight: "Eliminate support queues. Delight clients 24/7."
    }
  ] as WorkflowScenario[],

  approachSteps: [
    {
      number: "01",
      title: "Identify",
      tagline: "Pinpoint high-impact bottlenecks",
      description: "Identify where AI can create the biggest operational impact by analyzing repetitive tasks, response delays, and manual handoffs in your daily business.",
      activities: [
        "Map existing operational workflows",
        "Calculate hours spent on repetitive manual tasks",
        "Identify data silos and communication friction points"
      ],
      deliverable: "Operational Bottleneck Map & Opportunity Audit"
    },
    {
      number: "02",
      title: "Prioritize",
      tagline: "Focus on practical ROI",
      description: "Prioritize opportunities based on practical ROI. We avoid complex AI hype and focus exclusively on automations with rapid implementation and clear payback.",
      activities: [
        "Rank opportunities by time saved vs implementation effort",
        "Select zero-maintenance tool combinations",
        "Define concrete success metrics (hours saved, response speed)"
      ],
      deliverable: "Prioritized AI Implementation Roadmap"
    },
    {
      number: "03",
      title: "Build",
      tagline: "Implement reliable automations",
      description: "Build and implement the appropriate automation. Seamlessly connecting your tools with reliable error-handling and testing before going live.",
      activities: [
        "Build multi-step automated pipelines and AI prompts",
        "Connect webhooks, databases, CRMs, and email systems",
        "Thorough testing with edge cases and human fallback mechanisms"
      ],
      deliverable: "Fully Configured & Tested AI Automation System"
    },
    {
      number: "04",
      title: "Measure",
      tagline: "Track results & expand",
      description: "Measure the improvement and identify the next opportunity. Validate actual time savings and optimize the system as your business continues to scale.",
      activities: [
        "Review response time improvements and saved work hours",
        "Refine prompt accuracy and edge-case routing",
        "Identify the next high-ROI operational workflow to automate"
      ],
      deliverable: "Performance Report & Continuous Optimization Plan"
    }
  ] as ApproachStep[],

  experience: [
    {
      role: "AI Automation Consultant",
      company: "Self Employed",
      period: "August 2026 – Present",
      location: "Burdwan, West Bengal, India",
      type: "Consulting / Systems Architecture",
      description: "Helping service businesses identify and implement practical AI automation opportunities that reduce repetitive work, improve customer response times, and lower operational costs.",
      keySolutions: [
        "AI Readiness Audits",
        "Workflow & Process Automation",
        "AI Customer Support",
        "Lead Capture & Follow-Up Automation",
        "AI Chatbots & Agents",
        "Business Process Optimization"
      ]
    },
    {
      role: "Business Correspondent",
      company: "Bank of India",
      period: "May 2018 – Present",
      location: "Burdwan, West Bengal, India",
      type: "Banking & Business Operations",
      description: "Managing rigorous daily financial and business operations, client documentation, transactions, and customer communication. This extensive frontline operational experience provides deep practical insight into where operational friction, manual data entry, and procedural bottlenecks slow businesses down.",
      highlights: [
        "Deep hands-on understanding of real-world business operations",
        "Managing client communications, records, and procedural compliance",
        "Identifying practical operational efficiencies that actually work on the ground"
      ]
    }
  ] as ExperienceItem[],

  skills: [
    { name: "AI Automation", category: "Core", level: "Expert" },
    { name: "Artificial Intelligence", category: "Core", level: "Specialist" },
    { name: "Workflow Automation", category: "Systems", level: "Expert" },
    { name: "AI Chatbots", category: "Agents", level: "Advanced" },
    { name: "Generative AI", category: "Core", level: "Advanced" },
    { name: "Business Process Optimization", category: "Strategy", level: "Expert" }
  ],

  education: {
    institution: "The University of Burdwan",
    degree: "Bachelor of Arts — Art/Art Studies, General",
    period: "2002–2005",
    location: "Burdwan, West Bengal, India"
  },

  certifications: [
    { name: "NISM Certifications", issuer: "National Institute of Securities Markets", desc: "Financial markets and regulatory competence" },
    { name: "Be10x", issuer: "Be10x AI", desc: "Generative AI & Automation Tools Mastery" }
  ]
};
