export const employeesData = [
    {
        id: 1,
        email: "john.doe@company.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Complete Project Proposal",
                description: "Draft and submit Q2 project proposal",
                date: "2024-04-15",
                category: "Planning",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 2,
                title: "Client Meeting",
                description: "Weekly status update with client ABC",
                date: "2024-04-10",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                id: 3,
                title: "Code Review",
                description: "Review pull requests for frontend team",
                date: "2024-04-12",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 2,
        email: "sarah.smith@company.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Database Optimization",
                description: "Optimize database queries for better performance",
                date: "2024-04-14",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 2,
                title: "Team Training",
                description: "Conduct training session on new technologies",
                date: "2024-04-16",
                category: "Training",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: 3,
                title: "Documentation Update",
                description: "Update API documentation",
                date: "2024-04-11",
                category: "Documentation",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                id: 4,
                title: "Security Audit",
                description: "Perform security audit of the application",
                date: "2024-04-13",
                category: "Security",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 3,
        email: "mike.wilson@company.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Bug Fixes",
                description: "Fix reported bugs in the payment module",
                date: "2024-04-12",
                category: "Development",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 2,
                title: "Feature Implementation",
                description: "Implement new user dashboard features",
                date: "2024-04-15",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: 3,
                title: "Code Deployment",
                description: "Deploy latest changes to production",
                date: "2024-04-10",
                category: "DevOps",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                id: 4,
                title: "Performance Testing",
                description: "Conduct performance tests on new features",
                date: "2024-04-14",
                category: "Testing",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 5,
                title: "Sprint Planning",
                description: "Prepare for upcoming sprint planning meeting",
                date: "2024-04-16",
                category: "Planning",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            }
        ]
    },
    {
        id: 4,
        email: "emma.brown@company.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "UI Design Review",
                description: "Review and approve new UI designs",
                date: "2024-04-13",
                category: "Design",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 2,
                title: "Client Presentation",
                description: "Prepare presentation for client meeting",
                date: "2024-04-15",
                category: "Meetings",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: 3,
                title: "User Testing",
                description: "Coordinate user testing sessions",
                date: "2024-04-11",
                category: "Testing",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            }
        ]
    },
    {
        id: 5,
        email: "james.taylor@company.com",
        password: "123",
        tasks: [
            {
                id: 1,
                title: "Server Maintenance",
                description: "Perform routine server maintenance",
                date: "2024-04-14",
                category: "DevOps",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                id: 2,
                title: "Code Migration",
                description: "Migrate legacy code to new framework",
                date: "2024-04-16",
                category: "Development",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                id: 3,
                title: "Team Meeting",
                description: "Weekly team sync-up",
                date: "2024-04-12",
                category: "Meetings",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                id: 4,
                title: "Documentation Review",
                description: "Review technical documentation updates",
                date: "2024-04-15",
                category: "Documentation",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ]
    }
];

export const adminData = [
    {
        id: 1,
        email: "admin@company.com",
        password: "123"
    }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employeesData))
    localStorage.setItem('admin',JSON.stringify(adminData))
}

export const getLocalStorage = () => {
    const employees =JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}


   
    

}
