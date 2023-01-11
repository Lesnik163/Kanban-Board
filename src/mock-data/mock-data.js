const mockData = [
    {
        title: 'Backlog',
        issues: [
            {
                id: '12345',
                name: 'Login page – performance issues',
	            description: 'Loge in to the page'
            },
            {
                id: '12346',
                name: 'Sprint bugfix',
	            description: 'Fix all the bugs'
            }
        ]
   },
    {
        title: 'Ready',
        issues: [
            {
                id: '22345',
                name:'Shop page – performance issues',
	            description: 'Start to do shop page'
            }
        ]
    },   
    {
        title: 'In Progress',
        issues: [
            {
                id: '32345',
                name:'User page – performance issues',
	            description: 'Rendering user page'
            }
        ]
    },
    {
        title: 'Finished',
        issues: [
            {
                id: '42345',
                name:'Main page – performance issues',
	            description: 'Rendering main page'
            }
        ]
    }
]
export default mockData;