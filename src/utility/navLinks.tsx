import AccountIcon from "@/icons/AccountIcon";
import HomeIcon from "@/icons/HomeIcon";
import Logout from "@/icons/Logout";
import Support from "@/icons/Support";
import WorkSpace from "@/icons/WorkSpace";
import setting from "@/icons/setting";

export const navLinks:Links=[
{
    id:"1",
    name:"Home",
    icon:HomeIcon
},
{
    id:"2",
    name:"Accounts",
    icon:AccountIcon,
    active:true
},
{
    id:"3",
    name:"Workspaces",
    icon:WorkSpace
},
{
    id:"4",
    name:"Account",
    icon:setting
},
]

export const navFooterLinks:FooterLinks=[
    {
        id:"1",
        name:"Support",
        icon:Support
    },
    {
        id:"2",
        name:"Log out",
        icon:Logout
    },
  
    ]