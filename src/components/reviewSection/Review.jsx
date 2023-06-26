import React from 'react'
import ReviewBox from '../reviewBox/ReviewBox'

const Review = () => {
    const reviews = [
        {
            review:"Hill,I received the cards today.They are really really good.. quality wise too.. And what to say about the illustration, it's sooo soo good so detailed.. minor details are covered too.. the strokes are smooth",
            name:"Customer"
        },
        {
            review:"Hi ayushi Thankyouuu so much just received the parcel, as always its amazing And thanks a tonn for delivering it soooo soon You capture memories thanks a tonn",
            name:"Customer"
        },
        {
            review:"That's so beautifully done, thank you for putting all my love through your efforts 💓 Truly greatful Thank you So much Perfectly put together",
            name:"Customer"
        },
    ]
  return (
    <div className='bg-background w-full p-40 '>
        <div className='w-full h-full flex flex-row  justify-around gap-2 items-stretch '>
            {reviews.map((item,keyval)=>{
                return(<ReviewBox name={item.name} key={keyval} review={item.review} />)
            })}
        </div>
    </div>
  )
}

export default Review