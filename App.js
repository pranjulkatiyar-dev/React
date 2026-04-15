import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"></img>
            </div>

            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
            
        </div>
    )
}

const RestaurantCard = (props) =>{
   const {resData} = props;
    

    return(
        <div className="res-card">
            <img className="res-logo"
             src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}
             alt="res-logo"></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}minutes</h4>
            <h4>{resData.info.costForTwo}</h4>
        </div>
    )
}

const reslist = 
 [
{  
"info": {
"id": "659629",
"name": "Wow! Momo",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/9/8e10df89-cce8-4ac7-8233-c055fde9c2c2_659629.JPG",
"locality": "Kanpur Nagar",
"areaName": "Kalyanpur",
"costForTwo": "₹300 for two",
"cuisines": [
"Momos",
"Chinese",
"fastfood",
"Asian",
"Beverages"
],
"avgRating": 4.5,
"parentId": "1776",
"avgRatingString": "4.5",
"totalRatingsString": "1.9K+",
"sla": {
"deliveryTime": 35,
"lastMileTravel": 1,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "1.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-13 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
"description": "Best in Chinese"
},
{
"imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
"description": "Best in Momo"
},
{
"imageId": "Rxawards/_CATEGORY-Chinese.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "bolt!",
"imageId": "android/static-assets/icons/big_rx.png"
}
},
{
"attributes": {
"description": "Best in Chinese",
"imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Best in Momo",
"imageId": "brand_cards/Badges%202026/66_Best%20in%20Momo2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Chinese.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹99"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-dd1b2ad8-6117-4c5a-bbf8-ae6f9972833a"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/wow-momo-nagar-kalyanpur-rest659629",
"type": "WEBLINK"
}
},

{
    "info": {
"id": "812786",
"name": "Baskin Robbins - Ice Cream Desserts",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/cba8242f-7136-4d72-b5da-0b7172bf7e97_812786.JPG",
"locality": "Harsh Nagar",
"areaName": "TSP Tower",
"costForTwo": "₹250 for two",
"cuisines": [
"Desserts",
"Ice Cream"
],
"avgRating": 4.8,
"veg": true,
"parentId": "5588",
"avgRatingString": "4.8",
"totalRatingsString": "58",
"sla": {
"deliveryTime": 53,
"lastMileTravel": 9.1,
"serviceability": "SERVICEABLE",
"slaString": "50-60 mins",
"lastMileTravelString": "9.1 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-12 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
"description": "Best in Ice Cream"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Best in Ice Cream",
"imageId": "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
"theme": ""
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹200 OFF",
"subHeader": "ABOVE ₹1299",
"headerTypeV2": "HEADER_TYPE_V2_TOP_UP",
"secondaryDiscountCallout": "+ EXTRA ₹100 OFF"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-dd1b2ad8-6117-4c5a-bbf8-ae6f9972833a"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/baskin-robbins-ice-cream-desserts-harsh-nagar-tsp-tower-rest812786",
"type": "WEBLINK"
}
},
]



const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {reslist.map((restaurant) => (
                                    <RestaurantCard 
                        key={restaurant.info.id} 
                        resData={restaurant} 
                    />
                ))}

            </div>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

 const root =ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout/>);

