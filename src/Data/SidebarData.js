import { BiBookmark } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { RiPagesLine } from "react-icons/ri";
import { CiBellOn } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaUser } from "react-icons/lia";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";


export const SiderbarDataTop = [
    {id:1,
        icon:<IoHomeOutline/>,
        title:"Home"
    },
    {id:2,
        icon:<MdOutlineArrowOutward/>,
        title:"Payments",
        new:"NEW",
    },
    {id:3,
        icon:<RiPagesLine/>,
      
        title:"Account Statement"
    },
    {id:4,
        icon:<LiaUser/>,
          title:"Contact"
        
    }

]


 export const SiderbarDataBottom = [
    {id:1,
       
        icon:<BiBookmark/>,
        title:"Vendor Payments"
    },
    {id:2,
        icon:<CiBellOn/>,
        
        title:"Tax Payments"
    },
    {id:3,
        icon:<LuSend/>,
        title:"Payout Link"
    },
    {id:4,
        icon:<MdOutlineArrowOutward/>,
        title:"Payroll"
    },
    {id:5,
        icon:<RiBook2Line/>,
        title:"Reports"
    }


]





