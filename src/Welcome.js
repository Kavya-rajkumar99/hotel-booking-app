import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { WelcomePageHotels } from "./WelcomePageHotels";
import { WelcomePageCategory } from "./WelcomePageCategory";
import { WelcomePageReviews } from "./WelcomePageReviews";
import { WelcomePageHeader } from "./WelcomePageHeader";
import { WelcomePageFooter } from "./WelcomePageFooter";
export function Welcome() {
  const hotelsInfo = [
    {
      poster:
        "https://media.istockphoto.com/photos/digitally-generated-image-of-the-luxurious-hotel-lobby-picture-id1333257932?b=1&k=20&m=1333257932&s=170667a&w=0&h=nqZBbI2aO7vFCBbUWoAXHu4Ft4kHPKihTdq-afjN5QI=",
      name: "The Paradise",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      poster:
        "https://i.pinimg.com/originals/7c/7c/b4/7c7cb4049f242f7cab949efd694184e8.jpg",
      name: "Crown Plaza",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      poster:
        "https://i.pinimg.com/originals/33/79/a1/3379a1dd58f428e53c1ef55a2491d34a.jpg",
      name: "Emerald Bay",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];
  const roomsInfo = [
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
  ];
  const facilitiesInfo = [
    "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
    "https://i.pinimg.com/originals/c0/4b/84/c04b846423728d4d66904600e52602eb.jpg",
  ];
  const cuisinesInfo = [
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  ];
  const hotelReviews = [
    {
      noOfPeople: 30,
      avatarPosters: [
        "https://t4.ftcdn.net/jpg/04/44/53/99/360_F_444539901_2GSnvmTX14LELJ6edPudUsarbcytOEgj.jpg",
        "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
      ],
      avatarNames: ["Remy Sharp", "Travis Howard"],
      rating: "⭐⭐⭐⭐",
      feedback: "Amazing services lorem epsum epsum lorem lorem lorem",
    },
    {
      noOfPeople: 27,
      avatarPosters: [
        "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?k=20&m=1300512215&s=612x612&w=0&h=enNAE_K3bhFRebyOAPFdJtX9ru7Fo4S9BZUZZQD3v20=",
        "https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg",
      ],
      avatarNames: ["Ross Geller", "Chandler Bing"],
      rating: "⭐⭐⭐⭐",
      feedback: "Amazing services lorem epsum epsum lorem lorem lorem",
    },
    {
      noOfPeople: 27,
      avatarPosters: [
        "https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg",
        "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg",
      ],
      avatarNames: ["Monica Geller", "Joey Tribbiani"],
      rating: "⭐⭐⭐⭐",
      feedback: "Amazing services lorem epsum epsum lorem lorem lorem",
    },
  ];
  return (
    <div>
      <WelcomePageHeader />
      <Container maxWidth="lg" className="hotelsContainer">
        <h2>A happy hack of our heavenly hotels</h2>
        <Grid container spacing={3}>
          {hotelsInfo.map((hotel, index) => (
            <WelcomePageHotels key={index} hotel={hotel} />
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" className="hotelsContainer">
        <h2>Ravishing rooms to relish your routine</h2>
        <Grid container spacing={3}>
          {roomsInfo.map((room, index) => (
            <WelcomePageCategory key={index} category={room} />
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" className="hotelsContainer">
        <h2>Facilities as in fairy tales</h2>
        <Grid container spacing={3}>
          {facilitiesInfo.map((facility, index) => (
            <WelcomePageCategory key={index} category={facility} />
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" className="hotelsContainer">
        <h2>Captivating cuisines to activate your taste buds</h2>
        <Grid container spacing={3}>
          {cuisinesInfo.map((cuisine, index) => (
            <WelcomePageCategory key={index} category={cuisine} />
          ))}
        </Grid>
      </Container>
      <Container maxWidth="lg" className="hotelsContainer">
        <h2>Valuable feedbacks from our customers</h2>
        <Grid container spacing={3}>
          {hotelReviews.map((review, index) => (
            <WelcomePageReviews key={index} review={review} />
          ))}
        </Grid>
      </Container>
      <WelcomePageFooter />
    </div>
  );
}
