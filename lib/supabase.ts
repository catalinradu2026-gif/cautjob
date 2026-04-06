// Supabase will be initialized when NEXT_PUBLIC_SUPABASE_URL is set
// For MVP, using mock data

export const supabase = null

// Mock jobs data
export const mockJobs = [
  {
    id: '1',
    title: 'Specialist IT Help Desk',
    company: 'TechCorp Craiova',
    sector: 'IT',
    salary: '2500-3000 RON',
    location: 'Craiova',
    description: 'Suport tehnic level 1',
  },
  {
    id: '2',
    title: 'Contabil Senior',
    company: 'Audit Plus SRL',
    sector: 'Contabilitate',
    salary: '3000-3500 RON',
    location: 'Craiova',
    description: 'Contabilitate și declarații',
  },
]
