export const sampleChats = [{
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ['1', '2']
}, {
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
    name: "John Don",
    _id: "2",
    groupChat: false,
    members: ['1', '2']
}]

export const sampleUsers = [{
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
    name: "John Doe",
    _id: "1",
}, {
    avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
    name: "John Don",
    _id: "2",
}]

export const sampleNotifications = [{
    sender: {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Doe",
    },
    _id: "1",
}, {
    sender: {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Don",
    },
    _id: "2",
}]

export const sampleMessages = [{
    attachments: [
        {
            public_id: "1",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
        },
    ],
    content: "Hello",
    _id: "1",
    sender: {
        _id: "2",
        name: "John Don",
    },
    chat: 'chatid',
    createdAt: '2024-01-10T10:10:10',
}, {
    attachments: [
        {
            public_id: "1",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
        },
    ],
    content: "Hi",
    _id: "2",
    sender: {
        _id: "1",
        name: "John Doe",
    },
    chat: 'chatid',
    createdAt: '2024-01-10T10:10:10',
}]

export const dashboardData = {
    users: [{
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Doe",
        _id: "1",
        username: "johndoe",
        friends: 10,
        groups: 5,
    }, {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Don",
        _id: "2",
        username: "johndon",
        friends: 15,
        groups: 3,
    }],
    chats: [{
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Doe",
        _id: "1",
        groupChat: false,
        members: [
            {
                _id: "1",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            }, {
                _id: "2",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            }
        ],
        totalMembers: 2,
        totalMessages: 2,
        creator: {
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            name: "John Doe",
        },
    }, {
        avatar: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s"],
        name: "John Don",
        _id: "2",
        groupChat: true,
        members: [
            {
                _id: "1",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            }, {
                _id: "2",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            }
        ],
        totalMembers: 2,
        totalMessages: 2,
        creator: {
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
            name: "John Don",
        },
    }],
    messages: [
        {
            attachments: [
                {
                    public_id: "1",
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
                },
            ],
            content: "Hello",
            _id: "1",
            sender: {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
                name: "John Don",
            },
            chat: 'chatid',
            createdAt: '2024-01-10T10:10:10',
            groupChat: false,
        }, {
            attachments: [],
            content: "Hi",
            _id: "2",
            sender: {
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMoHCrLnExblm8TAwn8X8zBhbxQDKg1kiFo2lR5aIPw&s",
                name: "John Doe",
            },
            chat: 'chatid',
            createdAt: '2024-01-10T10:10:10',
            groupChat: false,
        }
    ]
}