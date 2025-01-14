import React from "react";
import RepeatIcon from '@mui/icons-material/Repeat';
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { useNavigate } from "react-router-dom";
import ChatBubbleOutlineicon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import FavoriteIcon from '@mui/icons-material/Favorite'
import ReplyModal from "./ReplyModal";
import { useState } from "react";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModel,setOpenReplyModel] = useState(false)

  const handleOpenReplyModel = () => setOpenReplyModel(true);
  const handleCloseReplyModal = () => setOpenReplyModel(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteTweet = () => {
    console.log("delete tweet")
    handleClose();
  }

  

  const handleCreateRetweet = () => {
    console.log("handle create retweet")
  }

  const handleLiketweet = () => {
    console.log("handle like tweet")
  }

  return (
    <React.Fragment>
      {/* <div className="flex items-center font-semibold text-gray-700 py-2">
<RepeatIcon/>
<p>You Retweet</p>
</div> */}
      <div className="flex space-x-5 ">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer "
          alt="" src="" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Sahil Mahadik</span>
              <span className="text-gray-600">@sahil . 2m</span>
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >

                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                <MenuItem onClick={handleDeleteTweet}>Edit</MenuItem>
              </Menu>
            </div>
          </div>
          <div className="mt-2">
            <div onClick={()=>navigate(`/tweets/${3}`)}className="cursor-pointer">
<p className="mb-2 p-0">twitter clone - full stack project with spring boot and react</p>
<img className="w-[28rem] border border-gray-400 p-5 rounded-md" src="../././public/vite.svg" alt="" />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
<ChatBubbleOutlineicon className="cursor-pointer " onClick={handleOpenReplyModel}/>
<p>43</p>
              </div>
              <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
<RepeatIcon className="cursor-pointer" onClick={handleCreateRetweet}/>
<p>54</p>
              </div>
              <div className={`${true? "text-pink-600":"text-gray-600"} space-x-3 flex items-center`}>
{true ? <FavoriteIcon className="cursor-pointer" onClick={handleLiketweet}/>:<FavoriteIcon className="cursor-pointer" onClick={handleLiketweet}/>}
<p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
<BarChartIcon className="cursor-pointer " onClick={handleOpenReplyModel}/>
<p>430</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
<FileUploadIcon className="cursor-pointer " onClick={handleOpenReplyModel}/>

              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModal open={openReplyModel} handleClose={handleCloseReplyModal}/>
      </section>
    </React.Fragment>
  )
}

export default TweetCard