import { Button, Grid } from '@mui/material';
//import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import AuthModal from './AuthModal';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Authentication = () => {
    const [openAuthModal,setOpenAuthModal] = useState(false);
    const handleOpenAuthModal = () => setOpenAuthModal(true);
    const handleCloseAuthModal = () => setOpenAuthModal(false);
    const navigate = useNavigate();
    return(
        <>
        <div>
            <Grid className='overflow-y-hidden' container>
<Grid className='hidden lg:block' item lg={7}> 
<img className='w-full h-screen' src='https://resize.indiatvnews.com/en/centered/newbucket/1200_675/2024/02/x-not-working-in-pakistan-1708764676.jpg'/>
{/* <div className='absolute top-[]'>

</div> */}
</Grid>
<Grid className='px-10' item lg={5} xs={12}>
<h1 className=' mt-10 font-bold text-7xl'>Happening Now</h1>
<h1 className='font-bold text-3xl py-16'>Join Twitter Today</h1>
<div className='w-[60%]'>
    <div className='w-full'>
    <GoogleLogin width={330}/>
    <p className='py-5 text-center'>OR</p>
    <Button onClick={handleOpenAuthModal} fullWidth variant='contained' size='large' sx={
       { borderRadius: "29px",
        py:"7px"
    }
    }> 
Create Account
    </Button>
    <p className='text-sm mt-2'>By signing up, you agree to the Terms of Service and Privacy Policy, incliding Cookie Use.</p>
    </div>
    <div className='mt-10'>
        <h1 className='font-bold text-xl mb-5'>Already Have Account?</h1>
    <Button onClick={handleOpenAuthModal} fullWidth variant='outlined' size='large' sx={
       { borderRadius: "29px",
        py:"7px"
    }
    }> 
LOGIN
    </Button>
    </div>
</div>
</Grid>
            </Grid>
            <AuthModal open={openAuthModal} handleClose={handleCloseAuthModal}/>
        </div>
        </>
    )
}

export default Authentication;