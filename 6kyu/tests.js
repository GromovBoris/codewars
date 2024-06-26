let response = {
  totalCount: 547,
  pageSize: 12,
  items: [
    {
      id: 642,
      userName: "Ese_nin",
      description: "Бобр или бобёр?",
      location: null,
      images: [
        {
          url: "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/fc1d1c3b-9139-4b66-8af5-a269eeddb1df_users/283/post/6d3e84c8-7ee1-489f-9ffb-7bb30a1de9be-images-1440x1440",
          width: 1440,
          height: 1440,
          fileSize: 142053,
          createdAt: "2024-05-04T11:26:28.873Z",
          uploadId: "66361b64b47f800209608756",
        },
      ],
      createdAt: "2024-05-04T11:26:57.731Z",
      updatedAt: "2024-05-04T11:26:57.731Z",
      avatarOwner:
        "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/e9d91de4-8c7a-49f7-a94c-dd29e59c6796_users/283/avatar/4ebfc028-12ca-4f17-84db-667888e80ce7-images-192x192",
      ownerId: 283,
      owner: {
        firstName: "Sergey",
        lastName: "Niskovskikh",
      },
    },
    {
      id: 641,
      userName: "nikitaa950",
      description: "pubpub",
      location: null,
      images: [
        {
          url: "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/dddc7e79-c665-4cd3-9a1c-89d974ee41be_users/40/post/bad8fb5f-d873-4df8-9592-49be25de6a55-images-1440x1440",
          width: 1440,
          height: 1440,
          fileSize: 3932514,
          createdAt: "2024-05-04T10:12:44.237Z",
          uploadId: "66360a1bb47f80020960873b",
        },
        {
          url: "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/f2ee1aea-a1ac-4944-8f36-50a837f9988b_users/40/post/b456ad1a-130f-4ebd-9211-09149c980695-images-1440x1440",
          width: 1440,
          height: 1440,
          fileSize: 142717,
          createdAt: "2024-05-04T10:12:44.237Z",
          uploadId: "66360a17b47f80020960872c",
        },
        {
          url: "https://staging-it-incubator.s3.eu-central-1.amazonaws.com/trainee-instagram-api/Image/3dbf1cd8-68b0-4d79-96ed-a40dc7aba80c_users/40/post/309a4a81-e37b-4322-8cff-e025db6476ea-images-1440x1440",
          width: 1440,
          height: 1440,
          fileSize: 2792478,
          createdAt: "2024-05-04T10:12:44.237Z",
          uploadId: "66360a1bb47f800209608739",
        },
      ],
      createdAt: "2024-05-04T10:12:44.933Z",
      updatedAt: "2024-05-04T10:12:44.933Z",
      ownerId: 40,
      owner: {
        firstName: "Bim",
        lastName: "Bom",
      },
    },
  ],
};

let ownerIds = response.items.map((item) => item.ownerId);
let randomId = ownerIds[Math.floor(Math.random() * ownerIds.length)];
console.log(randomId);
