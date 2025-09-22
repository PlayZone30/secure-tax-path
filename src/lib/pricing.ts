// Pricing configuration for TaxPro Services
// This file contains hardcoded pricing data as specified in the PRD

export interface ServicePricing {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  category: 'individual' | 'nonresident' | 'compliance' | 'business' | 'additional';
  popular?: boolean;
}

export const servicePricing: ServicePricing[] = [
  {
    id: 'individual-1040',
    name: 'Individual Tax Return (Form 1040)',
    description: 'Comprehensive tax preparation for U.S. residents including wages, self-employment, rental, and investment income.',
    price: '$150',
    features: [
      'Federal Form 1040 preparation',
      'State tax return filing',
      'Schedule C for self-employment',
      'Schedule D for capital gains',
      'Schedule E for rental income',
      'Electronic filing (e-file)',
      'Refund tracking',
      'Tax planning consultation'
    ],
    category: 'individual',
    popular: true
  },
  {
    id: 'nonresident-1040nr',
    name: 'Nonresident Return (Form 1040-NR)',
    description: 'Specialized filing for nonresident aliens, including students, researchers, and temporary workers.',
    price: '$200',
    features: [
      'Form 1040-NR preparation',
      'Treaty benefit optimization',
      'F-1, J-1, H-1B status handling',
      'Dual-status considerations',
      'State requirements analysis',
      'ITIN application assistance',
      'Estimated tax calculations',
      'Status change planning'
    ],
    category: 'nonresident'
  },
  {
    id: 'fbar-filing',
    name: 'FBAR Filing (FinCEN Form 114)',
    description: 'Foreign Bank Account Report filing for U.S. persons with foreign financial accounts.',
    price: '$300',
    features: [
      'FinCEN Form 114 preparation',
      'Foreign account identification',
      'Compliance threshold analysis',
      'Penalty assessment & relief',
      'Voluntary disclosure programs',
      'Ongoing compliance monitoring'
    ],
    category: 'compliance'
  },
  {
    id: 'fatca-filing',
    name: 'FATCA Filing (Form 8938)',
    description: 'Foreign Account Tax Compliance Act reporting for specified foreign financial assets.',
    price: '$300',
    features: [
      'Form 8938 preparation',
      'Foreign asset valuation',
      'Compliance threshold analysis',
      'Foreign trust reporting',
      'Ongoing compliance monitoring'
    ],
    category: 'compliance'
  },
  {
    id: 'itin-application',
    name: 'ITIN Application (Form W-7)',
    description: 'Individual Taxpayer Identification Number applications and renewals for tax compliance.',
    price: '$100',
    features: [
      'New ITIN applications',
      'ITIN renewal processing',
      'Document authentication',
      'Supporting documentation review',
      'Rejection response handling',
      'Family ITIN applications',
      'Expedited processing options',
      'Status tracking & updates'
    ],
    category: 'compliance'
  },
  {
    id: 'amended-return',
    name: 'Amended Return (Form 1040-X)',
    description: 'Corrections and amendments to previously filed tax returns for refund recovery or compliance.',
    price: '$200',
    features: [
      'Form 1040-X preparation',
      'Error identification & correction',
      'Refund optimization',
      'Supporting documentation',
      'IRS correspondence handling',
      'Audit protection',
      'Multi-year amendments',
      'Statute of limitations review'
    ],
    category: 'individual'
  },
  {
    id: 'bookkeeping-monthly',
    name: 'Bookkeeping (Monthly)',
    description: 'Monthly bookkeeping, reconciliations, and financial reporting for small businesses.',
    price: '$300',
    features: [
      'Monthly financial statements',
      'Bank reconciliations',
      'Accounts payable/receivable',
      'Payroll processing support',
      'QuickBooks setup & training',
      'Tax preparation ready books',
      'Financial analysis & insights',
      'Year-end closing services'
    ],
    category: 'business'
  },
  {
    id: 'prior-year-returns',
    name: 'Prior Year Returns (2022-2025)',
    description: 'Filing of back tax returns for missing years with penalty minimization strategies.',
    price: '$250',
    features: [
      'Multi-year return preparation',
      'Penalty minimization strategies',
      'Interest calculation',
      'Document reconstruction',
      'IRS correspondence handling',
      'Payment plan assistance'
    ],
    category: 'additional'
  },
  {
    id: 'tax-consultation',
    name: 'Tax Planning Consultation',
    description: 'Strategic tax planning sessions to optimize your current and future tax situations.',
    price: '$150',
    features: [
      'Strategic tax planning',
      'Future year optimization',
      'Entity structure analysis',
      'Investment tax strategies',
      'Retirement planning',
      'Estate planning considerations'
    ],
    category: 'additional'
  }
];

export const paymentMethods = [
  {
    method: 'Check',
    description: 'Personal or business checks accepted',
    icon: '📝'
  },
  {
    method: 'Bank Transfer',
    description: 'Direct bank transfer or wire transfer',
    icon: '🏦'
  },
  {
    method: 'Cash',
    description: 'Cash payments for in-person services',
    icon: '💵'
  }
];

export const pricingNotes = {
  paymentDue: 'Payment due upon service completion',
  contactInfo: 'Contact us for payment arrangements and billing questions',
  email: 'billing@taxproservices.com',
  phone: '(555) 123-4567'
};
