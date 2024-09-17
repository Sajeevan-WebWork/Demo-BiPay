import { Key } from 'lucide-react';
import Profile from '../../public/Profile.jpg'

const assetsData = [
    {
        name: "Cameron Williamson",
        code: "D-10",
        serialNo: "020418185311",
        working: "No",
        type: "DOC",
        date: "4/21/12"
    },
    {
        name: "Ronald Richards",
        code: "BDC-925",
        serialNo: "020418064913",
        working: "No",
        type: "TXT",
        date: "8/2/19"
    },
    {
        name: "Arlene McCoy",
        code: "HIQ-5",
        serialNo: "020418191671",
        working: "No",
        type: "PDF",
        date: "5/30/14"
    },
    {
        name: "Wade Warren",
        code: "D-025",
        serialNo: "020418188268",
        working: "No",
        type: "RAR",
        date: "5/7/16"
    },
    {
        name: "Esther Howard",
        code: "CV-84",
        serialNo: "020418188275",
        working: "Yes",
        type: "MKV",
        date: "4/4/18"
    }
];

const historyData = [
    {
        title: "Product Designer",
        list: [
            {
                jobTime: "Full time",
                jobType: "Remote",
                years: "2019-2022"
            }
        ]
    },

    {
        title: "Customer Service Manager",
        list: [
            {
                jobTime: "Full time",
                jobType: "Remote",
                years: "2019-2022"
            }
        ]
    },

    {
        title: "Human Resource Manager",
        list: [
            {
                jobTime: "Full time",
                jobType: "Remote",
                years: "2019-2022"
            }
        ]
    },

    {
        title: "Chief Executive Officer",
        list: [
            {
                jobTime: "Full time",
                jobType: "Remote",
                years: "2019-2022"
            }
        ]
    },

    {
        title: "Product Designer",
        list: [
            {
                jobTime: "Full time",
                jobType: "Remote",
                years: "2019-2022"
            }
        ]
    }
];

const SalaryData = [
    {
        amount: "8,865.00 ",
        list: [
            {
                to: "Sebastian Vettel",
                Date: "Remote",
                Paymentcode: "2019-2022"
            }
        ]
    },

    {
        amount: "3,173.00",
        list: [
            {
                to: "Darlene Robertson",
                Date: "6/19/14",
                Paymentcode: "B-8640"
            }
        ]
    },

    {
        amount: "3,542.00",
        list: [
            {
                to: "Kristin Watson",
                Date: "6/19/14",
                Paymentcode: "B-8640"
            }
        ]
    },
];

const SlipTableData = [
    {
        Payrun: "CH66 2RD",
        Period: "June 13, 2020",
        PayrunType: "Offline",
        Status: "Paid",
        Salary: "$40,000",
    },

    {
        Payrun: "KT17 9NL",
        Period: "June 13-14, 2020",
        PayrunType: "One-Time",
        Status: "Pending",
        Salary: "$100,000",
    },

    {
        Payrun: "SN10 2RP",
        Period: "June 4-7, 2020",
        PayrunType: "Full Amount",
        Status: "Paid",
        Salary: "$150,000",
    },

    {
        Payrun: "G72 7ND",
        Period: "June 11-14, 2020",
        PayrunType: "Recurring",
        Status: "Pending",
        Salary: "$180,000",
    },

    {
        Payrun: "NW6 4HA",
        Period: "June 13-14, 2020",
        PayrunType: "Full Amount",
        Status: "Pending",
        Salary: "$120,000",
    }
]

const leaveUserData = [
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1725371389~exp=1725374989~hmac=fdbe141a785092f97dd5b22270a5afb3f7b3566e38e2cf85acd5bd9486463c66&w=826",
            name: "Jeremy Neigh"
        },
        DateTime: "9/23/16",
        Duration: "15h 40m",
        Department: "Finance",
        Type: "Design",
        Attachment: "DebitNoteMckee.jpg",
        Status: "Busy",
    },

    {
        Profile: {
            profileImg: Profile,
            name: "Annette Black"
        },
        DateTime: "7/27/13",
        Duration: "11h 45m",
        Department: "Accounting",
        Type: "Product",
        Attachment: "debitnote_0310.xlsx",
        Status: "Busy",
    },

    {
        Profile: {
            profileImg: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            name: "Theresa Webb"
        },
        DateTime: "11/7/16",
        Duration: "10h 25m",
        Department: "Front Desk",
        Type: "Marketing",
        Attachment: "McKeeDebit01.pdf",
        Status: "Ready",
    },

    {
        Profile: {
            profileImg: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            name: "Kathryn Murphy"
        },
        DateTime: "6/19/14",
        Duration: "16h 55m",
        Department: "Houseman",
        Type: "Support",
        Attachment: "dealsheet2020.pdf",
        Status: "Busy",
    },

    {
        Profile: {
            profileImg: "https://img.freepik.com/premium-photo/3d-portraits-happy-people-white-background-cartoon-characters-boy-man-vector-illustration_623919-4088.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            name: "Courtney Henry"
        },
        DateTime: "7/11/19",
        Duration: "15h 45m",
        Department: "Laundry",
        Type: "Operations",
        Attachment: "debitnote_march.pdf",
        Status: "Ready",
    },

    {
        Profile: {
            profileImg: "https://img.freepik.com/premium-psd/lego-figure-with-glasses-blue-shirt-with-button-front_1217673-201032.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            name: "Jane Cooper"
        },
        DateTime: "8/2/19",
        Duration: "10h 45m",
        Department: "Legal",
        Type: "HR",
        Attachment: "dealsheet_march.xlsx",
        Status: "Busy",
    },
]

