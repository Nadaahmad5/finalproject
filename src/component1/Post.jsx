// import "../App.css";

// import React from "react";
// import ExplorePic7 from '../imgs.png/explorePic7.avif';
// import Singer from '../imgs.png/singer.png';
// import SendIcon from '@mui/icons-material/Send';
// import Avatar from '@mui/material/Avatar';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

// function Post() {

  
//   return (
//     <div style={{width:"590px"}}>
//       <div style={{ backgroundColor: "black", display: "flex", alignItems: "center" }}>
//         <Avatar alt="Remy Sharp" src={Singer} sx={{ width: "8%", height: "9%" }} />
//         <span style={{ color: "white" }}>Nada.Haj.Ahmad</span>
//         <MoreVertIcon style={{ marginLeft: "auto", color: "white" }} />
//       </div>
//       <img src={ExplorePic7} style={{ marginTop: "10px", width: "100%" }} />
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", padding: "10px" }}>
//         <div>
//           <FavoriteBorderIcon style={{ color: "white" }} />
//           <SendIcon style={{ color: "white", marginLeft: "10px" }} />
//         </div>
//         <div>
//           <BookmarkBorderRoundedIcon style={{ color: "white" }} />
//         </div>
//       </div>
     
//         <h5 style={{ color: "white",display: "flex",marginTop:"-1px"}}>600 Likes</h5>
//         <h6 style={{ color: "white",display: "flex",marginTop:"-15px"}}>Nada.Haj.Ahmad</h6>
  
//         <div style={{ textAlign: "left", color: "white",marginTop:"-40px", display: "flex", padding: "-10px" }}>
//         <h6>Color blue represents both the sky and the sea and is associated with open spaces, freedom, intuition, imagination, inspiration, and sensitivity.</h6>
//       </div>
//     </div>
//   );
// }

// export default Post











import "../App.css";

import React from "react";
import ExplorePic7 from '../imgs.png/explorePic7.avif';
import SendIcon from '@mui/icons-material/Send';
import Avatar from '@mui/material/Avatar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import boy from '../imgs.png/boy.png';

function Post() {

  
  return (
    <div style={{width:"590px"}}>
      <div style={{ backgroundColor: "black", display: "flex", alignItems: "center" }}>
        <Avatar alt="Remy Sharp" src={boy} sx={{ width: "8%", height: "9%" }} />
        <span style={{fontSize:"15px", color: "white" ,marginLeft:"20px"}}>AmmarNH</span>
        <MoreVertIcon style={{ marginLeft: "auto", color: "white" }} />
      </div>
      <img src={ExplorePic7} style={{ marginTop: "10px", width: "100%" }} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", padding: "10px" }}>
        <div>
          <FavoriteBorderIcon style={{ color: "white" }} />
          <SendIcon style={{ color: "white", marginLeft: "10px" }} />
        </div>
        <div>
          <BookmarkBorderRoundedIcon style={{ color: "white" }} />
        </div>
      </div>
     
        <h5 style={{ fontSize:"14px",color: "white",display: "flex",marginTop:"-1px"}}>600 Likes</h5>
        <h6 style={{ fontSize:"14px",color: "white",display: "flex",marginTop:"-15px"}}>AmmarNH</h6>
  
        <div style={{fontSize:"20px",textAlign: "left", color: "white",marginTop:"-40px", display: "flex", padding: "-10px" }}>
        <h6>Blue represents both the sky and the sea and is associated with open spaces, freedom, intuition, imagination, inspiration, and sensitivity.</h6>
      </div>
    </div>
  );
}

export default Post;