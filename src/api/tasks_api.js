const initial = [
  {
    boardName: "Platform Launch",
    selected: false,
    columns: [
      {
        columnName: "TODO",
        tasks: [
          {
            tasksName: "Build UI for aboarding flow",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
            ],
          },
          
        ],
      },
      {
        columnName: "Doing",
        tasks: [
          {
            tasksName: "design Setting and search pages",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
              { subtasksName: "subTask3", checked: false },
            ],
          },
          {
            tasksName: "design onboarding flow",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
            ],
          },
        ],
      },
      {
        columnName: "Done",
        tasks: [
          
          {
            tasksName: "design onboarding flow",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
            ],
          },
        ],
      },
    ],
  },
  {
    boardName: "Marketing Plan",
    selected: true,
    columns: [
      {
        columnName: "TODO",
        tasks: [
          {
            tasksName: "marketing plan for aboarding flow",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
            ],
          },
          {
            tasksName: "marketing plan for search",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
              { subtasksName: "subTask3", checked: true },
            ],
          },
        ],
      },
      {
        columnName: "Doing",
        tasks: [
          {
            tasksName: "marketing plan pages",
            subtasks: [
              { subtasksName: "subTask1", checked: true },
              { subtasksName: "subTask2", checked: false },
              { subtasksName: "subTask3", checked: false },
            ],
          },
        
        ],
      },
    ],
  },
];

export default initial;