const AttendanceDetailsData = [
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1725371389~exp=1725374989~hmac=fdbe141a785092f97dd5b22270a5afb3f7b3566e38e2cf85acd5bd9486463c66&w=826",
            name: "Jeremy Neigh"
        },
        attendance: {
            January: "15.30",
            February: "10.30",
            March: "20.00",
            April: "08.00",
            May1: "11.00",
            May2: "13.00",
            May3: "12.30",
            May4: "19.00",
            May5: "11.30",
            May6: "19.30",
            May7: "13.30",
            May8: "18.00"
        }
    },
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-photo/african-american-businessman-wear-glasses-office-background-with-graphics_41418-2712.jpg",
            name: "Annette Black"
        },
        attendance: {
            January: "14.30",
            February: "08.30",
            March: "13.30",
            April: "08.30",
            May1: "15.00",
            May2: "14.00",
            May3: "09.00",
            May4: "13.30",
            May5: "12.00",
            May6: "17.00",
            May7: "15.30",
            May8: "15.00"
        }
    },
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-photo/young-happy-travel-man-making-selfie_171337-12812.jpg",
            name: "Theresa Webb"
        },
        attendance: {
            January: "08.00",
            February: "08.00",
            March: "18.30",
            April: "16.00",
            May1: "08.30",
            May2: "19.30",
            May3: "20.30",
            May4: "10.00",
            May5: "20.30",
            May6: "17.00",
            May7: "09.30",
            May8: "20.00"
        }
    },
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-photo/happy-african-man-listening-music-with-headphones_171337-12429.jpg",
            name: "Kathryn Murphy"
        },
        attendance: {
            January: "17.00",
            February: "09.30",
            March: "20.30",
            April: "09.30",
            May1: "12.30",
            May2: "17.00",
            May3: "10.00",
            May4: "17.30",
            May5: "20.30",
            May6: "11.30",
            May7: "14.30",
            May8: "10.30"
        }
    },
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-photo/cheerful-man-white-background_53876-64319.jpg",
            name: "Courtney Henry"
        },
        attendance: {
            January: "20.30",
            February: "18.30",
            March: "15.30",
            April: "10.30",
            May1: "18.00",
            May2: "10.00",
            May3: "17.00",
            May4: "17.30",
            May5: "17.30",
            May6: "17.30",
            May7: "13.30",
            May8: "10.00"
        }
    },
    {
        Profile: {
            profileImg: "https://img.freepik.com/free-photo/successful-man-isolated-white-background_53876-64730.jpg",
            name: "Jane Cooper"
        },
        attendance: {
            January: "09.00",
            February: "16.30",
            March: "12.30",
            April: "08.30",
            May1: "17.00",
            May2: "19.00",
            May3: "19.00",
            May4: "19.30",
            May5: "09.30",
            May6: "12.00",
            May7: "13.00",
            May8: "19.00"
        }
    }
];

const AdministrationTableData = [
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1725371389~exp=1725374989~hmac=fdbe141a785092f97dd5b22270a5afb3f7b3566e38e2cf85acd5bd9486463c66&w=826",
            Name: "Jeremy Neigh",
          },
          RoleName: "Jeremy Neigh",
          Permission: "Calendar Book Only",
          Users: "yumihanada",
          ManageUsers: Key
        },
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/premium-psd/lego-figure-with-glasses-blue-shirt-with-button-front_1217673-201032.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            Name: "Annette Black",
          },
          RoleName: "Annette Black",
          Permission: "Calendar Provider",
          Users: "momo0425",
          ManageUsers: Key,
        },
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611716.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            Name: "Theresa Webb",
          },
          RoleName: "Theresa Webb",
          Permission: "Referral Delegate",
          Users: "kuumomo",
          ManageUsers: Key,
        },
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/free-psd/3d-illustration-with-online-avatar_23-2151303097.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            Name: "Kathryn Murphy",
          },
          RoleName: "Kathryn Murphy",
          Permission: "Organization Administrator",
          Users: "partrer",
          ManageUsers: Key,
        },
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/premium-photo/3d-portraits-happy-people-white-background-cartoon-characters-boy-man-vector-illustration_623919-4088.jpg?ga=GA1.1.1157425756.1721644565&semt=ais_hybrid",
            Name: "Courtney Henry",
          },
          RoleName: "Courtney Henry",
          Permission: "Calendar Delegate",
          Users: "cherrycute",
          ManageUsers: Key,
        },
        {
          Profile: {
            ProfileImg: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1725371389~exp=1725374989~hmac=fdbe141a785092f97dd5b22270a5afb3f7b3566e38e2cf85acd5bd9486463c66&w=826",
            Name: "Jane Cooper",
          },
          RoleName: "Jane Cooper",
          Permission: "Network Referrer",
          Users: "antowatasi",
          ManageUsers: Key,
        },
]
export { assetsData, historyData, SalaryData, SlipTableData, leaveUserData, AttendanceDetailsData, AdministrationTableData };
