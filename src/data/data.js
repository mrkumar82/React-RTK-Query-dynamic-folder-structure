export const explorer = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'public',
      isFolder: true,
      items: [
        {
          name: 'index.html',
          isFolder: false,
        },
        {
          name: 'Robot.txt',
          isFolder: false,
        },
      ],
    },
    {
      name: 'src',
      isFolder: true,
      items: [
        {
          name: 'Component',
          isFolder: false,
        },
        {
          name: 'Data',
          isFolder: false,
        },
        {
          name: 'Services',
          isFolder: false,
        },
        {
          name: 'Store',
          isFolder: false,
        },
      ],
    },
  ],
};
