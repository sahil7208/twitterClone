import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: 'none',
  outline: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius:4
};

export default function SubscriptionModal({open,handleClose}) {
  const [plan, setPlan] = React.useState('Anunally')
  const features = ["Prioritized rankings in conversations and search","See approximately twice as many Tweets between ads for you and following timelines ","Add bold and italic text in your Tweets","Post longer videos and 1080p video uploads", "All the existing blue features, including edit tweets, bookmark folders and early access to new features"]

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='flex items-center space-x-3'>
<IconButton onClick={handleClose} aria-label="delete" className='top-10'>
    <CloseIcon />
   
</IconButton>

</div>
<div className='flex justify-center py-10'>
<div className='w-[80%] space-y-10' >
<div className='p-5 rounded-md flex items-center justify-between shadow-lg bg-slate-400'>
<h1 className='text-xl pr-5'>Blue subscribers witt a verified phone number will get a blue checkmark once approved</h1>
<img className='w-24 h-24 border rounded-3xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls7lgJ2Zl3BLS8tubeY8lnPF3mOqiE1HRXQ&s" alt="" />
</div>
<div className='flex justify-between border rounded-full px-5 py-3 border-gray-500'>
<div>
    <span onClick={()=>setPlan("Anunally")} className={`${plan ==="Anunally"?"text-black":"text-gray-400"} cursor-pointer`}>
        Anunally
    </span>
    <span className='text-green-500 text-sm ml-5'>SAVE 12%</span>
</div>
<p onClick={()=>setPlan("monthly")} className={`${plan ==="monthly"?"text-black":"text-gray-400"} cursor-pointer`}>Monthly</p>
</div>
{features.map((item)=> <div className='space-y-3 '>
<div className='flex items-center space-x-5'>
<FiberManualRecordIcon sx={{width:'7px',height:'7px'}}/>
<p className='text-sm'>{item}</p>
</div>
</div>)}
<div className='cursor-pointer flex justify-center bg-gray-900 text-white rounded-full px-5 py-3'>
    <span className='line-through italic'>₹7,800.00</span>
    <span className='px-5'>₹6,800/year</span>
</div>
</div>
</div>
        </Box>
      </Modal>
    </div>
  );
}
