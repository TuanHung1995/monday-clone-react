export const mockData = {
  board: {
    id: 'board-01',
    title: 'Team Management Board',
    description: 'Manage team projects and personal tasks efficiently',
    type: 'private', // or 'public'
    ownerIds: ['user-01'],
    memberIds: ['user-02', 'user-03'],
    groups: [
      {
        id: 1,
        name: 'Team Tasks',
        color: '#0073EA',
        columns: [
          { id: 1, name: 'Task', type: 'text' },
          { id: 2, name: 'Status', type: 'status' },
          { id: 3, name: 'Due Date', type: 'date' }
        ],
        rows: [
          {
            id: 101,
            values: [
              { columnId: 1, value: 'Design project wireframe', color: '#FFFFFF' },
              { columnId: 2, value: 'In Progress', color: '#FFA500' },
              { columnId: 3, value: '2025-11-01', color: '#FFFFFF' }
            ]
          },
          {
            id: 102,
            values: [
              { columnId: 1, value: 'Implement user login', color: '#FFFFFF' },
              { columnId: 2, value: 'Stuck', color: '#FF0000' },
              { columnId: 3, value: '2025-11-05', color: '#FFFFFF' }
            ]
          },
          {
            id: 103,
            values: [
              { columnId: 1, value: 'Setup CI/CD pipeline', color: '#FFFFFF' },
              { columnId: 2, value: 'Done', color: '#00FF00' },
              { columnId: 3, value: '2025-11-07', color: '#FFFFFF' }
            ]
          }
        ]
      },
      {
        id: 2,
        name: 'Personal Tasks',
        color: '#F65F7C',
        columns: [
          { id: 4, name: 'Task', type: 'text' },
          { id: 5, name: 'Status', type: 'status' },
          { id: 6, name: 'Due Date', type: 'date' }
        ],
        rows: [
          {
            id: 201,
            values: [
              { columnId: 4, value: 'Read React 18 documentation', color: '#FFFFFF' },
              { columnId: 5, value: 'In Progress', color: '#FFA500' },
              { columnId: 6, value: '2025-11-03', color: '#FFFFFF' }
            ]
          },
          {
            id: 202,
            values: [
              { columnId: 4, value: 'Update portfolio site', color: '#FFFFFF' },
              { columnId: 5, value: 'Done', color: '#00FF00' },
              { columnId: 6, value: '2025-11-06', color: '#FFFFFF' }
            ]
          },
          {
            id: 203,
            values: [
              { columnId: 4, value: 'Plan next sprint', color: '#FFFFFF' },
              { columnId: 5, value: 'Stuck', color: '#FF0000' },
              { columnId: 6, value: '2025-11-08', color: '#FFFFFF' }
            ]
          }
        ]
      }
    ]
  }
};
