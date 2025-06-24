const admin = {
  id: 1,
  email: "h@me.c",
  firstname: "Admin",
  password: "123"
};

const employees = [
  {
    id: 101,
    firstname: "Ahmed",
    role: "employee",
    email: "user1@me.com",
    password: "123",
    taskCount: 3,
    activeCount: 0,
    newTaskCount: 0,
    completedCount: 0,
    failedCount: 0,
    tasks: [
      {
       
  title: "Sample Task",
  description: "This is a placeholder",
  date: "2025-06-11",
  category: "General",
  active: true,
  newTask: true,
  completed: false,
  failed: false


      },
      {
        title: "Client Meeting",
        description: "Meeting with XYZ Corp",
        date: "2025-06-03",
        category: "Meetings",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review teammate's code",
        date: "2025-06-04",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 102,
    firstname: "Zainab",
    role: "employee",
    email: "user2@me.com",
    password: "123",
    taskCount: 4,
    activeCount: 2,
    newTaskCount: 2,
    completedCount: 1,
    failedCount: 1,
    tasks: [
      {
        title: "UI Bug Fixing",
        description: "Fix header alignment issue",
        date: "2025-06-02",
        category: "Bug Fixing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add test cases for login module",
        date: "2025-06-03",
        category: "Testing",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy to Staging",
        description: "Push build to staging server",
        date: "2025-06-04",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Document APIs",
        description: "Update Swagger docs",
        date: "2025-06-05",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 103,
    firstname: "Hassan",
    role: "employee",
    email: "user3@me.com",
    password: "123",
    taskCount: 2,
    activeCount: 1,
    newTaskCount: 1,
    completedCount: 0,
    failedCount: 1,
    tasks: [
      {
        title: "Design Logo",
        description: "Create new logo concepts",
        date: "2025-06-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update Branding",
        description: "Implement new color scheme",
        date: "2025-06-07",
        category: "Branding",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 104,
    firstname: "Fatima",
    role: "employee",
    email: "user4@me.com",
    password: "123",
    taskCount: 3,
    activeCount: 2,
    newTaskCount: 2,
    completedCount: 1,
    failedCount: 0,
    tasks: [
      {
        title: "Customer Support",
        description: "Respond to tickets",
        date: "2025-06-06",
        category: "Support",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Team Sync",
        description: "Weekly sync-up",
        date: "2025-06-07",
        category: "Meetings",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Report Metrics",
        description: "Send weekly performance",
        date: "2025-06-08",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 105,
    firstname: "Bilal",
    role: "employee",
    email: "user5@me.com",
    password: "123",
    taskCount: 2,
    activeCount: 1,
    newTaskCount: 0,
    completedCount: 1,
    failedCount: 0,
    tasks: [
      {
        title: "Backend Integration",
        description: "Integrate payment gateway",
        date: "2025-06-09",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Database Backup",
        description: "Weekly backup process",
        date: "2025-06-10",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 106,
    firstname: "Ayesha",
    role: "employee",
    email: "user6@me.com",
    password: "123",
    taskCount: 3,
    activeCount: 1,
    newTaskCount: 1,
    completedCount: 1,
    failedCount: 1,
    tasks: [
      {
        title: "Market Research",
        description: "Competitor analysis",
        date: "2025-06-08",
        category: "Research",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Create Survey",
        description: "Design product feedback form",
        date: "2025-06-09",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Post Analysis",
        description: "Social media campaign review",
        date: "2025-06-10",
        category: "Analysis",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];




export const SetLocalStorageData = () => {
  // Only set if not already present (first time only)
  if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
  if (!localStorage.getItem('admin')) {
    localStorage.setItem('admin', JSON.stringify(admin));
  }
};

export const GetLocalStorageData = () => {
  const employee = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  // console.log(employee, admin);
  return { employee, admin }

}
SetLocalStorageData()
GetLocalStorageData()