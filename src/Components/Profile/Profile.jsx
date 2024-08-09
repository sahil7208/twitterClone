import React from 'react'
import { useState } from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';
import { Avatar,Button } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationIcon from '@mui/icons-material/LocationOn';
import CalenderIcon from '@mui/icons-material/CalendarMonth'
import {Box} from '@mui/material';
import {Tab} from '@mui/material';
import {TabContext} from '@mui/lab';
import {TabList} from '@mui/lab';
import {TabPanel} from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';
import ProfileModal from './ProfileModal';



const Profile = () => {
const [tabValue,setTabValue] = useState("1");


const navigate=useNavigate();
    const handleBack = () => navigate(-1);

    const [openProfileModel,setOpenProfileModel] = useState(false)

    const handleOpenProfileModel = () => setOpenProfileModel(true);
    const handleClose = () => setOpenProfileModel(false);

    

    const handleFollowUser = () => {
        console.log("Folllow user")
    }

    const handleTabChange = (event, newValue) => {
setTabValue(newValue)
if(newValue === 4){
    console.log("likes tweet")
}else if(newValue == 1){
console.log("users tweets")
}
    }
    return(
        <div>
<section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
<KeyboardBackspaceIcon  className='cursor-pointer' onClick={handleBack}/>
<h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Sahil Mahadik</h1>
</section>
<section>
    <img src="https://cdn.pixabay.com/photo/2022/11/10/00/57/lake-7581726_640.jpg" alt="" className='w-[100%] h-[15rem] object-cover'/>
</section>
<section className='pl-6'>
    <div className='flex items-start justify-between mt-5 h-[5rem]'>
<Avatar className='transform -translate-y-24' alt="sahil mahadik" src='' sx={{width:'10rem', height:"10rem", border:"4px solid white"}}/>
{true ? <Button className="rounded-full " variant='contained' sx={{borderRadius:'20px'}}
onClick={handleOpenProfileModel}>Edit Profile</Button>:
<Button className="rounded-full " variant='contained' sx={{borderRadius:'20px'}}
onClick={handleFollowUser}>{true ? "Follow" : "Unfollow" }</Button>}
    </div>
    <div>
        <div className='flex items-center'>
            <h1 className='font-bold text-lg'>Sahil Mahadik</h1>
        </div>
        <h1 className='text-gray-500'>@sahil</h1>
    </div>
    <div className='mt-2 space-y-3'>
<p>Hello, I am Sahil want to become a full stack and software developer</p>
<div className='py-1 flex space-x-5
'>
    <div className='flex items-center text-gray-500'>
<BusinessCenterIcon/>
<p className='ml-2'>Education</p>
    </div>
    <div className='flex items-center text-gray-500'>
<LocationIcon/>
<p className='ml-2'>India</p>
    </div>
    <div className='flex items-center text-gray-500'>
<CalenderIcon/>
<p className='ml-2'>Joined jun 2022</p>
    </div>
</div>
<div className='flex items-center space-x-5'>
<div className='flex items-center space-x-1 font-semibold'>
<span>190</span>
<span className='text-gray-500 '>Following</span>
</div>
<div className='flex items-center space-x-1 font-semibold'>
<span>590</span>
<span className='text-gray-500 '>Followers</span>
</div>
</div>
            </div>
</section>
<section className='py-5'>
<Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Tweets" value="1" />
            <Tab label="Replies" value="2" />
            <Tab label="Media" value="3" />
            <Tab label="Likes" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">{[1,1,1,1].map((item) => <TweetCard/>)}</TabPanel>
        <TabPanel value="2">users replies</TabPanel>
        <TabPanel value="3">Media</TabPanel>
        <TabPanel value="4">Likes</TabPanel>
      </TabContext>
    </Box>
</section>
<section>
    <ProfileModal handleClose={handleClose} open={openProfileModel}/>
</section>
        </div>
    )
}

export default Profile