import React from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(<>Linkedin <FaLinkedin size={'2rem'}/></>),
            href:"https://www.linkedin.com/in/priyanshu-agrawal-124312215/",
            style:"rounded-tr-md"
        },
        {
            id:2,
            child:(<>Github <FaGithub size={'2rem'}/></>),
            href:"https://github.com/priyanshu8346"
        },
        {
            id:3,
            child:(<>Mail <HiOutlineMail size={'2rem'}/></>),
            href:"mailto:priyanshuagrawal419@gmail.com"
        },
        {
            id:4,
            child:(<>Resume <BsFillPersonLinesFill size={'2rem'}/></>),
            href:"../assets/Priyanshu Agrawal.pdf",
            download:true,
            style:"rounded-br-md"
        }
    ]
  return (
    <div className='flex flex-col absolute top-[35%] left-0 z-10 mw-10' id='socialLink'>
        <ul>
            {links.map(({id, child, href, download, style})=>{
                return <>
                <li key={id} className={'flex justify-center items-center w-[9.5rem] h-10 bg-white px-4 ml-[-6.25rem] hover:ml-[-0.625rem] duration-300' + " " + style}><a href={href} className='flex justify-between items-center w-full font-bold text-lg ' download={download} target='_blank' rel='noreferrer'>{child} </a></li>
                </>
            })}
        </ul>
    </div>
  )
}

export default SocialLinks
