type DataItem={
        Account: string;
        accountId: string;
        accountScore: string;
        status: string;
        Country: string;
        lastUpdated: string;
        id: string;
        icon: string;
}
type Data=DataItem[]

type HeadItem={
    name: string;
    id: string;
}
type Head=HeadItem[]
type ModelData={
    radioType: string;
    CompanyName: string;
    registrationCode: string;
    countryOfRegistration: string;
}
type LinkItem={
    id: string;
    name: string;
    icon: ({}:{}) => JSX.Element;
    active?: true;
}
type Links=LinkItem[]

type LinkFooterItem={
    id: string;
    name: string;
    icon: ({}: {}) => JSX.Element;
}
type FooterLinks=LinkFooterItem[]