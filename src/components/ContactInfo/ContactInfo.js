import React from "react"
import "./ContactInfo.css"

export default function ContactInfo({ userData }) {
  return (
    <div className="contactInfo">
      <div className="contactInfo_item">
        {/* <div className='contactInfo_item_text'>Почта:</div> */}
        <div className="contactInfo_item_text">
          <i className="fas fa-envelope"></i>
          {userData.email}
        </div>
      </div>
      <div className="contactInfo_item">
        {/* <div className='contactInfo_item_text'>Номер телефона:</div> */}
        <div className="contactInfo_item_text">
          <i className="fas fa-phone-alt"></i>
          {userData.phone}
        </div>
      </div>
      <div className="contactInfo_item">
        {/* <div className='contactInfo_item_text'>Дата рождения:</div> */}
        <div className="contactInfo_item_text">
          <i className="fas fa-calendar-alt"></i>
          {userData.birthday}
        </div>
      </div>
      <div className="contactInfo_item">
        {/* <div className='contactInfo_item_text'>Город:</div> */}
        <div className="contactInfo_item_text">
          <i className="fas fa-map-marker-alt"></i>
          г. {userData.address}
        </div>
      </div>
    </div>
  )
}
