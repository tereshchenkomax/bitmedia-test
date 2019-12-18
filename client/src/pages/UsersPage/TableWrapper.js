import React from 'react'
import {Table} from "../../components/Table";

export function TableWrapper() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Id',
                accessor: 'id',
            },
            {
                Header: 'First Name',
                accessor: 'first_name',
            },
            {
                Header: 'Last Name',
                accessor: 'last_name',
            },
            {
                Header: 'Email',
                accessor: 'email',
            },
            {
                Header: 'Gender',
                accessor: 'gender',
            },
            {
                Header: 'IP address',
                accessor: 'ip_address',
            },
            {
                Header: 'Total Clicks',
                accessor: 'totalClicks',
            },
            {
                Header: 'Total page views',
                accessor: 'totalViews',
            }

        ],
        []
    );

    const data = [
        {
            id: 51,
            first_name: "Moses",
            last_name: "Bromwich",
            email: "mbromwich1e@umich.edu",
            gender: "Male",
            ip_address: "6.68.93.74"
        },
        {
            id: 52,
            first_name: "Ange",
            last_name: "Fairhead",
            email: "afairhead1f@examiner.com",
            gender: "Female",
            ip_address: "198.242.196.132"
        },
        {
            id: 53,
            first_name: "Bobinette",
            last_name: "Bossingham",
            email: "bbossingham1g@gravatar.com",
            gender: "Female",
            ip_address: "64.249.96.217"
        },
        {
            id: 54,
            first_name: "Pavla",
            last_name: "Kitchingham",
            email: "pkitchingham1h@uol.com.br",
            gender: "Female",
            ip_address: "24.209.229.124"
        },
        {
            id: 55,
            first_name: "Austin",
            last_name: "Muneely",
            email: "amuneely1i@sourceforge.net",
            gender: "Female",
            ip_address: "97.194.33.14"
        },
        {
            id: 56,
            first_name: "Chic",
            last_name: "Bly",
            email: "cbly1j@mediafire.com",
            gender: "Male",
            ip_address: "219.24.144.105"
        },
        {
            id: 57,
            first_name: "Alexa",
            last_name: "Fyldes",
            email: "afyldes1k@skype.com",
            gender: "Female",
            ip_address: "170.128.144.218"
        },
        {
            id: 58,
            first_name: "Cheryl",
            last_name: "Hudspeth",
            email: "chudspeth1l@ibm.com",
            gender: "Female",
            ip_address: "203.70.20.148"
        },
        {
            id: 59,
            first_name: "Adele",
            last_name: "Dickie",
            email: "adickie1m@techcrunch.com",
            gender: "Female",
            ip_address: "222.162.176.25"
        },
        {
            id: 60,
            first_name: "Sancho",
            last_name: "Chiplin",
            email: "schiplin1n@cyberchimps.com",
            gender: "Male",
            ip_address: "185.153.116.191"
        },
        {
            id: 61,
            first_name: "Bondie",
            last_name: "Hadingham",
            email: "bhadingham1o@vimeo.com",
            gender: "Male",
            ip_address: "5.28.148.175"
        },
        {
            id: 62,
            first_name: "Coleen",
            last_name: "Spohr",
            email: "cspohr1p@flickr.com",
            gender: "Female",
            ip_address: "140.133.79.228"
        },
        {
            id: 63,
            first_name: "Chet",
            last_name: "Merida",
            email: "cmerida1q@cam.ac.uk",
            gender: "Male",
            ip_address: "176.208.19.186"
        },
        {
            id: 64,
            first_name: "Shena",
            last_name: "Josselson",
            email: "sjosselson1r@mayoclinic.com",
            gender: "Female",
            ip_address: "6.67.176.129"
        },
        {
            id: 65,
            first_name: "Vonni",
            last_name: "Ould",
            email: "vould1s@linkedin.com",
            gender: "Female",
            ip_address: "184.207.200.135"
        },
        {
            id: 66,
            first_name: "Geoff",
            last_name: "Widdowson",
            email: "gwiddowson1t@reddit.com",
            gender: "Male",
            ip_address: "73.71.8.240"
        },
        {
            id: 67,
            first_name: "Selena",
            last_name: "Rizzi",
            email: "srizzi1u@npr.org",
            gender: "Female",
            ip_address: "37.205.148.153"
        },
        {
            id: 68,
            first_name: "Carolus",
            last_name: "Blitzer",
            email: "cblitzer1v@surveymonkey.com",
            gender: "Male",
            ip_address: "128.232.169.198"
        },
        {
            id: 69,
            first_name: "Kev",
            last_name: "Carleman",
            email: "kcarleman1w@nytimes.com",
            gender: "Male",
            ip_address: "67.70.230.16"
        },
        {
            id: 70,
            first_name: "Davidde",
            last_name: "Arnson",
            email: "darnson1x@alibaba.com",
            gender: "Male",
            ip_address: "36.209.214.95"
        },
        {
            id: 71,
            first_name: "Charmian",
            last_name: "Chevis",
            email: "cchevis1y@seattletimes.com",
            gender: "Female",
            ip_address: "128.11.254.138"
        },
        {
            id: 72,
            first_name: "Donnie",
            last_name: "Drewes",
            email: "ddrewes1z@cargocollective.com",
            gender: "Female",
            ip_address: "40.88.99.175"
        },
        {
            id: 73,
            first_name: "Annabel",
            last_name: "Jeeks",
            email: "ajeeks20@sun.com",
            gender: "Female",
            ip_address: "21.5.140.175"
        },
        {
            id: 74,
            first_name: "Berry",
            last_name: "Catterell",
            email: "bcatterell21@umn.edu",
            gender: "Female",
            ip_address: "233.220.207.197"
        },
        {
            id: 75,
            first_name: "Mahmoud",
            last_name: "Howroyd",
            email: "mhowroyd22@ezinearticles.com",
            gender: "Male",
            ip_address: "116.222.13.102"
        },
        {
            id: 76,
            first_name: "Joelie",
            last_name: "Darcey",
            email: "jdarcey23@google.co.uk",
            gender: "Female",
            ip_address: "180.38.10.96"
        },
        {
            id: 77,
            first_name: "Koenraad",
            last_name: "Lockyear",
            email: "klockyear24@europa.eu",
            gender: "Male",
            ip_address: "41.124.147.80"
        },
        {
            id: 78,
            first_name: "Ange",
            last_name: "Soule",
            email: "asoule25@purevolume.com",
            gender: "Female",
            ip_address: "13.143.180.29"
        },
        {
            id: 79,
            first_name: "Jenda",
            last_name: "Brandenberg",
            email: "jbrandenberg26@facebook.com",
            gender: "Female",
            ip_address: "4.47.119.162"
        },
        {
            id: 80,
            first_name: "Rebecka",
            last_name: "Vivyan",
            email: "rvivyan27@lycos.com",
            gender: "Female",
            ip_address: "153.181.78.26"
        },
        {
            id: 81,
            first_name: "Barde",
            last_name: "Jenner",
            email: "bjenner28@blogs.com",
            gender: "Male",
            ip_address: "129.95.93.242"
        },
        {
            id: 82,
            first_name: "Vince",
            last_name: "Prestige",
            email: "vprestige29@yahoo.co.jp",
            gender: "Male",
            ip_address: "122.110.50.28"
        },
        {
            id: 83,
            first_name: "Bogey",
            last_name: "Trillow",
            email: "btrillow2a@slideshare.net",
            gender: "Male",
            ip_address: "201.202.248.40"
        },
        {
            id: 84,
            first_name: "Faythe",
            last_name: "Mothersole",
            email: "fmothersole2b@dropbox.com",
            gender: "Female",
            ip_address: "115.172.20.235"
        },
        {
            id: 85,
            first_name: "Alphonso",
            last_name: "Bastian",
            email: "abastian2c@addtoany.com",
            gender: "Male",
            ip_address: "239.164.181.14"
        },
        {
            id: 86,
            first_name: "Cristobal",
            last_name: "Staves",
            email: "cstaves2d@wikia.com",
            gender: "Male",
            ip_address: "44.88.69.155"
        },
        {
            id: 87,
            first_name: "Sacha",
            last_name: "Huggard",
            email: "shuggard2e@gizmodo.com",
            gender: "Female",
            ip_address: "153.166.95.126"
        },
        {
            id: 88,
            first_name: "Sella",
            last_name: "Beeble",
            email: "sbeeble2f@fda.gov",
            gender: "Female",
            ip_address: "6.104.7.238"
        },
        {
            id: 89,
            first_name: "Prisca",
            last_name: "Rawll",
            email: "prawll2g@constantcontact.com",
            gender: "Female",
            ip_address: "58.200.251.171"
        },
        {
            id: 90,
            first_name: "Kaylee",
            last_name: "Hansel",
            email: "khansel2h@ca.gov",
            gender: "Female",
            ip_address: "195.115.128.238"
        },
        {
            id: 91,
            first_name: "Alys",
            last_name: "Woodrow",
            email: "awoodrow2i@dot.gov",
            gender: "Female",
            ip_address: "16.159.73.190"
        },
        {
            id: 92,
            first_name: "Issie",
            last_name: "Croome",
            email: "icroome2j@pinterest.com",
            gender: "Female",
            ip_address: "223.91.62.138"
        },
        {
            id: 93,
            first_name: "Bernardo",
            last_name: "Burchatt",
            email: "bburchatt2k@hatena.ne.jp",
            gender: "Male",
            ip_address: "199.199.167.174"
        },
        {
            id: 94,
            first_name: "Linea",
            last_name: "Harryman",
            email: "lharryman2l@cyberchimps.com",
            gender: "Female",
            ip_address: "105.47.97.46"
        },
        {
            id: 95,
            first_name: "Rosella",
            last_name: "Deamer",
            email: "rdeamer2m@theguardian.com",
            gender: "Female",
            ip_address: "67.20.141.188"
        },
        {
            id: 96,
            first_name: "Fanni",
            last_name: "De Blasiis",
            email: "fdeblasiis2n@sun.com",
            gender: "Female",
            ip_address: "139.92.237.4"
        },
        {
            id: 97,
            first_name: "Celia",
            last_name: "Gomby",
            email: "cgomby2o@webnode.com",
            gender: "Female",
            ip_address: "152.109.96.86"
        },
        {
            id: 98,
            first_name: "Erroll",
            last_name: "Lethbury",
            email: "elethbury2p@furl.net",
            gender: "Male",
            ip_address: "238.44.245.221"
        },
        {
            id: 99,
            first_name: "Saxon",
            last_name: "Beardsworth",
            email: "sbeardsworth2q@smh.com.au",
            gender: "Male",
            ip_address: "122.4.220.82"
        },
        {
            id: 100,
            first_name: "Freddy",
            last_name: "Czapla",
            email: "fczapla2r@netvibes.com",
            gender: "Male",
            ip_address: "75.93.123.109"
        }
    ]

    return (
        <Table columns={columns} data={data}/>
    )
}