let mockData1 = {
    groupName: '招聘职位',
    subjects: [
        {
            subjectName: '工程研发部门',
            items: [
                {
                    itemName: 'Mac 开发工程师',
                    amount: 9
                },
                {
                    itemName: 'iOS App 测试工程师',
                    amount: 17
                },
                {
                    itemName: 'Android 远程控制工程师',
                    amount: 61
                },
                {
                    itemName: 'Web 前端工程师',
                    amount: 31
                },
                {
                    itemName: 'Android 多媒体软件开发工程师',
                    amount: 2
                }
            ]
        },
        {
            subjectName: '产品设计部门',
            items: [
                {
                    itemName: '网页设计师',
                    amount: 47
                },
                {
                    itemName: 'ID / 工业设计师',
                    amount: 39
                },
                {
                    itemName: '视觉设计师 / GUI界面设计师',
                    amount: 42
                },
                {
                    itemName: '平面设计师',
                    amount: 8 
                }
            ]
        }

    ]
}

let mockData2 = {
    groupName: '招聘岗位',
    subjects: [
        {
            subjectName: '工程研发',
            items: [
                {
                    itemName: 'Mac 开发工程师',
                    amount: 5
                },
                {
                    itemName: 'iOS App 测试工程师',
                    amount: 10
                },
                {
                    itemName: 'Android 远程控制工程师',
                    amount: 80
                },
                {
                    itemName: 'Web 前端工程师',
                    amount: 50
                },
                {
                    itemName: 'Android 多媒体软件开发工程师',
                    amount: 5
                }
            ]
        },
        {
            subjectName: '产品设计',
            items: [
                {
                    itemName: '网页设计师',
                    amount: 70
                },
                {
                    itemName: 'ID / 工业设计师',
                    amount: 50
                },
                {
                    itemName: '视觉设计师 / GUI界面设计师',
                    amount: 30
                },
                {
                    itemName: '平面设计师',
                    amount: 20
                }
            ]
        }

    ]
}

var mockData = mockData1

export default function getMockData() {
    mockData = mockData == mockData1? mockData2: mockData1
    return mockData
}