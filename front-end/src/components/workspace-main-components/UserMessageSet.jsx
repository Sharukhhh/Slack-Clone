import React from "react";
import { formatDate, formatTime } from "../../utils/dateFormat";

const UserMessageSet = ({senderData, body, time}) => {

    const formattedTime = formatTime(time);
    return (
        <>
            <div className="py-3 px-2 flex space-x-2">
                <img src={senderData?.profileImage} alt="" className="w-10 h-10 rounded-lg"/>
                <div className="flex flex-col space-y-1">
                    <span className="font-bold">{senderData?.username}</span>
                    <span className="font-normal">{body}</span>
                </div>
                <span className="font-extralight self-end">{formattedTime}</span>
            </div>
        </>
    )
};

export default UserMessageSet

// const MessageSegments = ({msgData}) => {
    
//     const messagesByDate = msgData?.messages?.message?.reduce((acc , currMessage) => {
//         const date = new Date(currMessage?.createdAt).toLocaleDateString();

//         if(!acc[date]) acc[date] = []
//         else acc[date].push(currMessage);
//         return acc;
//     } , {});

//     return (
//         <>
//             <div>
//                 {Object.keys(messagesByDate).map((date ) => (
//                     <React.Fragment key={date} >
//                         <div className="flex items-center justify-center my-4">
//                             <hr  className="flex-grow border-t border-gray-300"/>
//                             <span className="px-3 text-gray-500 text-sm bg-white">{formatDate(date)}</span>
//                             <hr className="flex-grow border-t border-gray-300"/>
//                         </div>
//                         {messagesByDate[date]?.map((msg) => (
//                             <UserMessageSet
//                                 key={msg?._id}
//                                 senderData={msg?.sender}
//                                 body={msg?.body}
//                                 time={msg?.createdAt}
//                             />
//                         ))}
//                     </React.Fragment>
//                 ))}
//             </div>
//         </>
//     )
// }




// export default MessageSegments;