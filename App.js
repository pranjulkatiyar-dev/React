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
"id": "316613",
"name": "KFC",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/bbdb0f73-4cef-4de2-8128-0aa84d03c1eb_316613.JPG",
"locality": "H block",
"areaName": "Kakadeo",
"costForTwo": "₹400 for two",
"cuisines": [
"Burgers",
"Fast Food",
"Rolls & Wraps"
],
"avgRating": 4.4,
"parentId": "547",
"avgRatingString": "4.4",
"totalRatingsString": "9.4K+",
"sla": {
"deliveryTime": 36,
"lastMileTravel": 7.3,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "7.3 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-16 05:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Best in Bolt"
},
{
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
"description": "Best in Burger"
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
"description": "Best in Bolt",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Best in Burger",
"imageId": "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
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
"header": "50% OFF",
"discountTag": "FLAT DEAL"
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
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/kfc-h-block-kakadeo-rest316613",
"type": "WEBLINK"
}
},
{
"info": {
"id": "561552",
"name": "Domino's Pizza",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/27/37067250-783f-4e8c-b87d-fb174c235e3f_561552.JPG",
"locality": "Nankari",
"areaName": "Kalyanpur",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Italian",
"Pastas",
"Desserts"
],
"avgRating": 4.3,
"parentId": "2456",
"avgRatingString": "4.3",
"totalRatingsString": "1.1K+",
"sla": {
"deliveryTime": 25,
"lastMileTravel": 1.2,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "1.2 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-15 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "android/static-assets/icons/big_rx.png",
"description": "bolt!"
},
{
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"description": "Best in Bolt"
},
{
"imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
"description": "Best in Pizza"
},
{
"imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
"description": "Best in Corporate"
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
"description": "Best in Bolt",
"imageId": "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Best in Pizza",
"imageId": "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
"theme": ""
}
},
{
"attributes": {
"description": "Best in Corporate",
"imageId": "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
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
"subHeader": "AT ₹75"
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
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/dominos-pizza-nankari-kalyanpur-rest561552",
"type": "WEBLINK"
}
},
{
"info": {
"id": "686194",
"name": "Chinese Wok",
"cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
"locality": "Metro Station",
"areaName": "SPM Hospital",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Asian",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "61955",
"avgRatingString": "4.3",
"totalRatingsString": "1.8K+",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "20-25 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-15 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
"description": "Best in Chinese"
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
"description": "Best in Chinese",
"imageId": "brand_cards/Badges%202026/46_Best%20in%20Chinese2026.png",
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
"subHeader": "AT ₹149"
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
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/chinese-wok-metro-station-spm-hospital-rest686194",
"type": "WEBLINK"
}
},
{
"info": {
"id": "686195",
"name": "Big Bowl",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/30548ac4-2e57-4c1d-ba73-8372f74a1ad2_686195.JPG",
"locality": "Metro Station",
"areaName": "SPM Hospital",
"costForTwo": "₹250 for two",
"cuisines": [
"Chinese",
"Tibetan",
"Desserts"
],
"avgRating": 4.3,
"parentId": "434792",
"avgRatingString": "4.3",
"totalRatingsString": "813",
"sla": {
"deliveryTime": 20,
"lastMileTravel": 2.4,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "2.4 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-15 23:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹139"
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
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/big-bowl-metro-station-spm-hospital-rest686195",
"type": "WEBLINK"
}
},
{
"info": {
"id": "608598",
"name": "Pizza Hut",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/7627473d-4b55-4426-a842-b409665ec1e7_608598.JPG",
"locality": "Sharda Nagar",
"areaName": "Sharda Nagar",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "2.4K+",
"sla": {
"deliveryTime": 31,
"lastMileTravel": 4.7,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "4.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-16 02:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹110"
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
"rating": "4.7",
"ratingCount": "773"
},
"source": "GOOGLE",
"sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/pizza-hut-sharda-nagar-rest608598",
"type": "WEBLINK"
}
},
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
"deliveryTime": 16,
"lastMileTravel": 1,
"serviceability": "SERVICEABLE",
"slaString": "15-20 mins",
"lastMileTravelString": "1.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-04-16 03:00:00",
"opened": true
},
"badges": {
"imageBadges": [
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
"context": "seo-data-60a610b5-48d2-416f-b9e3-60c3ca2db9f9"
},
"cta": {
"link": "https://www.swiggy.com/city/kanpur/wow-momo-nagar-kalyanpur-rest659629",
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

